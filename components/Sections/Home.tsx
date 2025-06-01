"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="bg-[url(/assets/images/HomeBG.gif)] h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center py-20">
      <div className="flex-grow"></div> 
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width="800"
        height="650"
      />
      <div className="flex-grow"></div> 
      <Button
        className="bg-[#4541BF] text-white"
        size="lg"
        endContent={<GoArrowRight size="24" />}
      >
        รายละเอียดค่าย
      </Button>
      <div className="flex-grow-0"></div> 
    </div>
  );
};

export default Home;
