"use client";

import UserAuthGuard from "./UserAuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return <UserAuthGuard>{children}</UserAuthGuard>;
}
