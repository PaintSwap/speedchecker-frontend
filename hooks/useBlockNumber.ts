import { getBaseAPIQueryOptions } from "@/hooks/helpers"
import { wagmiConfig } from "@/pages/_app"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getBlockNumber } from "wagmi/actions"

interface Props {
  refresh?: boolean
}

/* Listens for the latest chain block
/ @param refresh - Whether to refresh the balance (optional)
/ @returns The block number as {data: bigint}
*/
const useBlockNumber = ({ refresh = true }: Props): UseQueryResult<bigint, Error> => {
  const fetchData = async (): Promise<bigint> => {
    const blockNumber = await getBlockNumber(wagmiConfig, {
      cacheTime: 0,
    })
    return blockNumber
  }

  const queryHook = useQuery({
    queryKey: ["useBlockNumber", refresh],
    queryFn: fetchData,
    placeholderData: 0n,
    ...getBaseAPIQueryOptions(refresh ? 1000 : null),
  })

  return queryHook
}

export default useBlockNumber
