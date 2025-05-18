"use client";

import TeamAccordion from "./TeamAccordion";
import { Team } from "@/types/team";

export const mockTeam = [
  {
    name: "กอไก่",
    identifier: "Team A",
    totalScore: 0,
    logo: "/assets/images/teams/TeamBlue.png",
    members: Array.from({ length: 10 }, (_, i) => ({
      name: "A" + i,
      score: 0,
    })),
  },
  {
    name: "ขอไข่",
    identifier: "Team B",
    totalScore: 0,
    logo: "/assets/images/teams/TeamOrange.png",
    members: Array.from({ length: 10 }, (_, i) => ({
      name: "B" + i,
      score: 0,
    })),
  },
  {
    name: "abc def",
    identifier: "Team C",
    totalScore: 0,
    logo: "/assets/images/teams/TeamYellow.png",
    members: Array.from({ length: 10 }, (_, i) => ({
      name: "B" + i,
      score: 0,
    })),
  },
] as Team[];

export default function TeamTable() {
  return (
    <div className="max-w-xl px-4 lg:px-0 mx-auto">
      <div className="space-y-4">
        {mockTeam.map((team) => (
          <TeamAccordion key={team.identifier} team={team} />
        ))}
      </div>
    </div>
  );
}
