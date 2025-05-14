"use client";

import useUserStore from "@/hooks/userStore";
import axiosClient from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdminAuthGuard({ children }: Props) {
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
        } else if (res.data["data"]["role"] !== "admin") {
          // if not admin
          router.push("/");
          return;
        }

        // set user data
        const { username, team, role } = res.data["data"];
        setUser({ username, team, role });
      } catch {
        setUser(null);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setUser, router]);

  if (loading) return <></>;

  return children;
}
