import React from 'react';
import { Shield, FileText, Lock } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="syarat">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#234798] mb-4">
            Syarat dan Ketentuan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi penting tentang ketentuan penggunaan platform BHUMI dan kebijakan terkait
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-[#1988c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#234798]">Ketentuan Penggunaan</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Aturan dan panduan tentang cara penggunaan platform BHUMI yang sesuai dan diperbolehkan.
            </p>
            <a 
              href="#terms" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Baca Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#1988c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#234798]">Kebijakan Privasi</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Informasi tentang bagaimana data pengguna dikumpulkan, disimpan, dan digunakan dalam platform BHUMI.
            </p>
            <a 
              href="#privacy" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Baca Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#1988c2] mr-3" />
              <h3 className="text-xl font-semibold text-[#234798]">Lisensi Data</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Ketentuan mengenai penggunaan, penyebaran, dan replikasi data yang disediakan dalam platform BHUMI.
            </p>
            <a 
              href="#license" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Baca Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-[#234798] mb-5">Ringkasan Ketentuan Penting</h3>
          
          <div className="space-y-5">
            <div className="border-l-4 border-[#1988c2] pl-4">
              <h4 className="font-medium text-[#234798] mb-1">Penggunaan Resmi</h4>
              <p className="text-gray-600 text-sm">
                Platform BHUMI merupakan layanan resmi Kementerian ATR/BPN yang disediakan untuk kepentingan masyarakat. Penggunaan data harus sesuai dengan ketentuan dan peraturan yang berlaku.
              </p>
            </div>
            
            <div className="border-l-4 border-[#1988c2] pl-4">
              <h4 className="font-medium text-[#234798] mb-1">Batasan Penggunaan Data</h4>
              <p className="text-gray-600 text-sm">
                Data yang tersedia di BHUMI tidak boleh digunakan untuk tujuan komersial tanpa izin tertulis dari Kementerian ATR/BPN. Setiap penggunaan data harus mencantumkan sumber data.
              </p>
            </div>
            
            <div className="border-l-4 border-[#1988c2] pl-4">
              <h4 className="font-medium text-[#234798] mb-1">Keakuratan Informasi</h4>
              <p className="text-gray-600 text-sm">
                Meskipun Kementerian ATR/BPN berusaha menyediakan informasi yang akurat, pengguna bertanggung jawab untuk melakukan verifikasi data sebelum menggunakannya untuk keperluan resmi.
              </p>
            </div>
            
            <div className="border-l-4 border-[#1988c2] pl-4">
              <h4 className="font-medium text-[#234798] mb-1">Keamanan Akun</h4>
              <p className="text-gray-600 text-sm">
                Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun mereka dan semua aktivitas yang terjadi di bawah akun tersebut.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="#fullterms"
              className="inline-block bg-[#1988c2] text-white px-5 py-2 rounded-md font-medium hover:bg-[#1779af] transition duration-300"
            >
              Baca Ketentuan Lengkap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;