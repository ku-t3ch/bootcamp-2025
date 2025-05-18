import React from "react";
import { Timeline as TimelineData } from "@/types/timeline";
import TimelineItem from "@/components/Timeline/TimelineItem";

const timelines: TimelineData[] = [
  {
    title: "Workshop (I)",
    date: "02 June 2025",
    circleColor: "#fff",
    lineColorTo: "#6D1CC1",
    details: [
      {
        time: "07:00 - 07:30",
        detail: "ลงทะเบียนเข้าร่วมกิจกรรม ",
      },
      {
        time: "07:30 - 08:15",
        detail: "พิธีเปิด",
      },
      {
        time: "08:30 - 09:00",
        detail: "กิจกรรมบรรยายความเชื่อมโยงระหว่างคณะและเทคโนโลยี",
      },
      {
        time: "09:00 - 11:00",
        detail: " เริ่มกิจกรรมมหกรรม “Tech Tour”",
      },
      {
        time: "11:00 - 11:45",
        detail: "พักรับประทานอาหารกลางวัน",
      },
      {
        time: "11:45 - 13:45",
        detail: "มหกรรม “Tech Tour” (ต่อ) ",
      },
      {
        time: "13:45 - 14:00",
        detail: "พักรับประทานอาหารว่าง",
      },
      {
        time: "14:00 - 16:15",
        detail: "มหกรรม “Tech Tour” (ต่อ)",
      },
      {
        time: "16:15 - 17:00",
        detail: "พักรับประทานอาหารเย็น",
      },
      {
        time: "17:00 - 20:00",
        detail: "กิจกรรมนัทนาการ",
      },
    ],
  },
  {
    title: "Workshop (II)",
    date: "03 June 2025",
    circleColor: "#6D1CC1",
    details: [
      {
        time: "07:30-07:45",
        detail: "แจ้งรายละเอียดแผนการของวัน",
      },
      {
        time: "07:45 - 10.30",
        detail: "",
      },
      {
        time: "10:30 - 10:45",
        detail: "พักรับประทานอาหารว่าง",
      },
      {
        time: "10:45 - 12:45",
        detail: "",
      },
      {
        time: "12:45 - 13:30",
        detail: "พักรับประทานอาหารกลางวัน",
      },
      {
        time: "13:30 - 16:45",
        detail: "ลงมือพัฒนาโปรเจค ",
      },
      {
        time: "14:30 - 14:45",
        detail: "พักรับประทานว่าง",
      },
      {
        time: "16:45 - 17:30",
        detail: "พักรับประทานอาหารเย็น",
      },
      {
        time: "17:30 - 19:00",
        detail: "ช่วงการนำเสนอผลงาน",
      },
      {
        time: "19:00 - 19:10",
        detail: "รอคณะกรรมตัดสินผลการแข่งขัน",
      },
      {
        time: "19:10 - 19:20",
        detail: "ประกาศผลการแข่งขัน",
      },
      {
        time: "19:20 - 19:40",
        detail: "พิธีปิด",
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div className="py-20 relative bg-black">
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30"></div>
      <h1 className="[font-family:var(--font-anta)] text-white text-6xl text-center">
        Timeline
      </h1>
      <div className="h-full mt-10">
        {timelines.map((timeline, i) => (
          <TimelineItem
            {...timeline}
            key={timeline.title}
            ended={i == timelines.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
