import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="scroll-mt-24 bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row items-center justify-center py-20 relative px-10 gap-10" id="bootcamp-info">
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
          โครงการบูทแคมป์ได้เริ่มขึ้นเพื่อเปิดโลกทัศน์และสร้างความเข้าใจเกี่ยวกับการศึกษาในระดับอุดมศึกษาในสาขาวิชาแก่ผู้เข้าร่วมโครงการโดยมุ่งเน้นให้ผู้เข้าร่วมได้สร้างเสริมประสบการณ์และสัมผัสบรรยากาศการเรียนรู้จริง ในสภาพแวดล้อมของมหาวิทยาลัยพร้อมทั้งบูรณาการองค์ความรู้จากหลากหลายสาขาวิชาเข้ากับมุมมองเชิงเทคโนโลยี
        </p>
      </div>
    </div>
  );
};

export default About;
