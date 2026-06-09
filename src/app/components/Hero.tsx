    'use client';

    import React from 'react';
    import Image from 'next/image';

    export default function Hero() {
    return (
        // PERBAIKAN UTAMA: Menaikkan padding mobile menjadi pt-36 (setara 144px) 
        // agar tulisan dijamin meluncur ke bawah melewati batas bawah navbar.
        <section id="beranda" className="scroll-mt-28 pt-36 pb-20 md:pt-48 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Spacer Tambahan Khusus Mobile untuk Membantu Mendorong Teks dari Atas */}
        <div className="h-4 w-full block md:hidden" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Teks Kiri */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#264653] leading-[1.15] tracking-tight">
                Dukung Tumbuh Kembang Optimal Buah Hati Anda Bersama <span className="text-[#2A9D8F]">Sentra Ruang Terapi</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#264653]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Layanan terapi terpadu, profesional, dan ramah anak di Pekanbaru untuk membantu anak tumbuh mandiri, percaya diri, dan mencapai potensi terbaiknya.
            </p>
            
            {/* Tombol Hubungi Kami & Lihat Layanan */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                href="https://wa.me/6285356349557"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2A9D8F] hover:bg-[#238377] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg shadow-[#2A9D8F]/20 hover:-translate-y-0.5"
                >
                <span>Jadwalkan Konsultasi Sekarang</span>
                </a>
                <a 
                href="#layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fafafa] text-[#264653] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base border border-gray-200 hover:border-[#2A9D8F]/30 shadow-sm"
                >
                <span>Lihat Layanan</span>
                </a>
            </div>
            </div>

            {/* Kolon Kanan + Floating Cards Visual */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 px-4">
            <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto z-10">
                <Image 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" 
                alt="Terapis berinteraksi dengan anak"
                fill 
                className="object-cover rounded-3xl shadow-2xl shadow-[#264653]/10 border border-white/40"
                sizes="(max-w-7xl) 40vw, 30vw"
                priority 
                />
                
                {/* Floating Cards */}
                <div className="bg-white/15 backdrop-blur-[12px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] absolute -left-8 top-16 p-4 flex items-center gap-3 animate-[bounce_5s_infinite_ease-in-out] max-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-[#F4A261]/20 flex items-center justify-center text-xl">✨</div>
                <div>
                    <h4 className="font-bold text-xs text-[#264653]">Happy Growth</h4>
                    <p className="text-[10px] text-[#264653]/70">Anak Tumbuh Riang</p>
                </div>
                </div>

                <div className="bg-white/15 backdrop-blur-[12px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] absolute -right-6 top-[40%] p-4 flex items-center gap-3 animate-[bounce_6s_infinite_ease-in-out] max-w-[210px]">
                <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center text-lg">🎯</div>
                <div>
                    <h4 className="font-bold text-xs text-[#264653]">Program Personal</h4>
                    <p className="text-[10px] text-[#264653]/70">Sesuai Kebutuhan Anak</p>
                </div>
                </div>

                <div className="bg-white/15 backdrop-blur-[12px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] absolute -left-4 bottom-12 p-4 flex items-center gap-3 animate-[bounce_4s_infinite_ease-in-out] max-w-[190px]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg">🛡️</div>
                <div>
                    <h4 className="font-bold text-xs text-[#264653]">Terapis Berizin</h4>
                    <p className="text-[10px] text-[#264653]/70">Tim Ahli Berpengalaman</p>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
    );
    }