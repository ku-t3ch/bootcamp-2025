"use client";

import AuthGuard from "@/components/AuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <AuthGuard mode="admin-layout">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/assets/images/TimelineBG.gif')] bg-cover bg-no-repeat bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
