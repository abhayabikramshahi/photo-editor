import React, { useState, useRef } from "react";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import Filters from "../components/Filters";

function App() {
  const [image, setImage] = useState(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    grayscale: 0,
    sepia: 0,
  });
  const imgRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Abhaya Photo Editor
        </h1>
        <p className="text-gray-500">
          Upload your photo, edit with filters, and download instantly.
        </p>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {/* Toolbar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Upload</h2>
          <Toolbar setImage={setImage} imgRef={imgRef} />
        </div>

        {/* Image Preview */}
        {image && (
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Preview</h2>
            <Editor image={image} filters={filters} imgRef={imgRef} />
          </div>
        )}
      </div>

      {/* Filters Section */}
      {image && (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Adjust Filters</h2>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        Built with ❤️ by Abhaya
      </footer>
    </div>
  );
}

export default App;
