import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6 flex justify-start">
        <Link href="/#resume" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </Link>
      </div>
      <div className="relative w-full max-w-5xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl p-2 md:p-6 border border-gray-800">
        <Image
          src="/images/profile.jpg" // Note: Currently named profile.jpg for the CV image
          alt="Peerapat Chandaeng Resume"
          width={1200}
          height={1600}
          className="w-full h-auto object-contain rounded"
          priority
        />
      </div>
    </div>
  );
}
