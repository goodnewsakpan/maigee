import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' }
  ];

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Restaurant Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Delicious Eats</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <MapPin className="mr-2" size={20} />
              123 Flavor Street, Foodville
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" size={20} />
              (555) 123-4567
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" size={20} />
              hello@deliciouseats.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block hover:text-gray-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="hover:text-gray-200"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center">
        <p>&copy; 2024 Delicious Eats. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;