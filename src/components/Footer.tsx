import React from 'react';
import { Map, Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#234798] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Layanan informasi geospasial resmi dari Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional Republik Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#social" className="text-gray-300 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#social" className="text-gray-300 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#social" className="text-gray-300 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#social" className="text-gray-300 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tentang" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Tentang BHUMI
                </a>
              </li>
              <li>
                <a href="#syarat" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Syarat Ketentuan
                </a>
              </li>
              <li>
                <a href="#data" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Data dan Perangkat
                </a>
              </li>
              <li>
                <a href="#bantuan" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#visit" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Kunjungi BHUMI
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Layanan Terkait</h3>
            <ul className="space-y-2">
              <li>
                <a href="#atlas" className="text-gray-300 hover:text-white transition flex items-center">
                  <Map className="w-4 h-4 mr-2" />
                  Geoportal ATLAS
                </a>
              </li>
              <li>
                <a href="#kementerian" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website Kementerian ATR/BPN
                </a>
              </li>
              <li>
                <a href="#ptsl" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Layanan PTSL
                </a>
              </li>
              <li>
                <a href="#ptsp" className="text-gray-300 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Layanan PTSP
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex">
                <div className="text-[#f37a00] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="text-gray-300">
                  Jl. Sisingamangaraja No.2, Jakarta Selatan, DKI Jakarta, Indonesia
                </div>
              </li>
              <li className="flex">
                <div className="text-[#f37a00] mr-3 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-gray-300">
                  (021) 7228901
                </div>
              </li>
              <li className="flex">
                <div className="text-[#f37a00] mr-3 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-gray-300">
                  <a href="mailto:info@bhumi.atrbpn.go.id" className="hover:text-white">info@bhumi.atrbpn.go.id</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#1a365d] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm">Kebijakan Privasi</a>
              <span className="text-gray-500">|</span>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm">Syarat Penggunaan</a>
              <span className="text-gray-500">|</span>
              <a href="#sitemap" className="text-gray-400 hover:text-white text-sm">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;