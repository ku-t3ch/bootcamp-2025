"use client";
import { Team } from "@/types/team";
import { Image } from "@heroui/react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axiosClient from "@/lib/axios"; 

type Props = {
  team: Team;
  borderColor?: string;
};

export default function TeamAccordion(props: Props) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const params = useParams();
  const stationId = params.stationId;

  const getButtonGradient = () => {
    switch (props.team.identifier) {
      case "Team A":
        return "bg-[#B597AD]";
      case "Team B":
        return "bg-[#82B9CA]";
      case "Team C":
        return "bg-[#85BB86]";
      case "Team D":
        return "bg-[#B5AA78]";
      case "Team E":
        return "bg-[#C8A593]";
      case "Team F":
        return "bg-[#BB8EC9]";
      default:
        return "";
    }
  };

  const getTeamId = () => {
    return props.team.identifier.split(' ')[1].toLowerCase();
  };
  const checkCurrentStatus = async () => {
    setIsCheckingStatus(true);
    try {
      const teamId = getTeamId();   
      const response = await axiosClient.get(
        `/station/${teamId}/${stationId}/status`
      );
      if (response.data.data && response.data.data.status === 1) {
        setIsUnlocked(true);
      } else {
        setIsUnlocked(false);
      }
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handleUnlock = async () => {
    setIsLoading(true);

    try {
      const teamId = getTeamId();
      const response = await axiosClient.post(
        `/station/${teamId}/${stationId}/status`,
        { status: 1 }
      );
      if (response.data.success) {
        setIsUnlocked(true);
        setIsLoading(false);
        await checkCurrentStatus();
      } else {
        throw new Error(response.data.message || "ไม่สามารถปลดล็อกได้");
      }
    } catch (error) {
      setIsLoading(false);
      alert("ไม่สามารถปลดล็อกสถานีได้ กรุณาลองใหม่อีกครั้ง");
    }
  };

  useEffect(() => {
    if (stationId && props.team.identifier) {
      checkCurrentStatus();
    }
  }, [props.team.identifier, stationId]);

  return (
    <div className={`${props.borderColor || ""} rounded-md p-3 sm:p-4`}>
      <div className="flex flex-col">
        {/* Team Info */}
        <div className="flex items-center">
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]">
              <Image alt="Team Logo" src={props.team.logo} />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-white text-sm sm:text-base truncate">
                {props.team.name} ({props.team.identifier})
              </div>
            </div>
          </div>
          <div className="text-lg sm:text-xl text-white font-bold ml-2 sm:mr-4">
            {props.team.totalScore}
          </div>
        </div>

        {/* Unlock Button*/}
        {!isUnlocked && !isCheckingStatus && (
          <div className="mt-2 sm:mt-3 min-h-[32px]">
            <button
              onClick={handleUnlock}
              disabled={isLoading}
              className={`bg-gradient-to-r ${getButtonGradient()} w-full h-7 text-white text-xs font-medium sm:text-sm py-1.5 rounded text-center`}
              aria-label="ปลดล็อก"
            >
              {isLoading ? "กำลังดำเนินการ..." : "ปลดล็อก"}
            </button>
          </div>
        )}
        
        {/* แสดงตัวโหลดระหว่างตรวจสอบสถานะ */}
        {isCheckingStatus && (
          <div className="mt-2 sm:mt-3 flex justify-center min-h-[32px]">
            <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}