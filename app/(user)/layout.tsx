"use client";

import AuthGuard from "@/components/AuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
  return <AuthGuard mode="user-layout">{children}</AuthGuard>;
}
