import React from "react";

export default function Toolbar({ setImage, setFilters, filters, imgRef }) {
  const handleDownload = () => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.filter = img.style.filter || "none";
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="mb-6 flex flex-col items-center gap-4">
      {/* Brightness */}
      <label>
        Brightness
        <input
          type="range"
          min="0"
          max="200"
          value={filters.brightness}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, brightness: e.target.value }))
          }
        />
      </label>

      {/* Contrast */}
      <label>
        Contrast
        <input
          type="range"
          min="0"
          max="200"
          value={filters.contrast}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, contrast: e.target.value }))
          }
        />
      </label>

      {/* Saturation */}
      <label>
        Saturation
        <input
          type="range"
          min="0"
          max="200"
          value={filters.saturate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, saturate: e.target.value }))
          }
        />
      </label>

      {/* Grayscale */}
      <label>
        Grayscale
        <input
          type="range"
          min="0"
          max="100"
          value={filters.grayscale}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, grayscale: e.target.value }))
          }
        />
      </label>

      {/* Sepia */}
      <label>
        Sepia
        <input
          type="range"
          min="0"
          max="100"
          value={filters.sepia}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sepia: e.target.value }))
          }
        />
      </label>

      {/* Blur */}
      <label>
        Blur
        <input
          type="range"
          min="0"
          max="20"
          value={filters.blur}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, blur: e.target.value }))
          }
        />{" "}
        px
      </label>

      {/* Hue Rotate */}
      <label>
        Hue Rotate
        <input
          type="range"
          min="0"
          max="360"
          value={filters.hueRotate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, hueRotate: e.target.value }))
          }
        />{" "}
        °
      </label>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Edited Image
      </button>
    </div>
  );
}
