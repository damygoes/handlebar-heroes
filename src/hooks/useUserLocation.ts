import { useEffect, useState } from 'react'

// Define a type for the hook's return value
export type UserLocationState = {
  latitude: number | null
  longitude: number | null
  city: string | null
  state: string | null
  country: string | null
  loading: boolean
  error: string | null
}

// The hook itself
const useUserLocation = (): UserLocationState => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [address, setAddress] = useState<{
    city: string
    state: string
    country: string
  } | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Check if Geolocation API is available
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      setLoading(false) // Set loading to false if geolocation is not supported
      return
    }

    // Define the success callback
    const handleSuccess = async (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

      // Call the reverse geocoding API
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
        const data = await response.json()
        setAddress({
          city: data.address?.city || data.address?.town || '',
          state: data.address?.state || '',
          country: data.address?.country || ''
        })
        setLoading(false) // Set loading to false once data is fetched
      } catch (error) {
        setError('Failed to fetch address information')
        setLoading(false) // Set loading to false on error
      }
    }

    // Define the error callback
    const handleError = (error: GeolocationPositionError) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('User denied the request for Geolocation.')
          break
        case error.POSITION_UNAVAILABLE:
          setError('Location information is unavailable.')
          break
        case error.TIMEOUT:
          setError('The request to get user location timed out.')
          break
        default:
          setError('An unknown error occurred.')
          break
      }
      setLoading(false) // Set loading to false on error
    }

    // Request the user's location
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, []) // Empty array ensures effect is only run on mount

  // Explicitly return null for latitude and longitude if location is null
  return {
    latitude: location ? location.latitude : null,
    longitude: location ? location.longitude : null,
    city: address ? address.city : null,
    state: address ? address.state : null,
    country: address ? address.country : null,
    loading,
    error
  }
}

export default useUserLocation
