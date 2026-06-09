import React from 'react';

const FEATURES = [
  { 
    title: 'Terapis Profesional', 
    desc: 'Ditangani langsung oleh praktisi lulusan keahlian medis/psikologi terkait yang berpengalaman.', 
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    title: 'Program Individual', 
    desc: 'Rancangan program terapi dibuat spesifik disesuaikan dengan kurva kemajuan unik tiap anak.', 
    img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    title: 'Fasilitas Aman', 
    desc: 'Ruangan steril, penuh media edukatif, ramah anak, serta aman dari benturan fisik berbahaya.', 
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400' // <-- LINK AKTIF BARU UNTUK KELAS RAMAH ANAK
  },
  { 
    title: 'Lokasi Strategis', 
    desc: 'Terletak di jantung kota Pekanbaru, memberikan aksesibilitas rute yang sangat mudah dijangkau.', 
    img: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=400' 
  }
];
export default function ValueProposition() {
  return (
<section id="mengapa-kami" className="scroll-mt-24 py-20 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-[44px] font-bold text-[#264653] leading-tight mb-4">
          Mengapa Memilih Sentra Ruang Terapi Pekanbaru?
        </h2>
        <div className="w-20 h-1.5 bg-[#F4A261] rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {FEATURES.map((feat, i) => {
    // Logika pemilihan ikon SVG kustom yang relevan berdasarkan judul fitur
    let featureIcon;

    if (feat.title === 'Terapis Profesional') {
      featureIcon = (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 11h-4v2h4v-2zM18 7h4v2h-4V7zM18 15h4v2h-4v-2z" className="opacity-75" />
        </svg>
      );
    } else if (feat.title === 'Program Individual') {
      featureIcon = (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" className="opacity-60" />
        </svg>
      );
    } else if (feat.title === 'Fasilitas Aman') {
      featureIcon = (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8c0 0-2.5-1.5-2.5.5s2.5 3.5 2.5 3.5 2.5-1.5 2.5-3.5S12 8 12 8z" fill="currentColor" className="opacity-40" />
        </svg>
      );
    } else {
      // Default untuk Lokasi Strategis
      featureIcon = (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" fill="currentColor" className="opacity-40" />
        </svg>
      );
    }

    return (
      <div key={i} className="bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] p-6 flex flex-col space-y-4 hover:-translate-y-1 transition-all duration-300">
        
        {/* Kontainer Ikon Baru dengan Inline SVG Khusus */}
        <div className="w-12 h-12 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] border border-[#2A9D8F]/20 flex items-center justify-center shadow-sm">
          {featureIcon}
        </div>
        
        <h3 className="font-bold text-lg text-[#264653]">{feat.title}</h3>
        <p className="text-xs md:text-sm text-[#264653]/75 leading-relaxed">{feat.desc}</p>
        <div className="pt-2 h-24 rounded-xl overflow-hidden opacity-30 filter saturate-50 mt-auto">
          <img src={feat.img} alt={feat.title} className="object-cover rounded-3xl w-full h-full" loading="lazy" />
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
}