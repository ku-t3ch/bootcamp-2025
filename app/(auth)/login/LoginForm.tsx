"use client";

import useUserStore from "@/hooks/userStore";
import axiosClient from "@/lib/axios";
import LoginSchema, { LoginSchemaInput } from "@/schema/auth.schema";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const { push } = useRouter();

  const form = useForm<LoginSchemaInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { setUser } = useUserStore();

  const onSubmit = async (values: LoginSchemaInput) => {
    // Toast
    toast.loading("กำลังเข้าสู่ระบบ", {
      id: "form",
      description: "กรุณารอสักครู่",
    });

    // Login
    try {
      const res = await axiosClient.post("/auth/login", values);

      if (!res.data) throw new Error("เข้าสู่ระบบไม่สำเร็จ");

      // Set user state
      setUser(res.data.data);

      // Success
      toast.success("เข้าสู่ระบบสำเร็จ", {
        id: "form",
        description: "กำลังเปลี่ยนเส้นทาง",
      });

      // If admin then redirect to admin dashboard
      if (res.data.data.role === "admin") {
        push("/admin");
      } else {
        push("/my-journey");
      }
    } catch (e) {
      // Error
      toast.error("เข้าสู่ระบบไม่สำเร็จ", {
        id: "form",
        description: e instanceof Error ? e.message : "เกิดข้อผิดพลาด",
      });
      console.error(e);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Username */}
      <Controller
        name="username"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label="ชื่อผู้ใช้"
            variant="flat"
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      {/* Password */}
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type="password"
            label="รหัสผ่าน"
            variant="flat"
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      {/* Login */}
      <div className="mx-auto w-[150px]">
        <Button type="submit" className="w-full btn-primary">
          เข้าสู่ระบบ
        </Button>
      </div>
    </form>
  );
}
