import { useEffect, useState } from 'react'

export default function PWAInstallBox() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showBox, setShowBox] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault() // Stop automatic prompt
      setDeferredPrompt(e)
      setShowBox(true)   // Show our custom install box
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()               // Show native install prompt
    const choiceResult = await deferredPrompt.userChoice
    console.log('User choice:', choiceResult.outcome)
    setDeferredPrompt(null)
    setShowBox(false)
  }

  const handleClose = () => setShowBox(false)

  if (!showBox) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
        <h2 className="text-lg font-bold mb-2">Install Abhaya Photo Editor</h2>
        <p className="text-gray-700 mb-4">Install this app on your device for a better experience!</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleInstall}
            className="bg-red-600 text-white px-4 py-2 rounded font-medium"
          >
            Install
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
