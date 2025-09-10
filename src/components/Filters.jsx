import React from "react";

export default function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-md">
      <div className="flex flex-col w-full">
        <label className="font-semibold mb-1">Brightness ({filters.brightness}%)</label>
        <input
          type="range"
          min="0"
          max="200"
          name="brightness"
          value={filters.brightness}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="font-semibold mb-1">Grayscale ({filters.grayscale}%)</label>
        <input
          type="range"
          min="0"
          max="100"
          name="grayscale"
          value={filters.grayscale}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="font-semibold mb-1">Sepia ({filters.sepia}%)</label>
        <input
          type="range"
          min="0"
          max="100"
          name="sepia"
          value={filters.sepia}
          onChange={handleChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
