import { useEffect, useState } from "react";

export default function PWAInstallBox() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBox, setShowBox] = useState(false);

  // Detect if device is mobile
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    if (!isMobile) return; // ❌ Don't even listen on PC

    const handler = (e) => {
      e.preventDefault(); // Stop browser auto-prompt
      setDeferredPrompt(e);
      setShowBox(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [isMobile]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show native prompt
      const choice = await deferredPrompt.userChoice;
      console.log("User choice:", choice.outcome);
      setDeferredPrompt(null);
      setShowBox(false);
    }
  };

  // ❌ Render nothing on desktop
  if (!showBox || !isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
        <h2 className="text-lg font-bold mb-2">Install Abhaya Photo Editor</h2>
        <p className="text-gray-700 mb-4">
          Install this app on your device for a better experience!
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleInstall}
            className="bg-red-600 text-white px-4 py-2 rounded font-medium"
          >
            Install
          </button>
          <button
            onClick={() => setShowBox(false)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
