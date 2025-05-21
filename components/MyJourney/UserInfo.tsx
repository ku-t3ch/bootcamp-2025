"use client";

import { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { User } from "@/types/user";
import useUserStore from "@/hooks/userStore";


type UserInfo = User & {
  logo_url: string;
  score: number;
  teamScore: number;
};


export default function UserInfo({setTeamId}: {setTeamId: React.Dispatch<React.SetStateAction<string | null>> }) {
  const { user } = useUserStore();

  useEffect(() => {
    setTeamId(user?.team || null)
  }, [setTeamId]);  

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div 
      className="w-full bg-transparent border-2 rounded-[12px] px-8 py-4 flex items-center z-10 gap-4 border-[#9E99F2] shadow-[0_0_20px_10px_rgba(159,157,184,0.5)]"
    >
      <Image 
        src={user.logoUrl}   
        alt="Team Logo" 
        width="100"
        height="100" 
      />
      <div className="flex flex-col text-white [font-family:var(--font-anta)]">
          <h4 className="font-bold text-lg">{user.username}</h4>
          <h5>Team {user.team.toUpperCase()}</h5>
          <h5>My Score: {user.score}</h5>
          <h5>Team Score: {user.teamScore}</h5>
      </div>
    </div>
        
  );
}
