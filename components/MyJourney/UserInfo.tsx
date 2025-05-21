"use client";

import { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { User } from "@/types/user";
import axiosClient from "@/lib/axios";


type UserInfo = User & {
  logo_url: string;
  score: number;
  teamScore: number;
};

const teamData = {
  "a": { name: "Pink" },
  "b": { name: "Orange" },
  "c": { name: "Yellow" },
  "d": { name: "Green" },
  "e": { name: "Blue" },
  "f": { name: "Purple" },
};


export default function UserInfo({setTeamId}: {setTeamId: React.Dispatch<React.SetStateAction<string | null>> }) {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosClient.get('/auth/me');
        if (res.data) {
          const data = res.data["data"];
          const teamKey = data.team as keyof typeof teamData;
          data["logo_url"] = `/assets/images/teams/Team${teamData[teamKey].name}.png`;
          setUser(data);
          setTeamId(res.data["data"].team);
        }
      } catch (error) {
        setUser(null);
        console.error("Fetch user info failed:", error);
      }
    }
    fetchUser();
  }, [setTeamId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div 
      className="w-full bg-transparent border-2 rounded-[12px] px-8 py-4 flex items-center z-10 gap-4 border-[#9E99F2] shadow-[0_0_20px_10px_rgba(159,157,184,0.5)]"
    >
      <Image 
        src={user.logo_url}   
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
