import React from 'react';
import { Map, Info, Server, HelpCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="tentang">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#234798] mb-6">
              Sekilas Tentang BHUMI.atrbpn
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              BHUMI.atrbpn adalah sebuah situs peta interaktif yang digunakan untuk menyebarkan informasi spasial. BHUMI.atrbpn terintegrasi dengan geoportal ATLAS sebagai platform penyimpanan data geospasial yang dikelola oleh unit-unit kerja di Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional.
            </p>

            <h3 className="text-xl font-semibold text-[#234798] mb-4">
              Petunjuk Penggunaan
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pengguna dapat dengan mudah dan terstruktur memperoleh informasi geospasial dengan mengakses BHUMI.atrbpn.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jika Anda memerlukan petunjuk yang lebih spesifik, Anda dapat mengunjungi <a href="#bantuan" className="text-[#1988c2] hover:underline">Halaman Bantuan</a>.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#visit"
                className="bg-[#1988c2] text-white px-5 py-2 rounded-md font-medium hover:bg-[#1779af] transition duration-300"
              >
                Kunjungi BHUMI
              </a>
              <a
                href="#bantuan"
                className="border border-[#1988c2] text-[#1988c2] px-5 py-2 rounded-md font-medium hover:bg-[#1988c2] hover:text-white transition duration-300"
              >
                Bantuan
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#234798]">
              <Map className="h-12 w-12 text-[#1988c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#234798] mb-2">Data Geospasial</h3>
              <p className="text-gray-600">
                Akses data geospasial resmi dari Kementerian ATR/BPN dengan format standar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#1988c2]">
              <Info className="h-12 w-12 text-[#234798] mb-4" />
              <h3 className="text-xl font-semibold text-[#234798] mb-2">Informasi Pertanahan</h3>
              <p className="text-gray-600">
                Dapatkan informasi tentang pertanahan dan tata ruang dari sumber terpercaya.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#f37a00]">
              <Server className="h-12 w-12 text-[#f37a00] mb-4" />
              <h3 className="text-xl font-semibold text-[#234798] mb-2">Integrasi ATLAS</h3>
              <p className="text-gray-600">
                Terintegrasi dengan sistem ATLAS untuk pengelolaan data geospasial terpadu.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#1988c2]">
              <HelpCircle className="h-12 w-12 text-[#1988c2] mb-4" />
              <h3 className="text-xl font-semibold text-[#234798] mb-2">Panduan Lengkap</h3>
              <p className="text-gray-600">
                Tersedia panduan penggunaan lengkap untuk memaksimalkan manfaat platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;