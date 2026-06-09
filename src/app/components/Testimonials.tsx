import React from 'react';

const REVIEWS = [
  { initial: 'R', name: 'Bunda Rian', role: 'Orang Tua dari Al Fatih (4 Thn)', text: 'Perkembangan bicaranya meningkat pesat setelah 3 bulan terapi di sini. Terapisnya sangat sabar dan komunikatif memberikan arahan latihan di rumah.' },
  { initial: 'K', name: 'Ayah Kurniawan', role: 'Orang Tua dari Kevin (5 Thn)', text: 'Sangat bersyukur menemukan Sentra Ruang Terapi. Ruang sensori integrasinya lengkap. Sekarang Kevin jauh lebih fokus dan emosinya stabil.' },
  { initial: 'R', name: 'Bunda Rahma', role: 'Orang Tua dari Keysha (6 Thn)', text: 'Pelayanannya profesional mulai dari asesmen awal hingga evaluasi berjalan. Pendekatan personal sesuai kenyamanan psikis anak.' }
];

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-20 bg-white/40 border-y border-white/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#264653] leading-tight mb-4">
            Apa Kata Orang Tua?
          </h2>
          <div className="w-20 h-1.5 bg-[#2A9D8F] rounded-full mx-auto" />
        </div>

        <div className="flex gap-8 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-none">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white/30 backdrop-blur-[10px] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] p-8 min-w-[290px] sm:min-w-[380px] flex-1 snap-center flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#F4A261]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-[#264653]/85 text-sm md:text-base italic leading-relaxed">"{review.text}"</p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#264653]/10">
                <div className="w-12 h-12 rounded-full bg-[#2A9D8F] flex items-center justify-center text-white font-bold text-lg">{review.initial}</div>
                <div>
                  <h4 className="font-bold text-[#264653] text-sm md:text-base">{review.name}</h4>
                  <p className="text-xs text-[#264653]/60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}