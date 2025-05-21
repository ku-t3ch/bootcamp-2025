const LoadingScreen = () => {
  return (
    <div
        className="min-h-screen bg-linear-to-t from-black to-[#110622] opacity-80 fixed inset-0 bg-black flex items-center justify-center z-0 flex-col"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <span className="w-12 h-12 border-4 border-white border-b-Fuchsia-blue rounded-full inline-block box-border animate-spin"></span>
      <div className="text-center">
          <p className="text-white mt-4">กำลังโหลด...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;