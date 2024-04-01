import NetworkStatusNotifier from '@/components/network-notifier/NetworkStatusNotifier'
import TailwindIndicator from '@/components/providers/tailwind-indicator'
import { ThemeProvider } from '@/components/providers/theme-provider'
import UserLocationProvider from '@/components/providers/user-location-provider'
import { Toaster } from '@/components/ui/toaster'
import { router } from '@/routes/router'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <Suspense fallback={<div>Loading ... </div>}>
      <Toaster />
      <ThemeProvider>
        <UserLocationProvider>
          <NetworkStatusNotifier />
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </UserLocationProvider>
        <TailwindIndicator />
      </ThemeProvider>
    </Suspense>
  )
}

export default App
