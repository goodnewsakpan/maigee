import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'About', to: '/about' },
    { label: 'Reservations', to: '/reservations' },
    { label: 'Contact', to: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-red-500 to-orange-400 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-black text-white">
                My_gee
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-12"> {/* Changed from space-x-6 to space-x-12 */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-white hover:text-gray-200 transition-colors duration-200 text-lg" // Added text-lg
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-white text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center ml-4"> {/* Added ml-4 and increased px */}
                <ShoppingCart className="mr-2" size={20} />
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-3"> {/* Increased space-y-1 to space-y-3 */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-3 py-3 text-white hover:bg-red-600 rounded-md transition-colors duration-200" // Increased py-2 to py-3
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <button 
                  className="w-full mt-2 bg-white text-red-600 px-4 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                  onClick={toggleMenu}
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Order Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;