"use client";

import axiosClient from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Team {
  team: string;
  score: number;
}

const teamImageMap: Record<string, string> = {
  a: "TeamPink.png",
  b: "TeamBlue.png",
  c: "TeamGreen.png",
  d: "TeamYellow.png",
  e: "TeamOrange.png",
  f: "TeamPurple.png",
};

export default function LeaderboardDetail() {
  const [leaderboard, setLeaderboard] = useState<Team[]>([]);
  const [topLength] = useState<number>(3); // Top three

  //Fetch Data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axiosClient.get("/score/leaderboard");
        const data: Team[] = res.data.data;
        const three = data
          .filter((team) => team.team.toLowerCase() !== "admin")
          .slice(0, topLength);
        setLeaderboard(three);
      } catch (error) {
        console.error("Error fetching leaderboard", error);
      }
    };

    fetchLeaderboard();
  }, [topLength]);

  return (
    <>
      <div className="text-white flex justify-between md:text-xl sm:text-md">
        <p>Rank</p>
        <p>Score</p>
      </div>

      <div className="space-y-4">
        {leaderboard.map((item) => {
          const key = item.team.trim().toLowerCase()[
            item.team.trim().length - 1
          ];
          const imageName = teamImageMap[key] || "default.png";

          return (
            <div
              key={item.team}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow text-white flex justify-between items-center"
            >
              <div className="flex items-center space-x-4 font-bold w-0 flex-1 mr-1.5">
                <Image
                  src={`/assets/images/teams/${imageName}`}
                  alt={item.team}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="break-all">{item.team.toUpperCase()}</span>
              </div>
              <div className="text-xl font-semibold">{item.score}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
