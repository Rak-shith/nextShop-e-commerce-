"use client"
import { useEffect, useState } from "react"

export default function LocationSelector() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords
      setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`)
    }, () => {
      setLocation("Location not available")
    })
  }, [])

  return <p className="text-sm text-gray-500">Delivery Location: {location}</p>
}
