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
        className="lg:min-w-[700px] md:min-w-[360px] sm:min-w-[360px] bg-transparent border-2 rounded-[12px] px-8 py-4 flex flex-col items-center gap-8 z-10
        border-[#9E99F2] shadow-[0_0_20px_10px_rgba(159,157,184,0.5)]">
            <div className="grid grid-cols-4 lg:gap-15 md:gap-10 sm:gap-10">
                <div className="flex justify-start">
                    <Image 
                    src={user.logo_url} 
                    alt="Team Logo" 
                    width="100"
                    height="100" />
                </div>
                <div className="col-span-3 flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-white [font-family:var(--font-anta)]">{user.username}</h4>
                    <h5 className="text-white [font-family:var(--font-anta)]">{user.team}</h5>
                    <h5 className="text-white [font-family:var(--font-anta)]">My Score: {user.score}</h5>
                    <h5 className="text-white [font-family:var(--font-anta)]">Team Score: {user.team_score}</h5>
                </div>
            </div>
    </div>
        
  );
}
