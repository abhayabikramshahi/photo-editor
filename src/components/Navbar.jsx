import React from 'react';

function Navbar() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Compress', link: '/compress' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-b-[#ccc] py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Abhaya Photo Editor
        </div>

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
  );
}

export default Navbar;
