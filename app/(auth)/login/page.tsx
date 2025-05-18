"use client";

import { Image } from "@heroui/react";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <main className="w-full h-screen bg-bootcamp-primary flex justify-center items-center">
      <div className="w-full max-w-3xl grid grid-cols-2 rounded-lg border border-[#D9B6A3] text-white overflow-hidden mx-4 md:mx-0">
        <div className="w-full p-12 flex flex-col justify-center gap-y-4">
          <h1 className="text-3xl text-left [font-family:var(--font-anta)]">
            Login
          </h1>
          <LoginForm />
        </div>
        {/* Side Logo */}
        <div className="pb-6 bg-[url(/assets/images/HomeBG.gif)] bg-center">
          <Image
            src={"/assets/images/logo.png"}
            className="object-contain"
            alt="Logo"
          />
        </div>
      </div>
    </main>
  );
}
