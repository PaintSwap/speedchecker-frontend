import { useEffect, useState, Dispatch, SetStateAction, useCallback } from 'react'

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent
  }
}

export type SetValue<T> = Dispatch<SetStateAction<T>>

/**
 * Same as "useState" but saves the value to local storage each time it changes
 * Synchonized: If true, the value is updated in all tabs
 */
function usePersistState<T>(initialValue: T, localStorageKey: string, synchronized = false): [T, SetValue<T>] {
  const readValue = useCallback(() => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(localStorageKey)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${localStorageKey}”:`, error)
      return initialValue
    }
  }, [initialValue, localStorageKey])

  const [storedValue, setStoredValue] = useState<T>(readValue())

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useCallback(
    (value) => {
      // Prevent build error "window is undefined" but keeps working
      if (typeof window === 'undefined') {
        console.warn(`Tried setting localStorage key “${localStorageKey}” even though environment is not a client`)
      }

      try {
        // Allow value to be a function so we have the same API as useState
        const newValue = value instanceof Function ? value(storedValue) : value

        // Save to local storage
        window.localStorage.setItem(localStorageKey, JSON.stringify(newValue))

        // Save state
        setStoredValue(newValue)

        // We dispatch a custom event so every useLocalStorage hook are notified
        if (synchronized) {
          window.dispatchEvent(new Event('local-storage'))
        }
      } catch (error) {
        console.warn(`Error setting localStorage key “${localStorageKey}”:`, error)
      }
    },
    [localStorageKey, storedValue, synchronized],
  )

  // Initital save to local storage
  useEffect(() => {
    if (!window.localStorage.getItem(localStorageKey)) {
      localStorage.setItem(localStorageKey, JSON.stringify(initialValue))
    }
  }, [localStorageKey, initialValue])

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if (((event as StorageEvent)?.key && (event as StorageEvent).key !== localStorageKey) || !synchronized) {
        return
      }
      setStoredValue(readValue())
    },
    [localStorageKey, readValue, synchronized],
  )

  // this only works for other documents, not the current one
  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [handleStorageChange])

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEffect(() => {
    window.addEventListener('local-storage', handleStorageChange)

    return () => {
      window.removeEventListener('local-storage', handleStorageChange)
    }
  }, [handleStorageChange])

  return [storedValue, setValue]
}

export default usePersistState
