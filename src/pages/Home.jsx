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
    <div className="min-h-screen  flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Abhaya Photo Editor</h1>
      <Toolbar setImage={setImage} imgRef={imgRef} />
      {image && <Editor image={image} filters={filters} imgRef={imgRef} />}
      {image && <Filters filters={filters} setFilters={setFilters} />}
    </div>
  );
}

export default App;
