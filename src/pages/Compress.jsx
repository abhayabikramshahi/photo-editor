import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

function CompressPage() {
  const [image, setImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setCompressedImage(null); // Reset compressed image on new upload
    }
  };

  const handleCompress = async () => {
    if (!image) return;

    const options = {
      maxSizeMB: 1, // Max size in MB
      maxWidthOrHeight: 1024, // Max width/height
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(image, options);
      setCompressedImage(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.error('Compression error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Image Compressor</h1>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-4"
        />

        {image && !compressedImage && (
          <div className="flex flex-col items-center mb-4">
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="max-w-xs rounded-lg mb-2 shadow-sm"
            />
            <p className="text-gray-700">Original Preview</p>
          </div>
        )}

        {compressedImage && (
          <div className="flex flex-col items-center mb-4">
            <img
              src={compressedImage}
              alt="Compressed"
              className="max-w-xs rounded-lg mb-2 shadow-sm"
            />
            <p className="text-gray-700">Compressed Preview</p>
            <a
              href={compressedImage}
              download="compressed-image.jpg"
              className="mt-2 text-red-600 hover:underline"
            >
              Download Compressed Image
            </a>
          </div>
        )}

        <button
          onClick={handleCompress}
          disabled={!image}
          className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
            image ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Compress Image
        </button>
      </div>
    </main>
  );
}

export default CompressPage;
