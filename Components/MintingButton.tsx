import { Button } from "@mui/material"
import styles from "@/styles/Home.module.css"
import { StyledCircularProgress } from "@/Components/StyledComps"
import { useEffect, useState } from "react"

interface MintingButtonProps {
  showAddress: `0x${string}` | undefined
  isMinting: boolean
  onMint: () => void
  isMintingLoading: boolean | undefined
  startTime: number
}

const MintingButton = ({ showAddress, isMinting, onMint, isMintingLoading, startTime }: MintingButtonProps) => {
  const [currentTime, setCurrentTime] = useState<number>(0)
  
  // Update current time every 100ms when minting
  useEffect(() => {
    if (isMinting) {
      const interval = setInterval(() => {
        setCurrentTime(startTime > 0 ? (Date.now() - startTime) / 1000 : 0)
      }, 100)
      return () => clearInterval(interval)
    } else {
      setCurrentTime(0) // Reset time when not minting
    }
  }, [isMinting, startTime])
  
  return (
    <Button size="large" className={styles.mainButton} variant='contained' color="primary" disabled={!showAddress || isMinting} onClick={onMint} startIcon={isMintingLoading ?  <StyledCircularProgress /> : null} sx={{textTransform: 'unset'}}>
      {isMintingLoading ? `Minting (${currentTime.toFixed(1)} sec)` : 'Mint NFT'}
    </Button>
  )
}

export default MintingButton