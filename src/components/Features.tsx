import React from 'react';
import { MapPin, Database, Clock, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Data Terkini",
      description: "Informasi geospasial yang selalu diperbarui secara berkala dari sumber resmi",
      icon: <Clock className="h-10 w-10 text-[#1988c2]" />,
      stat: "4,912",
      unit: "p.p.",
      lastUpdate: "Terakhir diperbarui: 2 hari yang lalu"
    },
    {
      id: 2,
      title: "Kengungan",
      description: "Fitur pencarian dan analisis data kependudukan dan pertanahan",
      icon: <MapPin className="h-10 w-10 text-[#f37a00]" />,
      stat: "23,419",
      unit: "pencarian/bulan",
      lastUpdate: "Layanan aktif"
    },
    {
      id: 3,
      title: "Jalanbar",
      description: "Informasi jaringan transportasi dan infrastruktur terpadu",
      icon: <Database className="h-10 w-10 text-[#234798]" />,
      stat: "18,756",
      unit: "km",
      lastUpdate: "Data tersedia"
    },
    {
      id: 4,
      title: "Pengguna Aktif",
      description: "Jumlah pengguna yang aktif mengakses layanan BHUMI",
      icon: <Users className="h-10 w-10 text-[#1988c2]" />,
      stat: "152,837",
      unit: "pengguna",
      lastUpdate: "Diperbarui secara real-time"
    }
  ];

  return (
    <section className="py-16 bg-white" id="data">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#234798] mb-4">
            Data dan Perangkat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Akses berbagai informasi geospasial dan perangkat analisis yang tersedia melalui platform BHUMI
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-50 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#234798] mb-2 group-hover:text-[#1988c2] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {feature.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-[#234798]">{feature.stat}</span>
                    <span className="text-gray-500 ml-1">{feature.unit}</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{feature.lastUpdate}</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 group-hover:bg-[#234798]/10 transition-colors duration-300">
                <a href="#details" className="text-[#1988c2] hover:text-[#234798] text-sm font-medium transition-colors duration-300">
                  Lihat Detail →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;