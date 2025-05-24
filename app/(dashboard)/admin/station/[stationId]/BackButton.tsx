"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({ label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`relative flex items-center min-w-[80px] sm:min-w-[100px] h-8 sm:h-10 overflow-visible ${className}`}
      aria-label="กลับ"
    >
      <div className="absolute left-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4b4f6c] flex items-center justify-center z-10">
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center">
          <ChevronLeft size={16} className="text-white sm:hidden" />
          <ChevronLeft size={18} className="text-white hidden sm:block" />
        </div>
      </div>
      
      <div className="absolute left-2 sm:left-3 h-6 sm:h-7 min-w-[60px] sm:min-w-[80px] pr-3 sm:pr-4 pl-6 sm:pl-7 rounded-full bg-[#4b4f6c] flex items-center justify-center">
        <span className="font-medium text-white text-xs sm:text-sm">{label}</span>
      </div>
    </button>
  );
}