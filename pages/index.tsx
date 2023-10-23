import { useCallback, useEffect, useState } from "react"
import Head from "next/head"
import { Manrope } from "next/font/google"
import styles from "@/styles/Home.module.css"
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next'
import Script from 'next/script'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction, Chain } from 'wagmi'
import { abbreviateAddressAsString } from '@/helpers/Utilities'
import { Button, ToggleButton, ToggleButtonGroup, Divider, Box } from '@mui/material'
import { StyledCircularProgress, TextNormal, TextSubtle, TextWarning } from '@/Components/StyledComps'
import contractABI from "../helpers/SonicABI"
import usePersistState from "../helpers/usePersistState"

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

// To avoid hydration issues during SSR
function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

const nullSpeed = [
  {chain: "Fantom", label: "Fantom", speed: []},
  {chain: "Sonic", label: "Sonic", speed: []},
  {chain: "Avalanche", label: "Avalanche", speed: []}
]

const Home: NextPage = () => {
  const [showAddress, setShowAddress] = useState<`0x${string}` | null>(null)
  const [networkValue, setNetworkValue] = useState<number>(250)
  const [currentChains, setCurrentChains] = useState<Chain[]>([])
  const [startTime, setStartTime] = useState<number>(0)
  const [isMinting, setIsMinting] = useState(false)
  const [isSupportedChain, setIsSupportedChain] = useState(false);
  const [totalNFTs, setTotalNFTs] = useState<bigint>(0n)
  const [txSpeeds, setTxSpeeds] = usePersistState<SpeedList[]>(nullSpeed, 'txSpeeds')

  const isClient = useIsClient()

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newNetwork: number,
  ) => {
    setNetworkValue(newNetwork)
  }
  
  const { open } = useWeb3Modal()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const { chain } = useNetwork()
  const { chains, error, isLoading: isLoadingChain, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  useEffect(() => {
    setIsSupportedChain(chains.find((x) => x.id === networkValue) !== undefined);
  }, [chains, networkValue]);

  useEffect(() => {
    if (address) {
      setShowAddress(address)
    } else {
      setShowAddress(null)
    }
  }, [address])

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
  });

  const { data: yourNFTs } = useContractRead({
    address: "0xE33B9cAea42ead9D2f6e88489A888CA75a8D09Aa",
    abi: contractABI,
    functionName: "getAllNFTs",
    args: [address],
    watch: true
  })

  useEffect(() => {
    setTotalNFTs((yourNFTs as string[])?.reduce((sum, current) => sum + BigInt(current), 0n) || 0n);
  }, [yourNFTs])

  const { writeAsync, status, data, reset } = useContractWrite(config)

  useEffect(() => {
    if (status === "error"  && startTime > 0) {
      console.log("ERROR", Date.now())
      setStartTime(0)
    }
  }, [status, startTime])

  // Existing
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  }) // existing

  useEffect(() => {
    console.log(isSuccess, isError)
    if ((isSuccess || isError) && startTime > 0 && isMinting) {
      console.log(`Time taken ${Date.now() - startTime}ms`)
      appendSpeed(chain?.name || "unknown", Date.now() - startTime)
    }
    if (isSuccess || isError) {
      setIsMinting(false)
      setStartTime(0)
      reset();
    }
  }, [isSuccess, isError, startTime, appendSpeed, chain?.name, isMinting, reset])

  const onMint = async () => {
    setIsMinting(true);
    try {
      await writeAsync?.();
      console.log("START", Date.now());
      setStartTime(Date.now());
    } catch (error: any) {
      setIsMinting(false);
      reset();
    }
  };

  // To avoid hydration issues during SSR
  if (!isClient) {
    return null
  }

  return (
    <>
      <Head>
        <title>Fantom Sonic</title>
        <meta name="description" content="Test the speed of Fantom FVM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="keywords"
          content="defi, swap, crypto, lifi, li.fi, exchange, metamask"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fantom Sonic - Test the speed of Fantom FVM"
        />
        <meta
          name="twitter:image"
          content="https://sonic.paintswap.app/og.png"
        />
        <meta name="twitter:domain" content="sonic.paintswap.app" />
        <meta name="twitter:site" content="@paintoshi" />
        <meta name="twitter:creator" content="@paintoshi" />
        <meta
          name="twitter:description"
          content="Fantom Sonic - Test the speed of Fantom FVM"
        />

        <meta
          property="og:title"
          content="Fantom Sonic - Test the speed of Fantom FVM"
        />
        <meta property="og:description" content="The upcoming Fantom network" />
        <meta
          property="og:image"
          content="https://sonic.paintswap.app/og.png"
        />
        <meta property="og:url" content="https://sonic.paintswap.app" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          <div className={styles.mainPanel}>
            <h1 className={styles.title}>Fantom Sonic</h1>
            <p className={styles.titleSub}>
              Compare Fantom Sonic with other networks<br />
            </p>
            {showAddress && (
              <Button variant='contained' color="primary" onClick={() => open()}>{abbreviateAddressAsString(address ?? 'N/A')}</Button>
            )}
            {!showAddress && (
              <Button variant='contained' color="primary" onClick={() => open()}>Connect</Button>
            )}

            <Box mt="16px">
              <TextSubtle>
                Choose Network
              </TextSubtle>
              {!isSupportedChain && (
                <TextSubtle>Unsupported Network</TextSubtle>
              )}
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
                >
                  {x.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Box mt="8px">
              <TextWarning>{error && error.message}</TextWarning>
            </Box>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Button variant='contained' color="primary" disabled={isLoading || !writeAsync || !address || isMinting || !isSupportedChain} onClick={onMint} startIcon={address && (isLoading || !writeAsync || isMinting) ?  <StyledCircularProgress /> : null}>
              Mint an NFT
            </Button>
            <Box mt="8px">
              <TextNormal>You have: {totalNFTs.toString()} NFTs</TextNormal>
            </Box>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Box alignItems="start" display="flex" flexDirection="row">
              <TextSubtle>
                Speed History
              </TextSubtle>
              <Box ml="8px">
                <Button variant='text' size="small" onClick={() => setTxSpeeds(nullSpeed)} style={{lineHeight: 1.2}}>
                  Clear
                </Button>
              </Box>
            </Box>
            <Box width="100%" display="flex" justifyContent="space-around" flexDirection="row" mt="8px">
              {txSpeeds.map((x) => (
                <Box key={x.chain} display="flex" flexDirection="column" alignItems="center">
                  <TextNormal>{x.label}</TextNormal>
                  {x.speed.map((speed) => (
                    <TextSubtle key={speed.timestamp}>{(speed.speed || 0) / 1000} sec</TextSubtle>
                  ))}
                </Box>
              ))}
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
        src={`https://www.googletagmanager.com/gtag/js?id=G-CYE6KFRLTH`}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag2"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYE6KFRLTH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Home;
