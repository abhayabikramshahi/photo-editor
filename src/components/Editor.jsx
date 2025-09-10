import React from "react";

export default function Editor({ image, filters, imgRef }) {
  const filterStyle = `brightness(${filters.brightness}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%)`;

  return (
    <div className="mb-6">
      <img
        ref={imgRef}
        src={image}
        alt="Uploaded"
        style={{ filter: filterStyle }}
        className="max-w-full max-h-[500px] border-2 border-gray-300 rounded shadow-lg"
      />
    </div>
  );
}
