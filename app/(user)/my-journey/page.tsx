"use client";

import UserInfo from "@/components/MyJourney/UserInfo";
import AllStation from "@/components/MyJourney/AllStation";
import LoadingScreen from "@/components/MyJourney/Loading";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function MyJourney() {
  const [teamId, setTeamId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center relative py-8 sm:px-4">
      <div className="absolute bg-[url(/assets/images/JourneyBG.gif)] inset-0 bg-cover bg-center opacity-20"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-12">
        <h1 className="text-5xl sm:text-6xl [font-family:var(--font-anta)] text-white z-12">My Journey</h1>
        <div className="w-full max-w-2xl px-4 flex flex-col items-center gap-4">

          <UserInfo setTeamId={setTeamId}/>;
          
          {teamId ?
            <AllStation teamId={teamId} /> :
            <LoadingScreen />
          }

        </div>
      </div>
    </div>
  );
  
}
