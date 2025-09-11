import React, { useState } from "react";
import imageCompression from "browser-image-compression";

function CompressPage() {
  const [image, setImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setCompressedImage(null); // reset on new upload
    }
  };

  const handleCompress = async () => {
    if (!image) return;
    setLoading(true);

    const options = {
      maxSizeMB: 1, // target ≤ 1MB
      maxWidthOrHeight: 1280, // resize if larger
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(image, options);
      setCompressedImage(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.error("Compression error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Image Compressor
      </h1>

      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center">
        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-6 text-sm text-gray-700"
        />

        {/* Original Preview */}
        {image && !compressedImage && (
          <div className="flex flex-col items-center mb-6">
            <img
              src={URL.createObjectURL(image)}
              alt="Original"
              className="max-w-xs rounded-xl mb-3 shadow-md"
            />
            <p className="text-gray-600 text-sm">Original Preview</p>
          </div>
        )}

        {/* Compressed Preview */}
        {compressedImage && (
          <div className="flex flex-col items-center mb-6">
            <img
              src={compressedImage}
              alt="Compressed"
              className="max-w-xs rounded-xl mb-3 shadow-md"
            />
            <p className="text-gray-600 text-sm">Compressed Preview</p>
            <a
              href={compressedImage}
              download="compressed-image.jpg"
              className="mt-2 text-red-600 font-medium hover:underline"
            >
              Download Compressed Image
            </a>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleCompress}
          disabled={!image || loading}
          className={`w-full px-6 py-3 rounded-xl text-white font-semibold transition-colors ${
            image && !loading
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Compressing..." : "Compress Image"}
        </button>
      </div>
    </main>
  );
}

export default CompressPage;
