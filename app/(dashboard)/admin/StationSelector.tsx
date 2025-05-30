"use client";

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button, Image, Link } from "@heroui/react";
import ScoreInput from "./station/[stationId]/AddScore";

type Station = {
  id: number;
  name: string;
  image: string;
};

const mockStations = [
  { id: 1, name: "วิทยาศาสตร์", image: "/assets/images/stations/Science.jpg" },
  { id: 2, name: "ดงตาลแคมป์", image: "/assets/images/stations/engineering.jpg" },
  { id: 3, name: "เสวนาเปิดโลกแพทย์เกษตร การแพทย์ วิจัย และเทคโนโลยี", image: "/assets/images/stations/medicine.webp" },
  { id: 4, name: "เทคนิคสัตวแพทย์", image: "/assets/images/stations/vettech.jpg" },
  { id: 5, name: "ก็มาดิบัส", image: "/assets/images/stations/bus.jpg" },
  { id: 6, name: "one country, one clip", image: "/assets/images/stations/Humanities.jpg" },
] as Station[];

const StationColors : Record<string, string> = {
  "Station 1": "shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]", // สีฟ้า
  "Station 2": "shadow-[0_0_15px_5px_rgba(34,197,94,0.5)]", // สีเขียว
  "Station 3": "shadow-[0_0_15px_5px_rgba(249,115,22,0.5)]", // สีส้ม
  "Station 4": "shadow-[0_0_15px_5px_rgba(236,72,153,0.5)]", // สีชมพู
  "Station 5": "shadow-[0_0_15px_5px_rgba(168,85,247,0.5)]", // สีม่วง
  "Station 6": "shadow-[0_0_15px_5px_rgba(234,179,8,0.5)]", // สีเหลือง
};

export default function StationSelector() {
  return (
    <section className="w-full max-w-5xl mx-auto space-y-10 py-10">
      <h1 className="text-center text-3xl text-white [font-family:var(--font-anta)]">
        Stamp Station
      </h1>
      <div className="flex justify-center">
        <ScoreInput />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-14 justify-center items-center">
        {mockStations.map((station) => (
          <StationSelectorItem key={station.id} data={station} />
        ))}
      </div>
    </section>
  );
}

const StationSelectorItem = ({ data }: { data: Station }) => {
  const shadowClass =
    StationColors[data.name] ||
    "shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]";

  return (
    <Card
      className={`max-w-[120px] md:max-w-[140px] h-[180px] bg-transparent border border-white/20 mx-auto ${shadowClass}`}
      radius="lg"
      shadow="none"
    >
      <CardBody className="py-2 px-2 flex flex-col items-center justify-between h-full">
        <div className="flex justify-center w-full pt-2">
          <Image
            alt={data.name}
            className="object-contain h-16 w-16"
            src={data.image}
          />
        </div>
        <div className="flex-grow flex items-center">
          <h2 className="text-white text-center mt-1 text-xs md:text-sm line-clamp-2">
            {data.name}
          </h2>
        </div>
      </CardBody>
      <CardFooter className="justify-center overflow-hidden py-1 bottom-1 w-[calc(100%_-_8px)] ml-1 mb-2 z-10">
        <Button
          as={Link}
          href={`/admin/station/${data.id}`}
          className="bg-[#F182D2] hover:bg-[#F182D2]/90 text-white h-7 text-xs w-full mb-2"
        >
          ดูรายละเอียด
        </Button>
      </CardFooter>
    </Card>
  );
};
