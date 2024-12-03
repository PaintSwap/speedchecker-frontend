import React, { useEffect, useRef } from "react"
import { Box } from "@mui/material"
import { TextNormal, TextSubtle } from '@/Components/StyledComps'

type Speed = {
  speed: number
  timestamp: number
}

export type SpeedList = {
  chain: string,
  chainId: number,
  speed: Speed[]
  average: number
}

export type chainConfigType = {
  label: string
  confirmations: number
  contractAddress: `0x${string}`
}

interface SpeedDisplayProps {
  txSpeedsState: SpeedList[]
  chainConfig: { [key: number]: chainConfigType }
  scrollToLatest: boolean
}

const SpeedDisplay: React.FC<SpeedDisplayProps> = ({ 
  txSpeedsState,
  chainConfig,
  scrollToLatest
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const speedElementsRef = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    if (scrollToLatest && scrollContainerRef.current) {
      const latestChainId = txSpeedsState.reduce((latest, current) => {
        const currentLatestTimestamp = current.speed[current.speed.length - 1]?.timestamp || 0
        const latestTimestamp = latest ? latest.speed[latest.speed.length - 1]?.timestamp || 0 : 0
        return currentLatestTimestamp > latestTimestamp ? current : latest
      }, null as SpeedList | null)?.chainId

      if (latestChainId !== undefined) {
        const element = speedElementsRef.current[latestChainId]
        const container = scrollContainerRef.current

        if (element && container) {
          const elementRect = element.getBoundingClientRect()
          const containerRect = container.getBoundingClientRect()
          
          const scrollLeft = element.offsetLeft - container.offsetLeft - 
                             (containerRect.width / 2) + (elementRect.width / 2)
          
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          })
        }
      }
    }
  }, [txSpeedsState, scrollToLatest])

  return (
    <Box 
      width="100%"
      display="flex"
      justifyContent="flex-start"
      flexDirection="row"
      mt="8px"
      pb="8px"
      style={{overflowX: 'auto'}}
      ref={scrollContainerRef}
    >
      {txSpeedsState.map((x) => (
        <Box 
          key={x.chain} 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          marginRight="16px" 
          marginLeft="16px"
          ref={(el: HTMLDivElement | null) => { 
            speedElementsRef.current[x.chainId] = el 
          }}
        >
          <TextNormal style={{whiteSpace: 'nowrap'}}>{chainConfig[x.chainId].label}</TextNormal>
          <TextNormal style={{whiteSpace: 'nowrap'}} fontSize="12px">
            {`Conf: ${chainConfig[x.chainId].confirmations ?? "N/A"}`}
          </TextNormal>
          <TextNormal style={{whiteSpace: 'nowrap'}} fontSize="12px">
            {x.average > 0 ? `Avg: ${Number((x.average || 0) / 1000).toFixed(1)} s` : 'Avg: -'}
          </TextNormal>
          {x.speed.slice().reverse().map((speed) => (
            <TextSubtle key={speed.timestamp}>{Number((speed.speed || 0) / 1000).toFixed(1)} s</TextSubtle>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default SpeedDisplay