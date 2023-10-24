import ReactGA from "react-ga4"

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

export function trackEvent(action: string, category?: string, label?: string, value?: number) {
  ReactGA.event({
    action,
    category: category ?? 'event', // Must be manually set in GA4 custom properties
    label: label ?? 'event',  // Must be manually set in GA4 custom properties
    value: value ?? 0,
  })
}

export function trackCustomEvent(action: string, value?: string) {
  ReactGA.gtag('event', action, {
    value: value ?? 0,
  })
}