    'use client';

    import React, { useState, useEffect, useRef } from 'react';

    export default function FloatingController() {
    const [showScroll, setShowScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hasStartedRef = useRef<boolean>(false);

    useEffect(() => {
        // Inisialisasi Audio Latar Belakang Secara Tersembunyi
        audioRef.current = new Audio('/ambient-kids.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.25;

        const forcePlayAudio = () => {
        if (audioRef.current && !hasStartedRef.current) {
            audioRef.current.play()
            .then(() => {
                hasStartedRef.current = true;
                window.removeEventListener('click', forcePlayAudio);
                window.removeEventListener('scroll', forcePlayAudio);
                window.removeEventListener('touchstart', forcePlayAudio);
            })
            .catch(() => {});
        }
        };

        window.addEventListener('click', forcePlayAudio);
        window.addEventListener('scroll', forcePlayAudio);
        window.addEventListener('touchstart', forcePlayAudio);

        const checkScroll = () => {
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
        };

        window.addEventListener('scroll', checkScroll);
        
        return () => {
        window.removeEventListener('scroll', checkScroll);
        window.removeEventListener('click', forcePlayAudio);
        window.removeEventListener('scroll', forcePlayAudio);
        window.removeEventListener('touchstart', forcePlayAudio);
        if (audioRef.current) audioRef.current.pause();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // Menggunakan h-14 md:h-auto sebagai patokan jangkar koordinat absolute terbawah di mobile
        <div className="fixed bottom-6 right-6 z-50 font-sans antialiased h-14 md:h-auto flex flex-col justify-end items-center">
        
        {/* ================================================================= */}
        {/* 📱 TAMPILAN MOBILE (SUSUNAN VERTIKAL DENGAN ANCHOR POSISI TETAP)  */}
        {/* ================================================================= */}
        <div className="flex flex-col items-center md:hidden relative w-14">
            
            {/* PERBAIKAN UTAMA MOBILE: 
            Menggunakan bottom-[72px] (tinggi tombol hamburger + jarak gap). 
            Saat showScroll false, posisi top/bottom tidak berubah, elemen dikunci di koordinat tersebut,
            lalu ditarik lurus ke kanan menggunakan translate-x-16.
            */}
            <div 
            className={`absolute bottom-[72px] transition-all duration-300 ease-in-out ${
                showScroll 
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto' 
                : 'opacity-0 scale-75 translate-x-16 pointer-events-none'
            }`}
            >
            <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-[#264653] border border-white/40 shadow-lg flex items-center justify-center transform active:scale-90"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
            </div>

            {/* Sub-Menu Lintasan Sosial Media Mobile (Slide Up dari atas tombol hamburger) */}
            <div 
            className={`absolute bottom-[72px] flex flex-col items-center gap-3.5 transition-all duration-500 ease-in-out origin-bottom ${
                isMenuOpen 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto max-h-[150px]' 
                : 'opacity-0 translate-y-10 scale-75 pointer-events-none max-h-0 overflow-hidden'
            }`}
            >
            {/* Tombol WA Mobile */}
            <a
                href="https://wa.me/6285356349557"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center transition-transform active:scale-90"
            >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                </svg>
            </a>
            
            {/* Tombol IG Mobile */}
            <a
                href="https://www.instagram.com/sentra.ruang.terapi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-gray-100 text-[#ee2a7b] shadow-md flex items-center justify-center transition-transform active:scale-90"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            </a>
            </div>

            {/* Tombol Utama Hamburger Mobile (Tetap Statis Menjaga Alur Layout Utama) */}
            <button
            onClick={handleMenuToggle}
            className={`w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center border transition-all duration-300 transform active:scale-95 absolute bottom-0 ${
                isMenuOpen ? 'bg-rose-500 border-rose-400 rotate-90 scale-95' : 'bg-[#F4A261] border-[#F4A261]/30 hover:bg-[#f3954d]'
            }`}
            >
            {isMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            )}
            </button>
        </div>

        {/* ================================================================= */}
        {/* 💻 TAMPILAN DESKTOP (SUSUNAN HORIZONTAL KIRI-KANAN)               */}
        {/* ================================================================= */}
        <div className="hidden md:flex items-center gap-4 transition-all duration-300">
            
            {/* WhatsApp Link Desktop */}
            <a
            href="https://wa.me/6285356349557"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center transition-all hover:bg-white hover:-translate-y-0.5 active:scale-95"
            title="WhatsApp Sentra Ruang Terapi"
            >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
            </svg>
            </a>
            
            {/* Instagram Link Desktop */}
            <a
            href="https://www.instagram.com/sentra.ruang.terapi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white border border-gray-100 text-[#ee2a7b] shadow-md flex items-center justify-center transition-all hover:bg-white hover:-translate-y-0.5 active:scale-95"
            title="Instagram Sentra Ruang Terapi"
            >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            </a>

            {/* Tombol Scroll To Top Desktop */}
            <div className={`transition-all duration-300 ease-in-out origin-right ${showScroll ? 'w-12 opacity-100 scale-100' : 'w-0 opacity-0 scale-50 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-[#264653] text-white shadow-md flex items-center justify-center hover:bg-[#1a313b] hover:-translate-y-0.5 active:scale-95"
                title="Gulir Ke Atas"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
            </div>

        </div>

        </div>
    );
    }