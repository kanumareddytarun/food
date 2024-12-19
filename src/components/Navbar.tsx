import React from 'react';
import { Menu, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-orange-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Tarun's Spicy Hub</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-orange-700 px-3 py-2 rounded-md">Home</a>
              <a href="#menu" className="hover:bg-orange-700 px-3 py-2 rounded-md">Menu</a>
              <a href="#about" className="hover:bg-orange-700 px-3 py-2 rounded-md">About</a>
              <a href="#contact" className="hover:bg-orange-700 px-3 py-2 rounded-md">Contact</a>
              <a href="#reviews" className="hover:bg-orange-700 px-3 py-2 rounded-md">Reviews</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center space-x-1">
              <Phone size={18} />
              <span>+91 9876543210</span>
            </a>
            <div className="flex space-x-2">
              <a href="https://instagram.com/TarunsSpicyHub" className="hover:text-orange-200">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/TarunsSpicyHub" className="hover:text-orange-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-orange-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}