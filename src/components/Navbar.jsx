import React from 'react';
import { Home, Image } from 'lucide-react'; // Optional: icons for mobile

function Navbar() {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'Compress', link: '/compress', icon: <Image size={20} /> },
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white border-b border-b-[#ccc] py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">Abhaya Photo Editor</div>

          {/* Nav Links */}
          <ul className="flex space-x-6 text-gray-800 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-t-[#ccc] shadow-inner flex justify-around py-2 md:hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center text-gray-800 hover:text-red-600 transition-colors duration-200"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
