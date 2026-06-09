'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // PERBAIKAN: Menghapus 'Ulasan' dari daftar menu navigasi
  const navItems = ['Beranda', 'Layanan', 'Mengapa Kami', 'Lokasi'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- DESKTOP & BASE NAVIGATION BAR --- */}
      <header className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-7xl px-4 md:px-8">
        <nav className="bg-white/15 backdrop-blur-[14px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.25)] rounded-[24px] px-6 py-4 flex items-center justify-between">
          
          {/* Brand Logo Identity */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 200 200" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 143 145 A 72 72 0 1 1 120 42 A 64 64 0 1 0 143 145" fill="url(#navGold)" />
                <path d="M 92 110 L 86 160 C 86 165, 114 165, 114 160 L 108 110 Z" fill="url(#navGold)" />
                <path d="M 45 112 C 45 62, 155 62, 155 112 C 140 114, 60 114, 45 112 Z" fill="url(#navRed)" />
                <circle cx="78" cy="98" r="9" fill="#FFFFFF" opacity="0.9" />
                <circle cx="100" cy="80" r="7" fill="#FFFFFF" opacity="0.9" />
                <circle cx="130" cy="95" r="8" fill="#FFFFFF" opacity="0.9" />
                <circle cx="70" cy="74" r="5" fill="#FFFFFF" opacity="0.9" />
                <circle cx="124" cy="73" r="4" fill="#FFFFFF" opacity="0.9" />
                <defs>
                  <linearGradient id="navRed" x1="45" y1="65" x2="155" y2="112" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E63946" /><stop offset="100%" stopColor="#B71C1C" />
                  </linearGradient>
                  <linearGradient id="navGold" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D4AF37" /><stop offset="50%" stopColor="#AA7C11" /><stop offset="100%" stopColor="#8A640F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-tight tracking-tight text-[#264653]">
                SENTRA <span className="text-[#2A9D8F]">RUANG TERAPI</span>
              </span>
              <span className="text-[9px] text-[#264653]/60 font-medium italic tracking-wide">
                Langkah Kecil Menuju Kemandirian
              </span>
            </div>
          </a>

          {/* Central Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-[#264653]/90">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-[#2A9D8F] transition-colors duration-200 relative group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2A9D8F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side Desktop CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/6285356349557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F4A261] hover:bg-[#f3954d] text-white font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 shadow-md shadow-[#F4A261]/20 hover:-translate-y-0.5"
            >
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Hamburger Menu Icon Button (Mobile Only) */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#264653] focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </nav>
      </header>

      {/* --- PREMIUM GLASSMORPHISM OFF-CANVAS DRAWER (MOBILE) --- */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMenu} />

        {/* Menu Panel Slide-out dari Kanan */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#FAF9F6]/95 backdrop-blur-xl border-l border-white/30 shadow-2xl p-8 pt-28 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Link Navigasi Mobile Tanpa Ulasan */}
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={toggleMenu}
                className="text-lg font-bold text-[#264653] hover:text-[#2A9D8F] py-2 border-b border-[#264653]/5 transition-colors block"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Tombol Hubungi Kami di Bagian Bawah Off-Canvas */}
          <div className="space-y-4">
            <div className="w-full h-px bg-[#264653]/10" />
            <a
              href="https://wa.me/6285356349557"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="w-full inline-flex items-center justify-center bg-[#F4A261] hover:bg-[#f3954d] text-white font-bold text-center py-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              Hubungi Kami via WA
            </a>
          </div>
        </div>
      </div>
    </>
  );
}