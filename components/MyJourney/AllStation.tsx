"use client";
import { useEffect, useState } from "react";
import Station from "./Station"
import axiosClient from "@/lib/axios";

type StationInfo = {
  station: string;
  status: boolean;
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
    return <span className="w-12 h-12 mt-12 border-4 border-white border-b-Indigo rounded-full inline-block box-border animate-spin"></span>
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
      {stationsInfo.map(station => (
        <Station key={station.station} stationId={station.station} status={station.status} />
      ))}
    </div>
  );
}

export default AllStation;