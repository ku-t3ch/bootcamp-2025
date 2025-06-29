"use client";

import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <HeroUIProvider>
      {children}
      <Toaster
        richColors
        style={{
          fontFamily: "Kanit, sans-serif",
        }}
      />
    </HeroUIProvider>
  );
}
