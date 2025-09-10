import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Component to handle PWA install prompt
function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()          // Prevent automatic prompt
      setDeferredPrompt(e)        // Save the event for later
      setShowInstall(true)        // Show our custom install button
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()       // Show the native install prompt
    const choiceResult = await deferredPrompt.userChoice
    console.log('User choice:', choiceResult.outcome)
    setDeferredPrompt(null)
    setShowInstall(false)
  }

  if (!showInstall) return null

  return (
    <button
      onClick={handleInstall}
      className="fixed bottom-20 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50"
    >
      Install App
    </button>
  )
}

// Render the main app with install prompt
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PWAInstallPrompt />
  </StrictMode>
)

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration)
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error)
      })
  })
}
