import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#4A6074] to-[#283E51] opacity-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">HappinessPlans</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-white text-lg">
          <a href="/" className="hover:underline hover:text-yellow-400 transition-colors">Home</a>
          <a href="explore" className="hover:underline hover:text-yellow-400 transition-colors">Explore</a>
          <a href="about" className="hover:underline hover:text-yellow-400 transition-colors">About Us</a>
          <a href="contact" className="hover:underline hover:text-yellow-400 transition-colors">Contact</a>
          <a href="services" className="hover:underline hover:text-yellow-400 transition-colors">Services</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#4A6074] to-[#283E51] opacity-100 px-4 pb-4">
          <nav className="flex flex-col space-y-4 text-white text-lg items-center">
            <a href="#home" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#features" className="hover:underline" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
