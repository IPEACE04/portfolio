import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peerapat Chandaeng | Portfolio",
  description: "Portfolio of Peerapat Chandaeng, a Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black text-white antialiased min-h-screen selection:bg-white selection:text-black leading-relaxed`}>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        <Navbar />
        <main className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-12 flex flex-col gap-20 md:gap-32 pt-36 pb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
