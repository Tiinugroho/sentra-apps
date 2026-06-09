import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Mengambil font resmi Google
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Mendaftarkan sebagai css variable
});

export const metadata: Metadata = {
  title: "Sentra Ruang Terapi Pekanbaru",
  description: "Pusat Tumbuh Kembang Anak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Penambahan scroll-smooth untuk navigasi halus saat menu diklik
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6] text-[#264653]">
        {children}
      </body>
    </html>
  );
}