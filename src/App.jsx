import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Compress from "./pages/Compress";
import PageNotFound from "./pages/PageNotFound";
import './App.css';

function App() {
  const imgRef = useRef(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home imgRef={imgRef} />} />
         <Route path="/compress" element={<Compress />} />
           <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
