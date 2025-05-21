import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row items-center justify-center py-20 relative px-10 gap-10" id="bootcamp-info">
      <div className="absolute bg-[url(/assets/images/AboutBG.png)] inset-0 bg-cover bg-center"></div>
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width="800"
        height="650"
        className="z-10 max-w-[400px]"
      />
      <div className="text-white space-y-5 z-10">
        <h1 className="space-x-2 text-2xl lg:text-4xl">
          <span className="text-[#FFDCC9] [font-family:var(--font-anta)]">
            BOOTCAMP
          </span>
          <span className="font-medium">คืออะไร?</span>
        </h1>
        <p className="font-medium text-lg lg:text-xl max-w-[700px]">
          เป็นกิจกรรมที่จัดขึ้นเพื่อเสริมสร้างและพัฒนาทักษะทางด้านเทคโนโลยีให้แก่นักเรียนระดับชั้นมัธยมศึกษา
          พร้อมทั้งเปิดโอกาส
          ให้นักเรียนได้มีความรู้ความเข้าใจในพื้นฐานทางด้านการเขียนโปรแกรมมากขึ้นรวมถึงแนะแนวทางในการศึกษาต่อทางด้านเทคโนโลยีภายในอนาคตให้แก่นักเรียน
        </p>
      </div>
    </div>
  );
};

export default About;
