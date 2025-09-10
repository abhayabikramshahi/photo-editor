import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Compress from "./pages/Compress";
import PageNotFound from "./pages/PageNotFound";
import PWAInstallBox from "./components/PWAInstallBox";
import NavMobile from "./components/MobileNav";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"; // <-- should use react, not next

function App() {
  const imgRef = useRef(null);

  return (
    <Router>
      {/* Top Navbar (desktop/tablet) */}
      <Navbar />

      {/* PWA Install Prompt */}
      <PWAInstallBox />

      {/* Main Content */}
      <div className="min-h-screen pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<Home imgRef={imgRef} />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      {/* Bottom Nav (only shows on mobile) */}
      <NavMobile />

      {/* Vercel Analytics */}
      <Analytics />
    </Router>
  );
}

export default App;
