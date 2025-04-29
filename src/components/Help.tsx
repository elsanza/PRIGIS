import React from 'react';
import { HelpCircle, FileText, BookOpen, MessageCircle } from 'lucide-react';

const Help: React.FC = () => {
  const faqItems = [
    {
      question: "Apa itu BHUMI.atrbpn?",
      answer: "BHUMI.atrbpn adalah situs peta interaktif yang digunakan untuk menyebarkan informasi spasial dari Kementerian ATR/BPN. Platform ini terintegrasi dengan geoportal ATLAS untuk penyimpanan dan pengelolaan data."
    },
    {
      question: "Bagaimana cara mengakses data geospasial?",
      answer: "Anda dapat mengakses data geospasial dengan mengklik tombol 'Kunjungi BHUMI' untuk masuk ke sistem peta interaktif. Dari sana, Anda dapat mencari dan melihat berbagai layer informasi geospasial."
    },
    {
      question: "Apakah data di BHUMI dapat diunduh?",
      answer: "Ya, sebagian data geospasial dapat diunduh sesuai dengan kebijakan berbagi data Kementerian ATR/BPN. Untuk mengunduh data, Anda perlu memiliki akun terdaftar dengan izin yang sesuai."
    },
    {
      question: "Bagaimana jika saya menemukan masalah teknis?",
      answer: "Jika Anda menemukan masalah teknis, silakan hubungi tim dukungan melalui menu 'Bantuan' atau kirim email ke support@bhumi.atrbpn.go.id dengan detail masalah yang Anda alami."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="bantuan">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#234798] mb-4">
            Bantuan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum dan panduan penggunaan platform BHUMI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <FileText className="h-8 w-8 text-[#1988c2]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#234798] mb-3">Panduan Pengguna</h3>
            <p className="text-gray-600 mb-4">
              Akses panduan lengkap penggunaan aplikasi BHUMI untuk berbagai kebutuhan.
            </p>
            <a 
              href="#guides" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Lihat Panduan
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <BookOpen className="h-8 w-8 text-[#1988c2]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#234798] mb-3">Tutorial Video</h3>
            <p className="text-gray-600 mb-4">
              Pelajari cara menggunakan BHUMI melalui tutorial video langkah demi langkah.
            </p>
            <a 
              href="#tutorials" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Tonton Tutorial
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <MessageCircle className="h-8 w-8 text-[#1988c2]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#234798] mb-3">Hubungi Kami</h3>
            <p className="text-gray-600 mb-4">
              Butuh bantuan lebih lanjut? Tim dukungan kami siap membantu Anda.
            </p>
            <a 
              href="#contact" 
              className="text-[#1988c2] hover:text-[#f37a00] font-medium inline-flex items-center transition-colors duration-300"
            >
              Kontak Support
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold text-[#234798] mb-6 flex items-center">
            <HelpCircle className="h-5 w-5 mr-2 text-[#f37a00]" />
            Pertanyaan yang Sering Diajukan (FAQ)
          </h3>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h4 className="text-lg font-medium text-[#234798] mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#allfaq"
              className="inline-block bg-[#1988c2] text-white px-5 py-2 rounded-md font-medium hover:bg-[#1779af] transition duration-300"
            >
              Lihat Semua FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;