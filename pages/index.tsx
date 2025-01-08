import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Manrope } from "next/font/google"
import styles from "@/styles/Home.module.css"
import type { NextPage } from 'next'
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
import SpeedDisplay, { chainConfigType, SpeedList } from "@/Components/SpeedDisplay"
import { useAppKit } from "@reown/appkit/react"

const manrope = Manrope({ subsets: ["latin"] })

const nullSpeed = [
  {chain: "Sonic", chainId: 146, speed: [], average: -1},
  {chain: "Fantom", chainId: 250, speed: [], average: -1},
  {chain: "Avalanche", chainId: 43114, speed: [], average: -1},
  {chain: "Celo", chainId: 42220, speed: [], average: -1},
  {chain: "Kava", chainId: 2222, speed: [], average: -1},
  {chain: "Arbitrum", chainId: 42161, speed: [], average: -1},
  {chain: "Base", chainId: 8453, speed: [], average: -1},
  {chain: "Optimism", chainId: 10, speed: [], average: -1},
  {chain: "Polygon", chainId: 137, speed: [], average: -1}
]

const chainConfig: {[key: number]: chainConfigType} = {
  250: {
    label: "Fantom",
    confirmations: 1,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  43114: {
    label: "Avalanche",
    confirmations: 1,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  146: {
    label: "Sonic",
    confirmations: 1,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  42220: {
    label: "Celo",
    confirmations: 1,
    contractAddress: "0xE610df966B3eD42b9251CEEAa34099736C65FFC9"
  },
  2222: {
    label: "Kava",
    confirmations: 1,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  42161: {
    label: "Arbitrum One",
    confirmations: 300,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  8453: {
    label: "Base",
    confirmations: 78,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  10: {
    label: "Optimism",
    confirmations: 78,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  },
  137: {
    label: "Polygon Pos",
    confirmations: 50,
    contractAddress: "0x493F7909E5CA979646Abb86A81a11701420B784F"
  }
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
  const { open } = useAppKit()
  const { writeContractAsync } = useWriteContract()
  const { data: totalNFTs, refetch: refetchNFTs } = useNFTBalance({ address, contractAddress: chainConfig[chain?.id ?? 250].contractAddress, abi: contractABI, chainId: chain?.id ?? 250 })
  const hasUpdatedChainInfo = useRef(false)

  // Current confirmations since last mint
  const currentConfirmations = useMemo(() => {
    if (!blockNumber || !latestMintedBlockNumber0Conf || chainConfig[chain?.id ?? 250].confirmations <= 1) {
      return 0
    }
    // If currentConfirmations exceeds confirmations, set it default chain confirmations
    return Math.max(0, Math.min(Number(blockNumber) - latestMintedBlockNumber0Conf, chainConfig[chain?.id ?? 250].confirmations))
  }, [blockNumber, latestMintedBlockNumber0Conf, chain?.id])

  const isMintingLoading = useMemo(() => showAddress && isMinting, [showAddress, isMinting])
  const projectId = process.env?.NEXT_PUBLIC_WC_ID || ''

  // To force remount of MintingButton after minting
  // Which will reset the timer
  const handleResetTime = useCallback(() => {
    setResetKey(prev => prev + 1)
  }, [])

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

  const onMint = async () => {
    setIsMinting(true)
    try {
      const hash = await writeContractAsync({
        address: chainConfig[chain?.id ?? 250].contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: "mint",
        args: [],
      })
      console.info("START", Date.now())
      console.info("Confirmations to wait for", chainConfig[chain?.id ?? 250].confirmations)
      setStartTime(Date.now())
      const localStartTime = Date.now()

      // Reset latest minted block number
      setLatestMintedBlockNumber0Conf(0)

      // If confirmations are above 1, make a simple receipt check first to save the block number
      if (chainConfig[chain?.id ?? 250].confirmations > 1) {
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
            confirmations: chainConfig[chain?.id ?? 250].confirmations,
          })
          break
        } catch (e) {
          console.info("Error", e)
          console.info("Retrying...")
          if (i === 1800) {
            throw e
          }
        }
        // Sleep for 1 second, for a max of 30 minutes (i <= 1800)
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
        trackEvent(`${chain?.name} tx`, undefined, undefined, diff < 1000 ? Math.round(diff / 100) * 100 : Math.round(diff / 500) * 500)
      } else {
        console.error("Tx failed", receipt)
      }
    } catch (error: any) {
      console.error(error)
      trackEvent("Mint Error", "Contract")
    } finally {
      setIsMinting(false)
      setStartTime(0)
      handleResetTime()
      setLatestMintedBlockNumber0Conf(0)
    }
  }

  useEffect(() => {
    console.info("WC", `${projectId?.slice(0, 4)}...`)
  }, [projectId])

  // If the txSpeeds has a missing chain, add it
  useEffect(() => {
    if (hasUpdatedChainInfo.current) {
      return
    }
    // Remove row with chainId 57054
    const txSpeedsFixed = txSpeeds.filter((x) => x?.chainId !== 57054)
    const missingChain = nullSpeed.find((x) => !txSpeedsFixed.find((y) => y.chainId === x.chainId))
    if (missingChain) {
      const newTxSpeeds = [...txSpeedsFixed, missingChain]
      // Move chainId 146 to the top
      newTxSpeeds.sort((a, b) => a.chainId === 146 ? -1 : b.chainId === 146 ? 1 : 0)
      setTxSpeeds(newTxSpeeds)
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

  // If txSpeeds contains chainId 57054, move the content of 57054 to 146 and remove 57054
  useEffect(() => {
    // Store the content of chainId 57054
    const sonicChain = txSpeeds.find((x) => x.chainId === 57054)
    if (sonicChain) {
      // Exclude chainId 57054
      const newTxSpeeds = txSpeeds.filter((x) => x.chainId !== 57054)
      // Replace chainId 146 with the content of 57054
      const newList = newTxSpeeds.map((x) => {
        if (x.chainId === 146) {
          x.speed = sonicChain.speed
          x.average = sonicChain.average
        }
        return x
      })
      setTxSpeeds(newList)
    }
  }, [txSpeeds, setTxSpeeds])

  // Reset everything when the network changes
  useEffect(() => {
    if (chain?.id && chain?.id !== networkValue) {
      setNetworkValue(chain.id)
      setIsMinting(false)
      setStartTime(0)
      handleResetTime()
      setLatestMintedBlockNumber0Conf(0)
    }
  }, [chain?.id, networkValue, setIsMinting, setStartTime, handleResetTime, setLatestMintedBlockNumber0Conf])

  return (
    <>
      <Head>
        <title>Web3 Speed Checker</title>
        <meta name="description" content="Compare the finality of different EVM networks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="fantom, sonic, $S, evm, fvm, testnet, transactions, speed, tps, finality, confirmations, fast, crypto, base, arbitrum, optimism, polygon, avalanche, celo, kava" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Speed Checker - Test the speed of EVM chains" />
        <meta name="twitter:image" content="https://speedchecker.paintswap.io/og_v2.png" />
        <meta name="twitter:domain" content="speedchecker.paintswap.io" />
        <meta name="twitter:site" content="@paintoshi" />
        <meta name="twitter:creator" content="@paintoshi" />
        <meta name="twitter:description" content="Compare the finality of different EVM networks" />

        <meta property="og:title" content="Web3 Speed Checker - Test the speed of EVM chains" />
        <meta property="og:description" content="Compare the finality of different EVM networks" />
        <meta property="og:image" content="https://speedchecker.paintswap.io/og_v2.png" />
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
            {chainConfig[chain?.id ?? 250].confirmations > 1 && (
              <Box mt="8px">
                <TextSubtle fontSize="14px">
                {`Confirmations: ${currentConfirmations} / ${chain?.id ? chainConfig[chain?.id].confirmations : "N/A"}`}
                </TextSubtle>
              </Box>
            )}
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <SpeedDisplay 
              txSpeedsState={txSpeedsState}
              chainConfig={chainConfig}
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
              <a href="https://github.com/PaintSwap/speedchecker-frontend" target="_blank">Github Source</a>
            </Box>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
