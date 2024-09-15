/* eslint-disable import/no-default-export */
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Manrope } from "next/font/google"
import styles from "@/styles/Home.module.css"
import type { NextPage } from 'next'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useWriteContract } from 'wagmi'
import { abbreviateAddressAsString, trackEvent } from '@/helpers/Utilities'
import { Button, Divider, Box, Stack } from '@mui/material'
import { TextNormal, TextSubtle } from '@/Components/StyledComps'
import contractABI from "../helpers/SonicABI"
import usePersistState from "../helpers/usePersistState"
import Head from "next/head"
import { wagmiConfig } from "@/pages/_app"
import { waitForTransactionReceipt } from "@wagmi/core"
import useNFTBalance from "@/hooks/useNFTBalance"
import NetworkButton from "@/Components/NetworkButton"
import useBlockNumber from "@/hooks/useBlockNumber"
import MintingButton from "@/Components/MintingButton"
import SpeedDisplay, { SpeedList } from "@/Components/SpeedDisplay"

const manrope = Manrope({ subsets: ["latin"] })

interface SpeedDisplayProps {
  txSpeedsState: SpeedList[]
  labels: { [key: number]: string }
  confirmations: { [key: number]: number }
  scrollToLatest: boolean
}

const nullSpeed = [
  {chain: "Sonic", chainId: 64165, speed: [], average: -1},
  {chain: "Fantom", chainId: 250, speed: [], average: -1},
  {chain: "Avalanche", chainId: 43114, speed: [], average: -1},
  {chain: "Celo", chainId: 42220, speed: [], average: -1},
  {chain: "Kava", chainId: 2222, speed: [], average: -1},
  {chain: "Arbitrum", chainId: 42161, speed: [], average: -1},
  {chain: "Base", chainId: 8453, speed: [], average: -1},
  {chain: "Optimism", chainId: 10, speed: [], average: -1},
  {chain: "Polygon", chainId: 137, speed: [], average: -1}
]

const confirmations: {[key: number]: number} = {
  250: 1,
  43114: 1,
  64165: 1,
  42220: 1,
  2222: 1,
  42161: 300,
  8453: 78,
  10: 78,
  137: 50
}

const labels: {[key: number]: string} = {
  250: "Fantom",
  43114: "Avalanche",
  64165: "Sonic (Test)",
  42220: "Celo",
  2222: "Kava",
  42161: "Arbitrum One",
  8453: "Base",
  10: "Optimism",
  137: "Polygon Pos"
}

const Home: NextPage = () => {
  const [showAddress, setShowAddress] = useState<`0x${string}` | undefined>(undefined)
  const [networkValue, setNetworkValue] = useState<number>(250)
  const [startTime, setStartTime] = useState<number>(0)
  const [isMinting, setIsMinting] = useState(false)
  const [txSpeedsState, setTxSpeedsState] = useState<SpeedList[]>(nullSpeed)
  const [txSpeeds, setTxSpeeds] = usePersistState<SpeedList[]>(nullSpeed, 'txSpeedHistoryV2')
  const [latestMintedBlockNumber0Conf, setLatestMintedBlockNumber0Conf] = useState<number>(0)
  const [resetKey, setResetKey] = useState(0)
  const [scrollToLatest, setScrollToLatest] = useState(false)

  const { address, chain } = useAccount()
  const { data: blockNumber } = useBlockNumber({refresh: latestMintedBlockNumber0Conf > 0})
  const { open } = useWeb3Modal()
  const hasUpdatedChainInfo = useRef(false)

  // To force remount of MintingButton after minting
  const handleResetTime = useCallback(() => {
    setResetKey(prev => prev + 1)
  }, [])

  const projectId = process.env?.NEXT_PUBLIC_WC_ID || ''
  useEffect(() => {
    console.info("WC", `${projectId?.slice(0, 4)}...`)
  }, [projectId])

  // If the txSpeeds has a missing chain, add it
  useEffect(() => {
    if (hasUpdatedChainInfo.current) {
      return
    }
    const missingChain = nullSpeed.find((x) => !txSpeeds.find((y) => y.chainId === x.chainId))
    if (missingChain) {
      setTxSpeeds([...txSpeeds, missingChain])
      hasUpdatedChainInfo.current = true
    }
  }, [txSpeeds, setTxSpeeds])

  useEffect(() => {
    if (scrollToLatest) {
      // Reset the scroll flag after a short delay
      const timer = setTimeout(() => setScrollToLatest(false), 100)
      return () => clearTimeout(timer)
    }
  }, [scrollToLatest])

  // Current confirmations since last mint
  const currentConfirmations = useMemo(() => {
    if (!blockNumber || !latestMintedBlockNumber0Conf || confirmations[chain?.id ?? 250] <= 1) {
      return 0
    }
    // If currentConfirmations exceeds confirmations, set it default chain confirmations
    return Math.max(0, Math.min(Number(blockNumber) - latestMintedBlockNumber0Conf, confirmations[chain?.id ?? 250]))
  }, [blockNumber, latestMintedBlockNumber0Conf, chain?.id])

  // Append latest speed to matching network list
  const appendSpeed = useCallback((chainId: number, speed: number) => {
    const newSpeeds = txSpeeds.map((x) => {
      if (x?.chainId === chainId) {
        x.speed.push({speed: speed, timestamp: Date.now()})
        x.average = x.speed.reduce((sum, current) => sum + current.speed, 0) / x.speed.length
      }
      return x
    })
    setTxSpeeds(newSpeeds)
    setScrollToLatest(true)
  }, [txSpeeds, setTxSpeeds])

  const nftContract = useMemo(() => {
    switch (chain?.id) {
      // Fantom
      case 250:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Avax
      case 43114:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Sonic
      case 64165:
        return '0x2B6639D06A6Aa36B122491d1Cd839253a2324803'
      // Celo
      case 42220:
        return '0xE610df966B3eD42b9251CEEAa34099736C65FFC9'
      // Kava
      case 2222:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Arbitrum
      case 42161:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Base
      case 8453:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Optimism
      case 10:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Polygon
      case 137:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
    }
  }, [chain?.id])

  const { writeContractAsync } = useWriteContract()
  const { data: totalNFTs, refetch: refetchNFTs } = useNFTBalance({ address, contractAddress: nftContract, abi: contractABI, chainId: chain?.id ?? 250 })

  const isMintingLoading = useMemo(() => showAddress && isMinting, [showAddress, isMinting])

  const onMint = async () => {
    setIsMinting(true)
    try {
      const hash = await writeContractAsync({
        address: nftContract as `0x${string}`,
        abi: contractABI,
        functionName: "mint",
        args: [],
      })
      console.info("START", Date.now())
      console.info("Confirmations to wait for", confirmations[chain?.id ?? 250])
      setStartTime(Date.now())
      const localStartTime = Date.now()

      // Reset latest minted block number
      setLatestMintedBlockNumber0Conf(0)

      // If confirmations are above 1, make a simple receipt check first to save the block number
      if (confirmations[chain?.id ?? 250] > 1) {
        let initReceipt
        for (let i = 0; i <= 120; ++i) {
          try {
            initReceipt = await waitForTransactionReceipt(wagmiConfig, {
              hash: hash,
              confirmations: 1,
            })
            break
          } catch (e) {
            console.info("Error on init confirmation", e)
            console.info("Retrying init confirmation...")
          }
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        if (initReceipt?.status === "success") {
          setLatestMintedBlockNumber0Conf(Number(initReceipt.blockNumber ?? 0))
        }
      }

      let receipt
      for (let i = 0; i <= 1800; ++i) {
        try {
          receipt = await waitForTransactionReceipt(wagmiConfig, {
            hash: hash,
            onReplaced: (replacement) => console.info("Tx replaced:", replacement),
            confirmations: confirmations[chain?.id ?? 250],
          })
          break
        } catch (e) {
          console.info("Error", e)
          console.info("Retrying...")
          if (i === 1800) {
            throw e
          }
        }
        // Sleep for 1 second, for a max of 30 minutes
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
      console.info("Receipt", receipt)
      if (receipt?.status === "success") {
        const diff = Date.now() - localStartTime
        console.info(`Time taken ${diff}ms`)
        if (chain?.id) {
          appendSpeed(chain.id, diff)
        }
        refetchNFTs()
        // Reset latest minted block number
        setLatestMintedBlockNumber0Conf(0)
        trackEvent(`${chain?.name} tx`, undefined, undefined, diff < 1000 ? Math.round(diff / 100) * 100 : Math.round(diff / 500) * 500)
      } else {
        console.error("Tx failed", receipt)
        // Reset latest minted block number
        setLatestMintedBlockNumber0Conf(0)
      }
    } catch (error: any) {
      // Reset latest minted block number
      setLatestMintedBlockNumber0Conf(0)
      console.error(error)
      trackEvent("Mint Error", "Contract")
    } finally {
      setIsMinting(false)
      setStartTime(0)
      handleResetTime() // Reset the time in MintingButton
    }
  }

  useEffect(() => {
    if (address) {
      setShowAddress(address)
    } else {
      setShowAddress(undefined)
    }
  }, [address])

  useEffect(() => {
    if (txSpeeds) {
      setTxSpeedsState(txSpeeds)
    } else {
      setTxSpeedsState(nullSpeed)
    }
  }, [txSpeeds])

  // Change network value when chain.id changes
  useEffect(() => {
    if (chain?.id && chain?.id !== networkValue) {
      setNetworkValue(chain.id)
    }
  }, [chain?.id, networkValue])

  return (
    <>
      <Head>
        <title>Web3 Speed Checker</title>
        <meta name="description" content="Test the speed of EVM chains" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="fantom, sonic, $S, evm, fvm, testnet, transactions, speed, tps, finality, confirmations, fast, crypto, base, arbitrum, optimism, polygon, avalanche, celo, kava" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Speed Checker - Test the speed of EVM chains" />
        <meta name="twitter:image" content="https://speedchecker.paintswap.io/og.png" />
        <meta name="twitter:domain" content="speedchecker.paintswap.io" />
        <meta name="twitter:site" content="@paintoshi" />
        <meta name="twitter:creator" content="@paintoshi" />
        <meta name="twitter:description" content="Web3 Speed Checker - Test the speed of EVM chains" />

        <meta property="og:title" content="Web3 Speed Checker" />
        <meta property="og:description" content="Test the speed of EVM chains" />
        <meta property="og:image" content="https://speedchecker.paintswap.io/og.png" />
        <meta property="og:url" content="https://speedchecker.paintswap.io" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          <div className={styles.mainPanel}>
            <h1 className={styles.title}>Web3 Speed Checker</h1>
            <p className={styles.titleSub}>
              Compare the finality of different EVM networks<br />
            </p>
            <Stack width="100%" direction={{xs: "column", sm: "row"}} alignItems="center" justifyContent="center" spacing={2}>
              {showAddress && (
                <Button size="large" className={styles.mainButton} variant='contained' color="primary" onClick={() => open()}>{abbreviateAddressAsString(address ?? 'N/A')}</Button>
              )}
              {!showAddress && (
                <Button size="large" className={styles.mainButton} variant='contained' color="primary" onClick={() => open()}>Connect Wallet</Button>
              )}
              <NetworkButton />
            </Stack>

            {showAddress && (
              <>
                {chain?.id === 64165 && (
                  <Box mt="8px">
                    <TextNormal fontSize="14px"><a href="https://testnet.soniclabs.com/account" target="_blank">
                      Get Free Sonic $S</a>
                    </TextNormal>
                  </Box>
                )}
              </>
            )}
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Box mb="8px">
              <TextNormal fontSize="14px">Owned: {totalNFTs?.toString() ?? 0} NFTs</TextNormal>
            </Box>
            <MintingButton
              key={resetKey}
              showAddress={showAddress}
              isMinting={isMinting}
              onMint={onMint}
              isMintingLoading={isMintingLoading}
              startTime={startTime}
            />
            {confirmations[chain?.id ?? 250] > 1 && (
              <Box mt="8px">
                <TextSubtle fontSize="14px">
                {`Confirmations: ${currentConfirmations} / ${chain?.id ? confirmations[chain?.id] : "N/A"}`}
                </TextSubtle>
              </Box>
            )}
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <SpeedDisplay 
              txSpeedsState={txSpeedsState}
              labels={labels}
              confirmations={confirmations}
              scrollToLatest={scrollToLatest}
            />
            <Box alignItems="center" mt="8px">
              <Button variant='text' size="small" onClick={() => setTxSpeeds(nullSpeed)} style={{lineHeight: 1.2}}>
                Clear Speed History
              </Button>
            </Box>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Box mb="0">
              <a href="https://github.com/PaintSwap/fantom-sonic-frontend" target="_blank">Github Source</a>
            </Box>
            {chain?.id === 64165 && (
              <Box mt="8px">
                <a href="https://testnet.soniclabs.com" target="_blank">Fantom Sonic Open Dashboard</a>
              </Box>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
