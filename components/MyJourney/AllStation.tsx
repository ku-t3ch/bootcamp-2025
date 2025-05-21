"use client";
import { useEffect, useState } from "react";
import Station from "./Station"

type StationInfo = {
  id: number;
  status: "lock" | "unlock";
};

const mockStationsInfo: StationInfo[] = [
  { "id": 1, "status": "unlock" },
  { "id": 2, "status": "lock" },
  { "id": 3, "status": "lock" },
  { "id": 4, "status": "lock" },
  { "id": 5, "status": "lock" },
  { "id": 6, "status": "unlock" }
]

const AllStation = () => {
  const [stationsInfo, setStationsInfo] = useState<StationInfo[] | null>();

  useEffect(() => {
    setStationsInfo(mockStationsInfo);
  })

  if (!stationsInfo) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
      {stationsInfo.map(station => (
        <Station key={station.id} stationId={station.id} status={station.status} />
      ))}
    </div>
  );
}

export default AllStation;