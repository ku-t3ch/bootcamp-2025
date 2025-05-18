"use client";
import React, { useState } from "react";
import { Timeline } from "@/types/timeline";
import { HiChevronDown } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

type TimelineItemProps = { ended: boolean } & Timeline;

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  content,
  date: time,
  circleColor = "#3b82f6",
  lineColorTo = "#3b82f6",
  details,
  ended,
}) => {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const detailsVariants = {
    initial: { height: 0 },
    enter: { height: "auto" },
    exit: { height: 0 },
  };

  return (
    <div className="start-1/2 relative w-1/2">
      <div className="flex text-white">
        <h1 className="text-xl xl:text-[32px] z-50 absolute right-40 md:right-64 xl:right-96 w-full overflow-x-hidden">
          {time}
        </h1>
        <div className="">
          <Circle color={circleColor} />
          {!ended && <Line colorFrom={circleColor} colorTo={lineColorTo} />}
        </div>
        <div className="font-medium pl-5 xl:pl-20 w-full pb-10">
          <div className="text-white text-lg md:text-xl xl:text-2xl">
            {title}
          </div>
          <div>
            <h1 className="text-lg xl:text-h2">{content}</h1>
            {details && (
              <>
                <div
                  className="flex cursor-pointer space-x-1 select-none text-[#A599F2]"
                  onClick={handleShow}
                >
                  <HiChevronDown
                    className={`${isShow && "rotate-180"} transition-transform`}
                    size="24"
                  />
                  <div>แสดงรายละเอียด</div>
                </div>
                <AnimatePresence>
                  {isShow && (
                    <motion.ul
                      className="list-disc marker:text-gray-500 pl-5 pr-2 text-base text-gray-500 xl:text-xl font-normal space-y-4 overflow-y-hidden max-w-[min(100%,350px)]"
                      variants={detailsVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {details.map((detail) => (
                        <li
                          key={detail.detail + detail.time}
                          className="text-xs md:text-base first:mt-2"
                        >
                          {detail.time} {detail.detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

interface CircleProps {
  color: string;
}

const Circle: React.FC<CircleProps> = ({ color }) => {
  return (
    <div
      className="size-4 -ms-1.5 translate-y-1 rounded-full bg-blue-500"
      style={{ backgroundColor: color }}
    ></div>
  );
};

interface LineProps {
  colorFrom: string;
  colorTo: string;
}

const Line: React.FC<LineProps> = ({ colorFrom, colorTo }) => {
  return (
    <div
      className="w-1 h-full bg-blue-500"
      style={{
        background: `linear-gradient(${colorFrom}, ${colorTo})`,
      }}
    ></div>
  );
};
