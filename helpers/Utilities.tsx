export const firstFew = (address: string, end = 5) => {
  return address.substring(0, end)
}

export const lastFew = (address: string, last = 4) => {
  return address.slice(-last)
}


export const abbreviateAddressAsString = (address: string, numChars = 4) => {
  try {
    return `${firstFew(address, numChars + 1)}...${lastFew(address, numChars)}`
  } catch {
    return null
  }
}