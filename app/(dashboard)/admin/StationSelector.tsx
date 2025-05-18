"use client";

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button, Image, Link } from "@heroui/react";

// TODO: move type to types folder
type Station = {
  id: number;
  name: string;
  image: string;
};

// Mock data
const mockStations = [
  { id: 1, name: "สถานี A", image: "/assets/images/teams/TeamBlue.png" },
  { id: 2, name: "สถานี B", image: "/assets/images/teams/TeamGreen.png" },
  { id: 3, name: "สถานี C", image: "/assets/images/teams/TeamOrange.png" },
  { id: 4, name: "สถานี D", image: "/assets/images/teams/TeamPink.png" },
  { id: 5, name: "สถานี E", image: "/assets/images/teams/TeamPurple.png" },
  { id: 6, name: "สถานี F", image: "/assets/images/teams/TeamYellow.png" },
] as Station[];

export default function StationSelector() {
  return (
    <section className="w-full space-y-10">
      <h1 className="text-center text-3xl text-white [font-family:var(--font-anta)]">
        Stamp Station
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {mockStations.map((station) => (
          <StationSelectorItem key={station.id} data={station} />
        ))}
      </div>
    </section>
  );
}

const StationSelectorItem = ({ data }: { data: Station }) => {
  return (
    <Card
      isBlurred
      className="border-none bg-white/0 max-w-[180px] lg:max-w-[200px]"
      radius="lg"
      shadow="sm"
    >
      <CardBody>
        <Image
          alt={data.name}
          className="object-contain w-full"
          src={data.image}
        />
        <h2 className="text-white text-center">{data.name}</h2>
      </CardBody>
      <CardFooter className="justify-center overflow-hidden py-1 bottom-1 w-[calc(100%_-_8px)] ml-1 mb-2 z-10">
        <Button
          as={Link}
          href={`/admin/station/${data.id}`}
          className="bg-[#F182D2] hover:bg-[#F182D2]/90 text-white"
        >
          ดูรายละเอียด
        </Button>
      </CardFooter>
    </Card>
  );
};
