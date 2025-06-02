"use client";

import { useEffect } from "react";
import { Button, Image, Link } from "@heroui/react";
import useUserStore from "@/hooks/userStore";

const teamImageMap: Record<string, Record<string, string>> = {
  a: { name: "Healix", image: "TeamPurple.png" },
  b: { name: "Petralis", image: "TeamGreen.png" },
  c: { name: "Scienzo", image: "TeamBlue.png" },
  d: { name: "Enginium", image: "TeamOrange.png" },
  e: { name: "Humaria", image: "TeamYellow.png" },
  f: { name: "Bizora", image: "TeamPink.png" },
};

export default function UserInfo({
  setTeamId,
}: {
  setTeamId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const { user } = useUserStore();

  useEffect(() => {
    setTeamId(user?.team || null);
  }, [setTeamId, user?.team]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full bg-transparent border-2 rounded-[12px] px-8 py-4 flex items-center z-10 gap-4 border-[#9E99F2] shadow-[0_0_20px_10px_rgba(159,157,184,0.5)]">
      <Image
        src={`/assets/images/teams/${teamImageMap[user.team].image}`}
        alt="Team Logo"
        width="100"
        height="100"
      />
      <div className="flex flex-col gap-2 text-white">
        <div className="[font-family:var(--font-anta)]">
          <h4 className="font-bold text-lg">{user.username}</h4>
          <h5>Team: {teamImageMap[user.team].name}</h5>
          <h5>My Score: {user.score}</h5>
          <h5>Team Score: {user.teamScore}</h5>
        </div>
        <Button
          as={Link}
          href="/my-review"
          size="sm"
          variant="shadow"
          color="primary"
        >
          ความคิดเห็น
        </Button>
      </div>
    </div>
  );
}
