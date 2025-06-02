"use client";

import { mockStations } from "@/lib/station";
import { Review } from "@/types/review";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/react";

type Props = {
  reviews: Review[];
};

export default function MyReviewGrid({ reviews }: Props) {
  if (reviews.length === 0) {
    return (
      <div className="dark border w-full max-w-[340px] py-4 backdrop-blur-sm rounded-lg">
        <p className="text-zinc-500 text-lg text-center">ไม่พบข้อมูล</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-4 dark">
      {reviews.map((r) => (
        <Card
          key={r.id}
          className="max-w-[340px] border-zinc-800 border"
          isBlurred
        >
          <CardHeader className="justify-between">
            <div className="grid gap-4">
              <Avatar
                isBordered
                radius="full"
                size="lg"
                src={mockStations[r.stationId - 1].image}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-base font-semibold leading-none text-default-600 break-words">
                  {mockStations[r.stationId - 1].name}
                </h4>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>{r.comment}</p>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">
                {"⭐".repeat(r.rating)}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
