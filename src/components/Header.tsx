'use client';
import { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-3">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-purple-500" />
          <span className="font-bold text-xl">Agentia World</span>
        </Link>

        <ul className="hidden md:flex space-x-8 items-end">
          <li>
            <Link href="#features" className="hover:text-purple-400">
              Features
            </Link>
          </li>
          <li>
            <Link href="#technology" className="hover:text-purple-400">
              Technology
            </Link>
          </li>
          <li>
            <Link href="#solution" className="hover:text-purple-400">
              Agents
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-purple-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-400">
              Contact
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-xl transition duration-300"
        >
          Launch Console
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-blue-400"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-4 p-4 text-center">
              <Link href="#features" className="hover:text-purple-400" 
              onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link href="#technology" className="hover:text-purple-400"
              onClick={() => setIsOpen(false)}>
                Technology
              </Link>
              <Link href="#solution" className="hover:text-purple-400"
              onClick={() => setIsOpen(false)}>
                Agents
              </Link>
              <Link href="#pricing" className="hover:text-purple-400"
              onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link href="#contact" className="hover:text-purple-400"
              onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link
                href="/"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-xl transition duration-300"
              >
                Launch Console
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


