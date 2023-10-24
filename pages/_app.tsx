import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { EIP6963Connector, createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { Chain, WagmiConfig, configureChains, createConfig } from 'wagmi'
import { avalanche, fantom } from 'wagmi/chains'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import { publicProvider } from 'wagmi/providers/public'
import { walletConnectProvider } from '@web3modal/wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// 1. Get projectId
const env = process.env
const projectId = env?.NEXT_PUBLIC_WC_ID || ''

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Fantom Sonic',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const sonic: Chain = {
  ...fantom,
  id: 251, // What to use here?
  /**
   * contracts: {
   *   {multicall3: {address: '0xca11bde05977b3631167028862be2a173976ca11'}
   * },
   */
  name: 'Sonic',
  network: 'sonic',
  rpcUrls: {
   default: {http: ['https://rpc.ftm.tools/'] as const}, // To satisfy readonly
   public: {http: ['https://rpc.ftm.tools/'] as const} // To satisfy readonly
  },
}

const { chains, publicClient } = configureChains(
  [fantom, avalanche],
  [
    walletConnectProvider({ projectId }),
    publicProvider(),
  ],
  // Instead of default 4_000 (4sec)
  { pollingInterval: 1_000 },
)

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
  ],
  publicClient
})

// 3. Create modal
createWeb3Modal({ 
  wagmiConfig,
  projectId,
  chains,
  defaultChain: fantom,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#05228c',
    '--w3m-color-mix-strength': 20
  }
})

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <WagmiConfig config={wagmiConfig}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </WagmiConfig>
  )
}
