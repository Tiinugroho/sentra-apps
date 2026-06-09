'use client';

import React from 'react';

export default function Location() {
  return (
<section id="lokasi" className="scroll-mt-24 py-20 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      {/* Container utama dengan efek Glassmorphism premium */}
      <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#264653] leading-tight mb-4">
            Lokasi Kami
          </h2>
          <div className="w-20 h-1.5 bg-[#2A9D8F] rounded-full mx-auto" />
        </div>
      <div className="bg-white/15 backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Kolom Kiri: Info Alamat & Kontak */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#2A9D8F]">Kunjungi Kami</span>
              <h2 className="text-3xl font-bold text-[#264653] mt-1 leading-tight">Sentra Ruang Terapi Pekanbaru</h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F] shrink-0 flex items-center justify-center mt-0.5">
                  📍
                </div>
                <p className="text-[#264653]/85 leading-relaxed">
                  Jl. Hang Jebat No.25, Suka Mulia, Kec. Sail, Kota Pekanbaru, Riau 28114
                </p>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F] shrink-0 flex items-center justify-center mt-0.5">
                  🕒
                </div>
                <div className="text-[#264653]/85 space-y-0.5">
                  <p className="font-semibold text-[#264653]">Senin – Jumat:</p>
                  <p className="opacity-90">08.00 – 16.00 WIB</p>
                  <p className="font-semibold text-rose-600/90 pt-1">Sabtu – Minggu:</p>
                  <p className="opacity-70">Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol CTA Rute */}
          <a 
            href="https://maps.google.com/?q=Sentra+Ruang+Terapi+Pekanbaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#264653] hover:bg-[#1a313b] text-white font-semibold px-6 py-4 rounded-xl transition-colors w-full sm:w-auto shadow-md"
          >
            <span>Buka Rute di Google Maps</span>
          </a>
        </div>

        {/* Kolom Kanan: Google Maps Embed Resmi yang Valid */}
        <div className="lg:col-span-7 min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden relative border border-white/40 shadow-inner">
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.673894348618!2d101.45012547596005!3d0.5204481635818451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5add31be77547%3A0x683e562666145a0b!2sSentra%20Ruang%20Terapi!5e0!3m2!1sid!2sid!4v1717975000000!5m2!1sid!2sid"
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Peta Lokasi Sentra Ruang Terapi Pekanbaru"
  className="absolute inset-0 w-full h-full"
/>
        </div>

      </div>
    </section>
  );
}