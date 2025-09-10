import React, { useState } from "react";

export default function Toolbar({ setImage, imgRef }) {
  const [clicked, setClicked] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
    setClicked(false); // reset button if user uploads new image
  };

  const handleDownload = () => {
    if (!imgRef.current) return;

    const canvas = document.createElement("canvas");
    const img = imgRef.current;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.filter = img.style.filter;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();

    setClicked(true); // change button after click
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      {/* Upload Input */}
      <input
        type="file"
        onChange={handleUpload}
        className="px-4 py-2 border border-gray-300 rounded shadow-sm bg-white text-gray-700 cursor-pointer hover:bg-gray-100 transition"
      />

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className={`
          px-5 py-2 border border-gray-300 rounded text-white font-semibold 
          transition-colors duration-300 ease-in-out
          ${clicked ? "bg-black border-black" : "bg-red-600 hover:bg-red-700"}
        `}
      >
        Download
      </button>
    </div>
  );
}
