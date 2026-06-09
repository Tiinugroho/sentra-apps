import React from 'react';

const SERVICES = [
  {
    title: 'Terapi Wicara',
    desc: 'Melatih komunikasi verbal dan non-verbal, mengatasi keterlambatan bicara, artikulasi, serta kemampuan bahasa anak dan dewasa.',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Terapi Okupasional (OT)',
    desc: 'Melatih motorik halus, kemandirian aktivitas harian, serta sensori integrasi agar mampu beradaptasi dengan lingkungan.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Layanan Psikolog',
    desc: 'Konsultasi psikologi, asesmen tumbuh kembang, terapi perilaku, serta dukungan kesehatan mental untuk anak dan dewasa.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Fisioterapi',
    desc: 'Melatih kemampuan motorik kasar, kekuatan otot, keseimbangan, dan koordinasi gerakan tubuh pasca-cedera atau gangguan perkembangan.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' // <-- LINK AKTIF BARU UNTUK FISIOTERAPI
  }
];
export default function Services() {
  return (
<section id="layanan" className="scroll-mt-24 py-20 bg-white/40 border-y border-white/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#264653] leading-tight mb-4">
            Layanan Terapi Anak dan Dewasa
          </h2>
          <div className="w-20 h-1.5 bg-[#2A9D8F] rounded-full mx-auto mb-4" />
          <p className="text-sm md:text-base text-[#264653]/70">
            Dikelola secara profesional oleh tim Terapis Wicara, Okupasional, Fisioterapi, dan Psikolog berpengalaman di Pekanbaru.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white/15 backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.25)] rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center hover:scale-[1.01] transition-all duration-300 group"
            >
              {/* Gambar Container dengan perbaikan layout flex-shrink */}
              <div className="w-full sm:w-40 h-40 shrink-0 block relative overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Deskripsi Teks */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-[#264653] group-hover:text-[#2A9D8F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#264653]/80 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <a 
                  href="https://wa.me/6285356349557" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A9D8F] hover:text-[#238377] pt-2"
                >
                  <span>Konsultasi Layanan Ini</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}