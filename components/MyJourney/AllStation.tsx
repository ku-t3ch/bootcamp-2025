"use client";
import { useEffect, useState } from "react";
import Station from "./Station"
import axiosClient from "@/lib/axios";

type StationInfo = {
  stationId: number;
  status: number;
};

const AllStation = ({teamId}: {teamId: string}) => {
  const [stationsInfo, setStationsInfo] = useState<StationInfo[] | null>();

  useEffect(() => {
    const fetchStation = async () => {
      try {
        const res = await axiosClient.get(`/station/${teamId}/stations`);
  
        if (!res.data) throw new Error("ดึงข้อมูลไม่สำเร็จ");
        
        setStationsInfo(res.data.data);

      } catch (error) {
        console.error("Fetch stations info failed:", error);
      }
    };

    fetchStation();
  }, [teamId])

  if (!stationsInfo) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
      {stationsInfo.map(station => (
        <Station key={station.stationId} stationId={station.stationId} status={station.status} />
      ))}
    </div>
  );
}

export default AllStation;