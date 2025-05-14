"use client";

import AdminAuthGuard from "./AdminAuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return <AdminAuthGuard>{children}</AdminAuthGuard>;
}
