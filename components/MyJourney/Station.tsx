import React from "react";
import Image from "next/image";

const stationData = {
  "station1": { name: ["วิทยาศาสตร์"], image: "science.webp", colorLock: "C47FB1", colorUnlock: "F182D2" },
  "station2": { name: ["ดงตาลแคมป์"], image: "engineering.jpg", colorLock: "AE5E37", colorUnlock: "DD733E" },
  "station3": { name: ["เสวนาเปิดโลก", "แพทย์เกษตร", "การแพทย์ วิจัย", "และเทคโนโลยี"], image: "medicine.webp", colorLock: "C8B271", colorUnlock: "F5DB68" },
  "station4": { name: ["เทคนิคสัตวแพทย์"], image: "vettech.jpg", colorLock: "7DB57E", colorUnlock: "65D766" },
  "station5": { name: ["ก็มาดิบัส"], image: "bus.jpg", colorLock: "84ADBA", colorUnlock: "4EB2D0" },
  "station6": { name: ["one country,", "one clip"], image: "Humanities.jpg", colorLock: "8B6DB5", colorUnlock: "BC50DD" },
};

interface StationProps {
  stationId: string;
  status: boolean;
};

const Station = ({stationId, status}: StationProps) => {
  const station = stationData[stationId as keyof typeof stationData];
  const stationColor = !status ? station.colorLock : station.colorUnlock;

  return (
    <div 
      className="w-full max-w-[220px] min-h-[300px] mx-auto bg-transparent border-2 rounded-[12px] px-8 py-4 flex flex-col items-center justify-between gap-8 z-10"
      style={{ borderColor: `#${status && stationColor}`, boxShadow: `0 0 20px 3px ${!status ? "#9F9DB8" : `#${stationColor}`}`, }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={`/assets/images/stations/${station.image}`}
            alt="logo"
            fill
            className={`${!status ? "grayscale-[90%]" : ""} object-contain rounded-full`}
            sizes="96px"
          />
        </div>
        <h1
          className={`text-center ${
            Array.isArray(station.name) && station.name.length > 2 ? "text-md" : "text-[18px]"
          }`}
          style={{ color: `#${stationColor}`}}
        >
          {Array.isArray(station.name)
            ? station.name.map((line, index) => (
                <div key={index}>{line}</div>
              ))
            : station.name}
        </h1>
      </div>
      <p
        className="py-2 px-4 rounded-[8px] text-white text-xs sm:text-sm"
        style={{ background: !status ? "#9F9DB8" : `#${stationColor}` }}
      >
        {!status ? "ยังไม่ปลดล็อค" : "ปลดล็อคแล้ว"}
      </p>
    </div>
  );
};

export default Station;
