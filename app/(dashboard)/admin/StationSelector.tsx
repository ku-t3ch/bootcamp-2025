"use client";

import useUserStore from "@/hooks/userStore";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/react";
import { useRouter } from "next/navigation";

// TODO: move type to types folder
type Station = {
  id: number;
  name: string;
};

// Mock data
const mockStations = [
  { id: 1, name: "สถานี A" },
  { id: 2, name: "สถานี B" },
  { id: 3, name: "สถานี C" },
  { id: 4, name: "สถานี D" },
  { id: 5, name: "สถานี E" },
  { id: 6, name: "สถานี F" },
] as Station[];

export default function StationSelector() {
  const { user } = useUserStore();

  return (
    <section className="w-full">
      <h1 className="text-center text-3xl">เลือกสถานีที่คุณประจำอยู่</h1>
      <p>{user?.username}</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {mockStations.map((station) => (
          <StationSelectorItem key={station.id} data={station} />
        ))}
      </div>
    </section>
  );
}

const StationSelectorItem = ({ data }: { data: Station }) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/admin/station/${data.id}`);
  };

  return (
    <Card
      isFooterBlurred
      isPressable
      className="border-none"
      radius="lg"
      onPress={handleClick}
    >
      <CardBody>
        <Image
          alt={data.name}
          className="object-cover"
          height={200}
          src="https://github.com/ku-t3ch.png"
          width={200}
        />
      </CardBody>
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-sm light:text-white/80 dark:text-zinc-800">
          {data.name}
        </p>
      </CardFooter>
    </Card>
  );
};
