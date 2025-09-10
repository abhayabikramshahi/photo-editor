import React from "react";

export default function Toolbar({ setImage, imgRef }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
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
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="file"
        onChange={handleUpload}
        className="px-3 py-2 border rounded bg-white shadow-sm"
      />
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Download
      </button>
    </div>
  );
}
