import { useCallback, useEffect, useMemo, useState } from "react"
import { Manrope } from "next/font/google"
import styles from "@/styles/Home.module.css"
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useNetwork, useSwitchNetwork, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction, Chain } from 'wagmi'
import { abbreviateAddressAsString, trackEvent } from '@/helpers/Utilities'
import { Button, ToggleButton, ToggleButtonGroup, Divider, Box } from '@mui/material'
import { StyledCircularProgress, TextNormal, TextSubtle, TextWarning } from '@/Components/StyledComps'
import contractABI from "../helpers/SonicABI"
import usePersistState from "../helpers/usePersistState"
import Head from "next/head"
import { isEqual } from 'lodash'

const manrope = Manrope({ subsets: ["latin"] })

type Speed = {
  speed: number
  timestamp: number
}

type SpeedList = {
  chain: string,
  label: string,
  speed: Speed[]
  average: number
}

const nullSpeed = [
  {chain: "Sonic", label: "Sonic Test", speed: [], average: -1},
  {chain: "Fantom", label: "Fantom Opera", speed: [], average: -1},
  {chain: "Avalanche", label: "Avalanche", speed: [], average: -1}
]

const Home: NextPage = () => {
  const [showAddress, setShowAddress] = useState<`0x${string}` | undefined>(undefined)
  const [networkValue, setNetworkValue] = useState<number>(250)
  const [currentChains, setCurrentChains] = useState<Chain[]>([])
  const [startTime, setStartTime] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isMinting, setIsMinting] = useState(false)
  const [isSupportedChain, setIsSupportedChain] = useState(false);
  const [totalNFTs, setTotalNFTs] = useState<bigint>(0n)
  const [txSpeedsState, setTxSpeedsState] = useState<SpeedList[]>(nullSpeed)
  const [txSpeeds, setTxSpeeds] = usePersistState<SpeedList[]>(nullSpeed, 'txSpeedHistory')

  const projectId = process.env?.NEXT_PUBLIC_WC_ID || ''
  useEffect(() => {
    console.info("WC", `${projectId?.slice(0, 4)}...`)
  }, [projectId])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newNetwork: number,
  ) => {
    setNetworkValue(newNetwork)
  }
  
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  const { chain } = useNetwork()
  const { chains, error, isLoading: isLoadingChain, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  // Append latest speed to matching network list
  const appendSpeed = useCallback((chain: string, speed: number) => {
    const newSpeeds = txSpeeds.map((x) => {
      if (x?.chain?.toLowerCase() === chain?.toLowerCase()) {
        x.speed.push({speed: speed, timestamp: Date.now()})
        x.average = x.speed.reduce((sum, current) => sum + current.speed, 0) / x.speed.length
      }
      return x
    })
    setTxSpeeds(newSpeeds)
  }, [txSpeeds, setTxSpeeds])

  const nftContract = useMemo(() => {
    switch (networkValue) {
      // Fantom
      case 250:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Avax
      case 43114:
        return '0x493F7909E5CA979646Abb86A81a11701420B784F'
      // Sonic
      case 64165:
        return '0x2B6639D06A6Aa36B122491d1Cd839253a2324803'
    }
  }, [networkValue])

  const { config } = usePrepareContractWrite({
    address: nftContract,
    abi: contractABI,
    functionName: "mint",
    args: [],
  })

  const { data: yourNFTs } = useContractRead({
    address: nftContract,
    abi: contractABI,
    functionName: "getAllNFTs",
    args: [address],
    watch: true,
    enabled: !!address,
  })

  const { writeAsync, status, data, reset } = useContractWrite(config)

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
    confirmations: 0,
  })

  const isMintingLoading = useMemo(() => showAddress && (isLoading || isMinting), [showAddress, isLoading, isMinting])

  const onMint = async () => {
    setIsMinting(true)
    try {
      await writeAsync?.()
      console.info("START", Date.now())
      setStartTime(Date.now())
    } catch (error: any) {
      setIsMinting(false)
      setCurrentTime(0)
      reset()
      console.error(error)
      trackEvent("Mint Error", "Contract")
    }
  }

  useEffect(() => {
    setTotalNFTs((yourNFTs as string[])?.reduce((sum, current) => sum + BigInt(current), 0n) || 0n)
  }, [yourNFTs])

  useEffect(() => {
    if (status === "error"  && startTime > 0) {
      setStartTime(0)
      setCurrentTime(0)
      setIsMinting(false)
      trackEvent("Status Error 1")
      console.error("Status Error 1")
    }
  }, [status, startTime])

  // Transaction finished (or error)
  useEffect(() => {
    if ((isSuccess || isError) && startTime > 0 && isMinting) {
      const diff = Date.now() - startTime
      console.info(`Time taken ${diff}ms`)
      appendSpeed(chain?.name || "unknown", diff)
      trackEvent(`${chain?.name} tx`, undefined, undefined, diff < 1000 ? Math.round(diff / 100) * 100 : Math.round(diff / 500) * 500)
    }
    if (isSuccess || isError) {
      setIsMinting(false)
      setStartTime(0)
      setCurrentTime(0)
      reset()
      if (isError) {
        trackEvent("Status Error 2")
        console.error("Status Error 2")
      }
    }
  }, [isSuccess, isError, startTime, appendSpeed, chain?.name, isMinting, reset])

  // Update current time every second when minting
  useEffect(() => {
    if (isMinting) {
      const interval = setInterval(() => {
        setCurrentTime(startTime > 0 ? (Date.now() - startTime) / 1000 : 0)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isMinting, startTime])

  useEffect(() => {
    if (networkValue && chains?.length) {
      setIsSupportedChain(!!chains.find((x) => x.id === networkValue))
    }
  }, [chains, networkValue])

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

  // Update current chains
  useEffect(() => {
    if (chains && !isEqual(chains, currentChains)) {
      setCurrentChains(chains)
    }
  }, [chains, currentChains])

  // Change network value when chain.id changes
  useEffect(() => {
    if (chain?.id && chain?.id !== networkValue) {
      setNetworkValue(chain.id)
    }
  }, [chain?.id, networkValue])

  return (
    <>
      <Head>
        <title>Fantom Sonic</title>
        <meta name="description" content="Test the speed of Fantom FVM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="fantom, sonic, fvm, testnet, transactions, speed, tps, crypto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fantom Sonic - Test the speed of Fantom FVM" />
        <meta name="twitter:image" content="https://sonic.paintswap.io/og.png" />
        <meta name="twitter:domain" content="sonic.paintswap.io" />
        <meta name="twitter:site" content="@paintoshi" />
        <meta name="twitter:creator" content="@paintoshi" />
        <meta name="twitter:description" content="Fantom Sonic - Test the speed of Fantom FVM" />

        <meta property="og:title" content="Fantom Sonic - Test the speed of Fantom FVM" />
        <meta property="og:description" content="The upcoming Fantom network" />
        <meta property="og:image" content="https://sonic.paintswap.io/og.png" />
        <meta property="og:url" content="https://sonic.paintswap.io" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          <div className={styles.mainPanel}>
            <h1 className={styles.title}>Fantom Sonic</h1>
            <p className={styles.titleSub}>
              Compare Sonic with other networks<br />
            </p>
            {showAddress && (
              <Button variant='contained' color="primary" onClick={() => open()}>{abbreviateAddressAsString(address ?? 'N/A')}</Button>
            )}
            {!showAddress && (
              <Button variant='contained' color="primary" onClick={() => open()}>Connect</Button>
            )}

            {showAddress && (
              <>
                <Box mt="16px" mb="4px">
                  <TextSubtle>
                    Choose Network
                  </TextSubtle>
                </Box>
                <ToggleButtonGroup
                  color="primary"
                  value={networkValue}
                  exclusive
                  onChange={handleChange}
                  aria-label="Network"
                >
                  {currentChains.map((x) => (
                    <ToggleButton
                      disabled={!switchNetwork || x.id === chain?.id || isLoading || !showAddress || isMinting}
                      key={x.id}
                      onClick={() => switchNetwork?.(x.id)}
                      value={x.id}
                      size="small"
                      sx={{paddingBottom: '5px'}}
                    >
                      {x.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {chain?.id === 64165 && (
                  <Box mt="8px">
                    <TextNormal fontSize="14px"><a href="https://testnet.soniclabs.com/account" target="_blank">Get Free Sonic $S</a></TextNormal>
                  </Box>
                )}
              </>
            )}
            <Box mt="8px">
              <TextWarning fontSize="14px">{error && error.message}</TextWarning>
              {!isSupportedChain && !!showAddress && (
                <TextWarning fontSize="14px">Unsupported Network Detected</TextWarning>
              )}
            </Box>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Button variant='contained' color="primary" disabled={isLoading || !writeAsync || !showAddress || isMinting || !isSupportedChain} onClick={onMint} startIcon={isMintingLoading ?  <StyledCircularProgress /> : null} sx={{textTransform: 'unset'}}>
              {isMintingLoading ? `Minting (${currentTime.toFixed(1)} sec)` : 'Mint NFT'}
            </Button>
            <Box mt="8px">
              <TextNormal fontSize="14px">Owned: {totalNFTs.toString()} NFTs</TextNormal>
            </Box>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Box width="100%" display="flex" justifyContent="space-around" flexDirection="row" mt="8px">
              {txSpeedsState.map((x) => (
                <Box key={x.chain} display="flex" flexDirection="column" alignItems="center" minWidth="80px">
                  <TextNormal>{x.label}</TextNormal>
                  <TextNormal fontSize="12px">
                    {x.average > 0 ? `Avg: ${Number((x.average || 0) / 1000).toFixed(1)} s` : 'Avg: -'}
                  </TextNormal>
                  {x.speed.slice().reverse().map((speed) => (
                    <TextSubtle key={speed.timestamp}>{Number((speed.speed || 0) / 1000).toFixed(1)} s</TextSubtle>
                  ))}
                </Box>
              ))}
            </Box>
            <Box alignItems="center" mt="16px">
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
            <Box mt="8px">
              <a href="https://testnet.soniclabs.com" target="_blank">Fantom Sonic Open Dashboard</a>
            </Box>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
