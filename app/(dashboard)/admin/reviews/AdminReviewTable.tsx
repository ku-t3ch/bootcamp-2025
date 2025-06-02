"use client";

import { mockStations } from "@/lib/station";
import { Review } from "@/types/review";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  Avatar,
} from "@heroui/react";
import { useMemo, useState } from "react";

type Props = {
  reviews: Review[];
};

export default function AdminReviewTable({ reviews }: Props) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(reviews.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return reviews.slice(start, end);
  }, [page, reviews]);

  return (
    <Table
      aria-label="Review table"
      selectionMode="single"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader>
        <TableColumn>Username</TableColumn>
        <TableColumn>ฐาน</TableColumn>
        <TableColumn>ความพึงพอใจ</TableColumn>
        <TableColumn>ความคิดเห็น</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items.map((r) => (
          <TableRow key={r.id} className="text-white">
            <TableCell>
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">
                  {r.member.username}
                </p>
                <p className="text-bold text-sm capitalize text-default-400">
                  Team {r.member.team.name}
                </p>
              </div>
            </TableCell>
            {/* <TableCell>{mockStations[r.stationId - 1].name}</TableCell> */}
            <TableCell>
              <Avatar src={mockStations[r.stationId - 1].image} />
            </TableCell>
            <TableCell>{"⭐".repeat(r.rating)}</TableCell>
            <TableCell>
              {r.comment ? r.comment : <span className="text-gray-500">-</span>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
