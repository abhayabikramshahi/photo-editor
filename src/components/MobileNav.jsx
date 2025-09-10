import React from 'react';
import { Home, Image } from 'lucide-react';

function NavMobile() {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'Compress', link: '/compress', icon: <Image size={20} /> },
  ];

  return (
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
  );
}

export default NavMobile;
