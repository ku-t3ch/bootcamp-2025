"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="bg-[url(/assets/images/HomeBG.gif)] h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center flex-col pb-26">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width="800"
        height="650"
      />
      <Button
        className="bg-[#4541BF] text-white"
        size="lg"
        endContent={<GoArrowRight size="24" />}
      >
        รายละเอียดค่าย
      </Button>
    </div>
  );
};

export default Home;
