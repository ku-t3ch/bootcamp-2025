"use client";

import { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { User } from "@/types/user";


type UserInfo = User & {
  logo_url: string;
  score: number;
  team_score: number;
};

const mockUser: UserInfo = {
  username: "User1",
  role: "user",
  team: "Team A",
  logo_url: "/assets/images/teams/TeamPink.png",
  score: 10,
  team_score: 20,
};

export default function UserInfo() {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    // fetch '/auth/me'
    setUser(mockUser);
  }, []);

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
          <h5>{user.team}</h5>
          <h5>My Score: {user.score}</h5>
          <h5>Team Score: {user.team_score}</h5>
      </div>
    </div>
        
  );
}
