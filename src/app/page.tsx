import React from 'react';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import FloatingController from './components/FloatingController';

export const metadata: Metadata = {
  title: 'Sentra Ruang Terapi Pekanbaru | Terapi Anak Profesional',
  description: 'Sentra Ruang Terapi Pekanbaru menyediakan layanan terapi wicara, terapi okupasi, sensori integrasi, dan asesmen tumbuh kembang anak.',
};

export default function LandingPage() {
  return (
  <div className="min-h-screen relative overflow-x-hidden bg-[#FAF9F6] text-[#264653] font-sans antialiased">
    
    {/* Efek Latar Belakang */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2A9D8F]/10 to-transparent blur-[120px]" />
      <div className="absolute top-[30%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F4A261]/10 to-transparent blur-[100px]" />
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#264653_1px,transparent_1px),linear-gradient(to_bottom,#264653_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>

    {/* Tampilan Komponen Modular */}
    <Navbar />
    <FloatingController />
    
    {/* PERBAIKAN: Mengembalikan elemen main ke posisi relatif normal tanpa penumpukan padding luar */}
    <main className="relative z-10">
      <Hero />
      <ProblemAwareness />
      <Services />
      <ValueProposition />
      <Location />
      <FinalCTA />
    </main>

    {/* Footer */}
    <footer className="bg-[#FAF9F6] border-t border-[#264653]/10 pt-16 pb-12 relative z-10 font-sans">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    
    {/* BAGIAN ATAS FOOTER: Navigasi dan Hak Cipta */}
    <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[#264653]/5 gap-8">
      
      {/* Kiri: Identitas Singkat Sesuai Brosur */}
      <div className="text-center md:text-left space-y-2">
        <h3 className="font-bold text-lg text-[#264653] tracking-tight">
          SENTRA <span className="text-[#2A9D8F]">RUANG TERAPI</span>
        </h3>
        <p className="text-xs text-[#264653]/70 italic max-w-sm">
          "Langkah Kecil Menuju Kemandirian" — Pusat tumbuh kembang dan terapi anak profesional di Pekanbaru.
        </p>
      </div>

      {/* Kanan: Navigasi Cepat Sitemap (Bagus untuk SEO Google) */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-[#264653]/80">
        <a href="#beranda" className="hover:text-[#2A9D8F] transition-colors">Beranda</a>
        <a href="#layanan" className="hover:text-[#2A9D8F] transition-colors">Layanan</a>
        <a href="#mengapa-kami" className="hover:text-[#2A9D8F] transition-colors">Mengapa Kami</a>
        <a href="#lokasi" className="hover:text-[#2A9D8F] transition-colors">Lokasi</a>
      </div>

    </div>

    {/* BAGIAN BAWAH FOOTER: Hak Cipta dan Kontak Media Sosial */}
    <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs md:text-sm text-[#264653]/60 font-medium">
      <span>© 2026 Sentra Ruang Terapi Pekanbaru. All Rights Reserved.</span>
      
      {/* Tautan Sosial Media Resmi Tetap Dipertahankan dengan Efek Halus */}
      <div className="flex gap-6 font-semibold">
        <a 
          href="https://www.instagram.com/sentra.ruang.terapi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#ee2a7b] transition-colors flex items-center gap-1.5"
        >
          <span>Instagram</span>
        </a>
        <a 
          href="https://wa.me/6285356349557" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
        >
          <span>WhatsApp</span>
        </a>
      </div>
    </div>

  </div>
</footer>

  </div>
);
}