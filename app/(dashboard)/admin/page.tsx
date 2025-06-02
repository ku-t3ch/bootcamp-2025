"use client";

import { Button, Link } from "@heroui/react";
import StationSelector from "./StationSelector";
import { MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="px-4 md:px-0 py-6 md:py-0">
        <StationSelector />
      </div>
      <section className="space-y-2 pb-6">
        <h1 className="text-center text-3xl text-white [font-family:var(--font-anta)]">
          Administration
        </h1>
        <div className="flex justify-center">
          <Button
            as={Link}
            href="/admin/reviews"
            color="primary"
            startContent={<MessageCircle size={20} />}
          >
            ความคิดเห็น
          </Button>
        </div>
      </section>
    </div>
  );
}
