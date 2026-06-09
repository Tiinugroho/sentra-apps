    'use client';

    export function useSound() {
    const playSound = () => {
        // Memastikan kode hanya berjalan di browser (Client-Side)
        if (typeof window !== 'undefined') {
        const audio = new Audio('/click-sound.mp3');
        audio.volume = 0.4; // Mengatur volume suara agar lembut (40%)
        
        audio.play().catch((err) => {
            // Mengantisipasi jika browser memblokir auto-play bawaan
            console.log("Audio play prevented by browser autoplay policy", err);
        });
        }
    };

    return { playSound };
    }