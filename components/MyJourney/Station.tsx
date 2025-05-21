import React from "react";
import Image from "next/image";

const stationData = {
  1: { name: "Pink", colorLock: "C47FB1", colorUnlock: "F182D2" },
  2: { name: "Orange", colorLock: "AE5E37", colorUnlock: "DD733E" },
  3: { name: "Yellow", colorLock: "C8B271", colorUnlock: "F5DB68" },
  4: { name: "Green", colorLock: "7DB57E", colorUnlock: "65D766" },
  5: { name: "Blue", colorLock: "84ADBA", colorUnlock: "4EB2D0" },
  6: { name: "Purple", colorLock: "8B6DB5", colorUnlock: "BC50DD" },
};

interface StationProps {
  stationId: number;
  status: number;
};

const Station = ({stationId, status}: StationProps) => {
  const station = stationData[stationId as keyof typeof stationData];
  const stationColor = status === 0 ? station.colorLock : station.colorUnlock;

  return (
    <div 
      className="w-full mx-auto bg-transparent border-2 rounded-[12px] px-8 py-4 flex flex-col items-center gap-8 z-10"
      style={{ borderColor: `#${stationColor}`, boxShadow: `0 0 20px 3px ${status === 0 ? "#9F9DB8" : `#${stationColor}`}`, }}
    >
      <div className="flex flex-col items-center">
        <Image
          src={`/assets/images/teams/Team${station.name}.png`}        
          alt="logo"
          width="100"
          height="100"
          className={`${status === 0 && "filter grayscale-[70%]"}`}
        />
        <h1 className="space-x-2 text-2xl [font-family:var(--font-anta)]">
          <span style={{ color: `#${stationColor}`}}>
            Station{stationId.toString()}
          </span>
        </h1>
      </div>
      <button 
        className="py-2 px-4 rounded-[8px] text-white text-xs sm:text-sm"
        style={{ background: status === 0 ? "#9F9DB8" : `#${stationColor}` }}
      >
        {status === 0 ? "ยังไม่ปลดล็อค" : "ปลดล็อคแล้ว"}
      </button>
    </div>
  );
};

export default Station;
