import { Button } from '@mui/material'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useMemo } from 'react'
import { useAccount, useChains } from 'wagmi'
import styles from "@/styles/Home.module.css"

const icons: {[key: number]: string} = {
  250: "/images/fantom.png",
  43114: "/images/avalanche.png",
  64165: "/images/sonic.png",
  42220: "/images/celo.png",
  2222: "/images/kava.png",
  42161: "/images/arbitrum.png",
  8453: "/images/base.png",
  10: "/images/optimism.png",
  137: "/images/polygon.png"
}

const NetworkButton = ({}) => {
  const { open } = useWeb3Modal()
  const { isConnected, chain } = useAccount()
  const chains = useChains()
  
  const isSupportedChain = useMemo(() => {
    return chains.some(c => c.id === chain?.id)
  }, [chain, chains])

  return (
    <Button size="large" className={styles.mainButton} variant='contained' color="primary" onClick={() => open({ view: 'Networks' })} disabled={!isConnected} startIcon={chain?.id ? <img src={icons[chain?.id || 250]} alt={chain?.name ?? ""} width={28} height={28} /> : null} style={{whiteSpace: "nowrap"}}>
      {isSupportedChain ? `${chain?.name}` : 'Select Chain'}
    </Button>
  )
}

export default NetworkButton