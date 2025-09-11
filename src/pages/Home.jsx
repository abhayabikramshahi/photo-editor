import React, { useState, useRef } from "react";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";

export default function Home() {
  const [image, setImage] = useState(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    grayscale: 0,
    sepia: 0,
    blur: 0,
    hueRotate: 0,
  });

  const imgRef = useRef(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-6">
      <header className="w-full max-w-4xl text-center mb-6">
      </header>

      {/* Upload before image */}
      {!image && (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 w-full max-w-md shadow-sm hover:shadow-md transition">
          <p className="text-gray-600 mb-3">Upload an image to get started</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setImage(URL.createObjectURL(file));
            }}
            className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-gray-100 file:text-gray-700
              hover:file:bg-gray-200 cursor-pointer"
          />
        </div>
      )}

      {/* Show editor + toolbar after upload */}
      {image && (
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl mt-4">
          {/* Editor Preview */}
          <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-xl shadow-md p-4">
            <Editor image={image} filters={filters} imgRef={imgRef} />
          </div>

          {/* Toolbar */}
          <div className="sm:w-72 w-full bg-gray-50 rounded-xl shadow-md p-4">
            <Toolbar
              setImage={setImage}
              setFilters={setFilters}
              filters={filters}
              imgRef={imgRef}
            />
          </div>
        </div>
      )}
    </div>
  );
}
