import React, { useState } from 'react';
import { Menu, Globe, ChevronDown, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <header className="bg-[#234798] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tentang" className="py-2 hover:text-gray-200 transition duration-150">
              Tentang
            </a>
            <a href="#syarat" className="py-2 hover:text-gray-200 transition duration-150">
              Syarat Ketentuan
            </a>
            <a href="#data" className="py-2 hover:text-gray-200 transition duration-150">
              Data dan Perangkat
            </a>
            <a href="#bantuan" className="py-2 hover:text-gray-200 transition duration-150">
              Bantuan
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 text-white hover:text-gray-200"
              >
                <div className="flex items-center">
                  <img src="https://flagcdn.com/w20/id.png" alt="Indonesian Flag" className="w-5 h-auto mr-1" />
                  <span className="mr-1">ID</span>
                  <ChevronDown size={16} />
                </div>
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md py-1 z-50">
                  <a
                    href="#id"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <img src="https://flagcdn.com/w20/id.png" alt="Indonesian Flag" className="w-5 h-auto mr-2" />
                    <span>Indonesian</span>
                  </a>
                  <a
                    href="#en"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <img src="https://flagcdn.com/w20/us.png" alt="English Flag" className="w-5 h-auto mr-2" />
                    <span>English</span>
                  </a>
                </div>
              )}
            </div>

            {/* Visit BHUMI Button */}
            <a
              href="#visit"
              className="hidden md:flex items-center bg-[#1988c2] text-white px-4 py-2 rounded-md hover:bg-[#1779af] transition duration-150"
            >
              <span className="mr-1">Kunjungi BHUMI</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#tentang"
                className="text-white hover:text-gray-200 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#syarat"
                className="text-white hover:text-gray-200 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Syarat Ketentuan
              </a>
              <a
                href="#data"
                className="text-white hover:text-gray-200 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Data dan Perangkat
              </a>
              <a
                href="#bantuan"
                className="text-white hover:text-gray-200 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bantuan
              </a>
              <a
                href="#visit"
                className="bg-[#1988c2] text-white px-4 py-2 rounded-md inline-block w-full text-center hover:bg-[#1779af] transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kunjungi BHUMI
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;