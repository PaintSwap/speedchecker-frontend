import { useCallback, useEffect, useMemo, useState } from "react"
import { Manrope } from "next/font/google"
import styles from "@/styles/Home.module.css"
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next'
import Script from 'next/script'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useNetwork, useSwitchNetwork, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction, Chain } from 'wagmi'
import { abbreviateAddressAsString } from '@/helpers/Utilities'
import { Button, ToggleButton, ToggleButtonGroup, Divider, Box } from '@mui/material'
import { StyledCircularProgress, TextNormal, TextSubtle, TextWarning } from '@/Components/StyledComps'
import contractABI from "../helpers/SonicABI"
import usePersistState from "../helpers/usePersistState"
import Head from "next/head"

const manrope = Manrope({ subsets: ["latin"] })

type Speed = {
  speed: number
  timestamp: number
}

type SpeedList = {
  chain: string,
  label: string,
  speed: Speed[]
}

const nullSpeed = [
  {chain: "Sonic", label: "Sonic", speed: []},
  {chain: "Fantom", label: "Fantom", speed: []},
  {chain: "Avalanche", label: "Avalanche", speed: []}
]

const Home: NextPage = () => {
  const [showAddress, setShowAddress] = useState<`0x${string}` | null>(null)
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
      }
      return x
    })
    setTxSpeeds(newSpeeds)
  }, [txSpeeds, setTxSpeeds])

  const { config } = usePrepareContractWrite({
    address: "0xE33B9cAea42ead9D2f6e88489A888CA75a8D09Aa",
    abi: contractABI,
    functionName: "mint",
    args: [],
  })

  const { data: yourNFTs } = useContractRead({
    address: "0xE33B9cAea42ead9D2f6e88489A888CA75a8D09Aa",
    abi: contractABI,
    functionName: "getAllNFTs",
    args: [address],
    watch: true
  })

  const { writeAsync, status, data, reset } = useContractWrite(config)

  // Existing
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  }) // existing

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
    }
  }

  useEffect(() => {
    setTotalNFTs((yourNFTs as string[])?.reduce((sum, current) => sum + BigInt(current), 0n) || 0n)
  }, [yourNFTs])

  useEffect(() => {
    if (status === "error"  && startTime > 0) {
      console.error("ERROR", Date.now())
      setStartTime(0)
      setCurrentTime(0)
    }
  }, [status, startTime])

  useEffect(() => {
    if ((isSuccess || isError) && startTime > 0 && isMinting) {
      console.info(`Time taken ${Date.now() - startTime}ms`)
      appendSpeed(chain?.name || "unknown", Date.now() - startTime)
    }
    if (isSuccess || isError) {
      setIsMinting(false)
      setStartTime(0)
      setCurrentTime(0)
      reset()
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
    setIsSupportedChain(chains.find((x) => x.id === networkValue) !== undefined)
  }, [chains, networkValue])

  useEffect(() => {
    if (address) {
      setShowAddress(address)
    } else {
      setShowAddress(null)
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
    if (chains) {
      setCurrentChains(chains)
    }
  }, [chains])

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
                      disabled={!switchNetwork || x.id === chain?.id || isLoading || !address || isMinting}
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
            <Button variant='contained' color="primary" disabled={isLoading || !writeAsync || !address || isMinting || !isSupportedChain} onClick={onMint} startIcon={isMintingLoading ?  <StyledCircularProgress /> : null} sx={{textTransform: 'unset'}}>
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
          </div>
        </div>
      </main>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        id="google-tag1"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NVFJDSR57S`}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag2"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVFJDSR57S', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Home;
