"use client";

import useUserStore from "@/hooks/userStore";
import axiosClient from "@/lib/axios";
import { teamColorData } from "@/lib/team";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/MyJourney/Loading";

type Props = {
  children: React.ReactNode;
};

export default function UserAuthGuard({ children }: Props) {
  const { setUser } = useUserStore();
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosClient.get("/auth/me");
        if (!res.data || !res.data["data"]) {
          setUser(null);
          router.push("/login");
          return;
        }
        // set user data
        const { username, team, role, score, teamScore } = res.data["data"];
        const teamKey = team as keyof typeof teamColorData;
        const logoUrl = `/assets/images/teams/Team${teamColorData[teamKey].name}.png`;
        setUser({ username, team, role, score, teamScore, logoUrl });
      } catch {
        setUser(null);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setUser, router]);

  if (loading) return <><LoadingScreen /></>;

  return children;
}
