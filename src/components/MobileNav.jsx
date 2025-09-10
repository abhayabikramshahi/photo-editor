import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Image } from 'lucide-react';

function NavMobile() {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'Compress', link: '/compress', icon: <Image size={20} /> },
  ];

  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-t-[#ccc] shadow-inner flex justify-around py-2 md:hidden">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.link;

        return (
          <Link
            key={index}
            to={item.link}
            className={`flex flex-col items-center transition-colors duration-200 ${
              isActive ? 'text-red-600' : 'text-gray-800 hover:text-red-600'
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavMobile;
