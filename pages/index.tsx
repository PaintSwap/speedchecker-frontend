import { useEffect, useState } from "react"
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
import { TextSubtle } from '@/Components/StyledComps'
import contractABI from "../helpers/SonicABI"

const manrope = Manrope({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [showAddress, setShowAddress] = useState<`0x${string}` | null>(null)
  const [networkValue, setNetworkValue] = useState<number>(250)
  const [currentChains, setCurrentChains] = useState<Chain[]>([])

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
  }, [chain?.id])

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
  })

  const totalNFTs = (yourNFTs as string[])?.reduce((sum, current) => sum + BigInt(current), 0n) || 0n
  const { write, status, data } = useContractWrite(config)

  const [startTime, setStartTime] = useState(0)
  if (status == "error"  && startTime > 0) {
    console.log("ERROR", Date.now())
    setStartTime(0)
  }

  // Existing
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  }) // existing

  if (isLoading && startTime == 0) {
    console.log("START", Date.now())
    setStartTime(Date.now())
  }

  if ((isSuccess || isError) && startTime > 0) {
    console.log(`Time taken ${Date.now() - startTime}ms`)
    setStartTime(0)
  }

  const onMint = () => {
    write?.()
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
                  disabled={!switchNetwork || x.id === chain?.id}
                  key={x.id}
                  onClick={() => switchNetwork?.(x.id)}
                  value={x.id}
                >
                  {x.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Box width="100%" mt="16px" mb="16px">
              <Divider />
            </Box>
            <Button variant='contained' color="primary" disabled={isLoading && !write} onClick={onMint}>
              Mint an NFT
            </Button>
            <Box mt="8px">
              <TextSubtle>You have: {totalNFTs.toString()} NFTs</TextSubtle>
            </Box>
            <div>{error && error.message}</div>
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
