"use client";

import AdminAuthGuard from "./AdminAuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <AdminAuthGuard>
      <div
        id="background"
        className="bg-[url('/assets/images/TimelineBG.gif')] bg-cover bg-no-repeat bg-center bg-fixed"
      >
        {children}
      </div>
    </AdminAuthGuard>
  );
}
