import React from 'react';

const PROBLEMS = [
  {
    title: 'Keterlambatan Bicara (Speech Delay)',
    desc: 'Belum mampu berkomunikasi secara optimal, kesulitan mengucapkan kata, atau kosakata sangat terbatas dibanding usianya.',
    color: 'bg-[#F4A261]/10 border-[#F4A261]/20 text-[#F4A261]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 8v4" className="opacity-70" /><path d="M12 16h.01" />
      </svg>
    )
  },
  {
    title: 'Hambatan Motorik & Fokus',
    desc: 'Sulit berkonsentrasi saat belajar atau bermain, mudah tantrum berlebih, hiperaktif, atau koordinasi gerakan tubuh tidak selaras.',
    color: 'bg-[#2A9D8F]/10 border-[#2A9D8F]/20 text-[#2A9D8F]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
        <path d="M22 10v4" /><path d="M18 12h4" />
      </svg>
    )
  },
  {
    title: 'Interaksi Sosial',
    desc: 'Kurang merespons saat dipanggil namanya, enggan melakukan kontak mata, atau kesulitan besar berbaur dengan teman sebaya.',
    color: 'bg-[#e76f51]/10 border-[#e76f51]/20 text-[#e76f51]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export default function ProblemAwareness() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-[44px] font-bold text-[#264653] leading-tight mb-4">
          Apakah Ayah & Bunda Mengkhawatirkan Hal Ini pada Si Kecil?
        </h2>
        <div className="w-20 h-1.5 bg-[#F4A261] rounded-full mx-auto mb-4" />
        <p className="text-base md:text-lg text-[#264653]/80">
          Tumbuh kembang anak di masa emas (*golden age*) sangat menentukan masa depannya. Kenali gejalanya sedini mungkin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {PROBLEMS.map((prob, i) => (
          <div key={i} className="bg-white/20 backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.25)] rounded-[24px] p-8 hover:-translate-y-1.5 transition-transform duration-300">
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${prob.color}`}>
              {prob.icon}
            </div>
            <h3 className="text-xl font-bold text-[#264653] mb-3">{prob.title}</h3>
            <p className="text-[#264653]/75 leading-relaxed text-sm md:text-base">{prob.desc}</p>
          </div>
        ))}
      </div>

      {/* Callout Banner */}
      <div className="bg-[#2A9D8F]/10 backdrop-blur-[10px] border border-[#2A9D8F]/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <span className="text-3xl">💡</span>
          <p className="font-semibold text-base md:text-lg text-[#264653]">
            Deteksi dini dan intervensi yang tepat adalah investasi terbaik untuk masa depan buah hati Anda.
          </p>
        </div>
        <a 
          href="https://wa.me/6285356349557"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#2A9D8F] text-white font-bold text-sm shadow-md hover:bg-[#238377] transition-all"
        >
          Konsultasikan Sekarang
        </a>
      </div>
    </section>
  );
}