import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-8 mb-20 relative z-10">
      <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] relative overflow-hidden p-8 md:p-16 text-center">
        <div className="absolute inset-0 -z-10 opacity-15 filter scale-105 saturate-75">
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200" alt="Therapy background" className="object-cover w-full h-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264653] leading-[1.2]">
            Tumbuh Kembang Anak adalah Investasi Masa Depan. Mari Melangkah Bersama Kami.
          </h2>
          <p className="text-sm md:text-base text-[#264653]/80 max-w-xl mx-auto">
            Jangan tunda stimulasi penting bagi tumbuh kembang si kecil. Hubungi tim kami hari ini untuk konsultasi jadwal.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/6285356349557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F4A261] hover:bg-[#f3954d] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#F4A261]/20 hover:-translate-y-0.5"
            >
              <span>Chat Via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}