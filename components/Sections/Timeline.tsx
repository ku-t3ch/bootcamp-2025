import React from "react";
import { Timeline as TimelineData } from "@/types/timeline";
import TimelineItem from "@/components/Timeline/TimelineItem";

const timelines: TimelineData[] = [
  {
    title: "D1 : เปิดโลกการเรียนรู้และค้นหาตัวเอง",
    date: "02 June 2025",
    circleColor: "#fff",
    lineColorTo: "#6D1CC1",
    details: [
      {
        time: "08:00 - 08:30",
        detail: "ลงทะเบียนเข้าร่วมกิจกรรม ",
      },
      {
        time: "08:30 - 08:45",
        detail: "เปิดค่าย วันที่ 1",
      },
      {
        time: "08:45 - 09:00",
        detail: "BREAK",
      },
      {
        time: "09:00 - 09:30",
        detail: "Ice Breaking",
      },
      {
        time: "09:30 - 11:30",
        detail: "TECH TOUR Part 1",
      },
      {
        time: "11:30 - 12:15",
        detail: "LUNCH",
      },
      {
        time: "12:15 - 14:15",
        detail: "TECH TOUR Part 2",
      },
      {
        time: "14:15 - 14:30",
        detail: "BREAK",
      },
      {
        time: "14:30 - 16:45",
        detail: "TECH TOUR Part 3",
      },
      {
        time: "16:45 - 17:30",
        detail: "DINNER",
      },
      {
        time: "17:30 - 19:00",
        detail: "กิจกรรมสันทนาการ",
      },
      {
        time: "19:00 - 19:15",
        detail: "สรุปกิจกรรม",
      },
    ],
  },
  {
    title: "D2 : ทดลองทำงานจริง ค้นพบคณะที่ใช่",
    date: "03 June 2025",
    circleColor: "#6D1CC1",
    details: [
      {
        time: "08:00 - 08:15",
        detail: "เปิดค่าย วันที่ 2",
      },
      {
        time: "08:15 - 09:15",
        detail: "Tracks Session",
      },
      {
        time: "09:15 - 10:30",
        detail: "WORKSHOP Part 1",
      },
      {
        time: "10:30 - 10:45",
        detail: "BREAK",
      },
      {
        time: "10:45 - 12:45",
        detail: "WORKSHOP Part 2",
      },
      {
        time: "12:45 - 13:30",
        detail: "LUNCH",
      },
      {
        time: "13:30 - 14:30",
        detail: "WORKSHOP Part 3",
      },
      {
        time: "14:30 - 14:45",
        detail: "BREAK",
      },
      {
        time: "14:45 - 16:45",
        detail: "WORKSHOP Part 4",
      },
      {
        time: "16:45 - 17:30",
        detail: "DINNER",
      },
      {
        time: "17:30 - 19:00",
        detail: "Present WORKSHOP",
      },
      {
        time: "19:00 - 19:20",
        detail: "ประกาศผล",
      },
      {
        time: "19:20 - 19:40",
        detail: "กิจกรรมปิดค่าย",
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div className="py-20 relative bg-black scroll-mt-24" id="timeline">
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30 z-0"></div>
      <h1 className="[font-family:var(--font-anta)] text-white text-6xl text-center relative">
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
