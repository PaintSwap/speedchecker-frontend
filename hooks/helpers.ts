export const getBaseAPIQueryOptions = (refresh: number | null) => ({
  staleTime: refresh ? 0 : Infinity, // prevents refetching data on re-focus if refresh is off
  refetchInterval: refresh ?? 0, // refetch when in focus if refresh is on
  refetchIntervalInBackground: false, // do not refetch while not in focus
  retry: 5, // number of times to retry if error, resets on re-focus
  retryOnMount: true, // default, if retries are exhausted this resets the retries on window refocus for example
  retryDelay: (attempt: number) => (1 + 2 ** attempt) * 1000, // exponential backoff for retries
})

// Remove null and undefined values from an object
export const filterParams = (params: Record<string, any>) => {
  return Object.entries(params).reduce<Record<string, any>>((acc, [key, value]) => {
    if (value !== null && value !== undefined) {
      acc[key] = value
    }
    return acc
  }, {})
}
