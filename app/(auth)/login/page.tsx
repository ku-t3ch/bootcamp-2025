"use client";

import { Image } from "@heroui/react";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-bootcamp-primary flex justify-center items-center py-8">
      <div className="md:hidden w-85 mx-auto relative border border-[#D9B6A3] rounded-lg overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-[url(/assets/images/HomeBG.gif)] bg-cover bg-center h-90 ">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative pt-8 pb-2 flex flex-col items-center justify-center mt-15">
          <Image
            src={"/assets/images/logo.png"}
            className="object-contain h-40 w-auto"
            alt="Logo"
          />
        </div>

        <div className="relative w-full px-8 pb-8 flex flex-col items-center">
          <h1 className="text-2xl text-center text-white mb-6 [font-family:var(--font-anta)]">
            Login
          </h1>
          <LoginForm />
        </div>
      </div>

      <div className="hidden md:grid w-full max-w-3xl grid-cols-2 rounded-lg border border-[#D9B6A3] text-white overflow-hidden mx-4 md:mx-0">
        <div className="w-full p-12 flex flex-col justify-center gap-y-4">
          <h1 className="text-3xl text-left [font-family:var(--font-anta)]">
            Login
          </h1>
          <LoginForm />
        </div>

        <div className="pb-6 bg-[url(/assets/images/HomeBG.gif)] bg-cover bg-center flex items-center justify-center">
          <Image
            src={"/assets/images/logo.png"}
            className="object-contain h-auto max-h-[400px] w-auto"
            alt="Logo"
          />
        </div>
      </div>
    </main>
  );
}
