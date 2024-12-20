import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { avalanche, Chain, fantom, celo, kava, arbitrum, polygon, base, optimism } from 'wagmi/chains'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"
import ReactGA from "react-ga4"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// 1. Get projectId
const env = process.env
const projectId = env?.NEXT_PUBLIC_WC_ID || ''
const gaID = env?.NEXT_PUBLIC_GA_ID || ''

// 2. Create wagmiConfig
const metadata = {
  name: 'Speed Checker',
  description: 'Compare the finality of different EVM networks',
  url: 'https://speedchecker.paintswap.io',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const sonic: Chain = {
  ...fantom,
  id: 57054,
  contracts: {
    multicall3: {
      address: '0xF0c9d803C109518363cffa0319edA897E06d0230',
      blockCreated: 16825253,
    },
  },
  name: 'Sonic Testnet',
  rpcUrls: {
   default: {http: ['https://rpc.blaze.soniclabs.com'] as const},
   public: {http: ['https://rpc.blaze.soniclabs.com'] as const}
  },
  blockExplorers: {
    default: {
      name: 'Sonic Explorer',
      url: 'https://blaze.soniclabs.com/',
    },
  },
  nativeCurrency: {
    name: 'Sonic',
    symbol: 'S',
    decimals: 18,
  },
}

const fantomCustom = {
  ...fantom,
  rpcUrls: {
    default: {http: ['https://rpcapi.fantom.network/'] as const},
    public: {http: ['https://rpcapi.fantom.network/'] as const}
   },
}

export const wagmiConfig = createConfig({
  chains: [sonic, fantomCustom, avalanche, celo, kava, arbitrum, base, optimism, polygon],
  transports: {
    [sonic.id]: http(),
    [fantomCustom.id]: http(),
    [avalanche.id]: http(),
    [celo.id]: http(),
    [kava.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    })
  ],
  // This must be used to not get hydration errors down the line
  ssr: true,
  pollingInterval: 250,
})

// 3. Create modal
createWeb3Modal({ 
  wagmiConfig,
  projectId: projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#05228c',
    '--w3m-color-mix-strength': 20
  },
  chainImages: {
    [57054]: '/images/sonic.png',
  },
})

ReactGA.initialize(gaID)
const queryClient = new QueryClient()

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <WagmiProvider config={wagmiConfig} reconnectOnMount={true}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
