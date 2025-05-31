"use client";

import { useEffect, useState } from "react";
import TeamAccordion from "./TeamAccordion";
import { Team } from "@/types/team";
import axiosClient from "@/lib/axios";

interface LeaderboardItem {
  team: string;
  score: number;
}

const teamBorderColors = {
  "Team A": "shadow-[0_0_15px_5px_rgba(168,85,247,0.5)]", // ทีม a = สีม่วง
  "Team B": "shadow-[0_0_15px_5px_rgba(34,197,94,0.5)]", // ทีม b = สีเขียว
  "Team C": "shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]", // ทีม c = สีฟ้า
  "Team D": "shadow-[0_0_15px_5px_rgba(249,115,22,0.5)]", // ทีม d = สีส้ม
  "Team E": "shadow-[0_0_15px_5px_rgba(234,179,8,0.5)]", // ทีม e = สีเหลือง
  "Team F": "shadow-[0_0_15px_5px_rgba(236,72,153,0.5)]", // ทีม f = สีชมพู
};

const teamColorMap: Record<string, string> = {
  A: "Purple",
  B: "Green",
  C: "Blue",
  D: "Orange",
  E: "Yellow",
  F: "Pink",
};

const teamNameMap: Record<string, string> = {
  A: "Healix",
  B: "Petralis",
  C: "Scienzo",
  D: "Enginium",
  E: "Humaria",
  F: "Bizora",
};

export default function TeamTable() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeams = async () => {
    try {
      setLoading(true);
      setError(null);

      const leaderboardResponse = await axiosClient.get("/score/leaderboard");
      const leaderboardData: LeaderboardItem[] = leaderboardResponse.data.data || [];

      const teamIds = ["a", "b", "c", "d", "e", "f"];
      const teamsData: Team[] = [];

      for (const teamId of teamIds) {
        const teamScoreObj = leaderboardData.find(
          (item: LeaderboardItem) =>
            item.team?.toLowerCase() === teamId.toLowerCase()
        );
        const teamScore = teamScoreObj ? teamScoreObj.score : 0;
        const response = await axiosClient.get(`/station/${teamId}/stations`);
        const data = response.data;

        const teamData: Team = {
          name: data.name || `ทีม ${teamNameMap[teamId.toUpperCase()]}`,
          identifier: `Team ${teamId.toUpperCase()}`,
          totalScore: teamScore || 0,
          logo: `/assets/images/teams/Team${
            teamColorMap[teamId.toUpperCase()] || "Purple"
          }.png`,
          members: data.members || [],
        };

        teamsData.push(teamData);
      }

      setTeams(teamsData);
    } catch (err) {
      console.error("Error fetching teams:", err);
      setError("ไม่สามารถโหลดข้อมูลทีมได้");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="w-full max-w-xl px-4 sm:px-6 lg:px-0 mx-auto relative">
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4">
          {error}
          <button onClick={fetchTeams} className="ml-4 text-sm underline">
            ลองใหม่
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 sm:space-y-7 ">
            {teams.map((team) => (
              <TeamAccordion
                key={team.identifier}
                team={team}
                borderColor={
                  teamBorderColors[
                    team.identifier as keyof typeof teamBorderColors
                  ] || ""
                }
              />
            ))}
          </div>
        </>
      )}
      {/* Bottom Spacing for Mobile */}
      <div className="h-16 sm:h-0" />
    </div>
  );
}
