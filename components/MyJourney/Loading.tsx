import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/assets/images/JourneyBG.gif)] bg-cover bg-center opacity-20 z-0" />
  
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center">
        <span className="w-12 h-12 border-4 border-white border-b-Fuchsia-blue rounded-full inline-block box-border animate-spin"></span>
        <div className="text-center">
          <p className="text-white mt-4">กำลังโหลด...</p>
        </div>
      </div>
    </div>
  );
  
}

export default LoadingScreen;