import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';

function App() {
  const imgRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home imgRef={imgRef} />} />
      </Routes>
    </Router>
  );
}

export default App;
