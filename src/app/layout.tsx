import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", 
});

// PERBAIKAN: Mengubah tag HTML menjadi properti objek Next.js
export const metadata: Metadata = {
  title: "Sentra Ruang Terapi Pekanbaru",
  description: "Pusat Tumbuh Kembang Anak",
  verification: {
    google: "CVOzaS-gigEIH8Nl1CFS2sM1YLfVoXkD6CKVKA3vGTs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6] text-[#264653]">
        {children}
      </body>
    </html>
  );
}
