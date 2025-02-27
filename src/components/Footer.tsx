import React from "react";
import { Bot, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center mb-4">
                <Bot className="w-8 h-8 text-purple-500  "/>
              <span className="ml-2 text-xl font-bold">Agentia World</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            

            <div className="flex space-x-4">
              <Link href="https://github.com/panaverse" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                < Github  className="text-gray-400 hover:text-white" size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/panaverse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-gray-400 hover:text-white" size={24} />
              </Link>
              <Link href="https://twitter.com/Panaverse_edu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-gray-400 hover:text-white" size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  API
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </p>
         <Link href="https://nihal-khan.vercel.app/" > 
          <p className="text-center text-gray-500 text-sm "> 
            made with 💗 by <strong className="hover:text-white hover:underline">Nihal Khan Ghouri</strong>
            </p>
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;