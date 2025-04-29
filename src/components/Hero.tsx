import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-[#234798] to-[#1988c2]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Dengan Mudah, Akses Informasi Geospasial
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              Akses layanan peta interaktif dan informasi geospasial resmi dari Kementerian ATR/BPN melalui platform BHUMI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#visit"
                className="bg-[#f37a00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e67300] transition duration-300 shadow-lg"
              >
                Kunjungi BHUMI
              </a>
              <a
                href="#learn"
                className="bg-white text-[#234798] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Peta Indonesia" 
              className="rounded-lg shadow-xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300 border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;