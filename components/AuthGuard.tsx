"use client";

import useUserStore from "@/hooks/userStore";
import axiosClient from "@/lib/axios";
import { User } from "@/types/user";
import { Spinner } from "@heroui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
  mode: "user-layout" | "admin-layout";
};

export default function AuthGuard(props: Props) {
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosClient.get("/auth/me");
        // On fail
        if (!res.data) {
          throw new Error("เกิดข้อผิดพลาด");
        }

        const userData = res.data["data"] as User | null;

        if (userData) {
          setUser(userData);
          // Handle 'admin' layout
          if (props.mode === "admin-layout") {
            if (userData.role !== "admin") {
              router.push("/");
              return;
            }
          }
        } else {
          throw new Error("เกิดข้อผิดพลาด");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setUser(null);
          router.push("/login");
        } else {
          toast.error("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [setUser, props.mode, router]);

  if (isLoading) {
    return (
      <div
        id="auth-guard-loader"
        className="h-screen max-h-screen w-full flex flex-col gap-4 justify-center items-center bg-bootcamp-primary"
      >
        <Spinner variant="gradient" color="secondary" />
        <div>
          <h1 className="text-white text-lg">กำลังโหลด</h1>
        </div>
      </div>
    );
  }

  return props.children;
}
