import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { isAddress } from "viem"
import { readContract } from "@wagmi/core"
import { getBaseAPIQueryOptions } from "@/hooks/helpers"
import { wagmiConfig } from "@/pages/_app"

interface Props {
  address: string | undefined
  contractAddress: string | undefined
  abi: any
  chainId: number
  refresh?: boolean
}

/** Listens for the NFT balance of an address on a chain
 * @param address - The address to get the balance for
 * @param chainId - The chain ID to get the balance for (optional)
 * @param refresh - Whether to refresh the balance (optional)
 * @returns The NFT balance of the address on the chain as a UseQueryResult
 */
const useNFTBalance = ({ address, contractAddress, abi, chainId, refresh = true }: Props): UseQueryResult<bigint | null, Error> => {
  const fetchNFTBalance = async (): Promise<bigint | null> => {
    if (!chainId || !address || !isAddress(address)) {
      return null
    }
    try {
      const readParams = {
        address: contractAddress as `0x${string}`,
        abi,
        functionName: "getAllNFTs",
        args: [address as `0x${string}`],
      }
      const data = await readContract(wagmiConfig, readParams)
      return (data as string[])?.reduce((sum, current) => sum + BigInt(current), 0n) || 0n
    } catch (error) {
      console.error("Error fetching NFT balance:", error)
      return null
    }
  }

  const queryHook = useQuery({
    queryKey: ["useNFTBalance", chainId, address, contractAddress, abi, refresh],
    queryFn: fetchNFTBalance,
    enabled: !!chainId && !!address && isAddress(address),
    ...getBaseAPIQueryOptions(refresh ? 100000 : null),
  })

  return queryHook
}

export default useNFTBalance
