import React from "react";
import { Upload } from "lucide-react";

export default function Toolbar({ setImage, imgRef }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200"
      >
        <Upload className="w-10 h-10 text-gray-500 mb-3" />
        <p className="text-gray-600 font-medium">Click to Upload or Drag & Drop</p>
        <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB</p>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}
