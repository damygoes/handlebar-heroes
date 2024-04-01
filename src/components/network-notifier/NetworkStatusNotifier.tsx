import useNetworkStatus from '@/hooks/useNetworkStatus'
import { cn } from '@/lib/utils'
import { AlertTriangleIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const NetworkStatusNotifier = () => {
  const isOnline = useNetworkStatus()
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (!isOnline) {
      setShowError(true)
    } else {
      const timeoutId = setTimeout(() => {
        setShowError(false)
      }, 2000)

      // Cleanup the timeout when the component unmounts or when network status changes
      return () => clearTimeout(timeoutId)
    }
  }, [isOnline])

  if (!isOnline && showError) {
    return (
      <div
        className={cn(
          'text-text-color fixed left-1/2 top-7 flex h-8 w-fit -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-lg bg-accent/80 bg-warning px-6 py-2 text-sm shadow-md'
        )}
      >
        <AlertTriangleIcon className='mr-2 h-4 w-4' />
        You are offline. Please check your internet connection
      </div>
    )
  }

  return null
}

export default NetworkStatusNotifier
