import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function LineContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-2xl relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <h1 className="text-3xl font-extrabold text-white mb-2">Connect on LINE</h1>
        <p className="text-gray-400 mb-8 text-center max-w-sm">Scan the QR code below to add me on LINE and let's have a chat!</p>

        <div className="bg-white p-4 rounded-2xl shadow-inner w-64 h-64 relative mb-10 overflow-hidden group">
          <Image
            src="/images/line-qr.jpg"
            alt="LINE QR Code"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <FaArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
