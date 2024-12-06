import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-red-500 to-orange-400 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Delicious Eatz
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:bg-gray-100 flex items-center">
              <ShoppingCart className="mr-2" size={20} />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-r from-red-500 to-orange-400">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-2 py-2 text-white hover:bg-red-600 rounded"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full bg-white text-red-600 px-4 py-2 rounded-full hover:bg-gray-100 flex items-center justify-center"
                onClick={toggleMenu}
              >
                <ShoppingCart className="mr-2" size={20} />
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;