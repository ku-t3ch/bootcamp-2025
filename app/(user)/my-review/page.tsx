"use client";

import { Review } from "@/types/review";
import { useEffect, useState } from "react";
import { fetchUserReview } from "./client.action";
import MyReviewGrid from "@/components/MyReview/MyReviewGrid";
import BackButton from "@/app/(dashboard)/admin/station/[stationId]/BackButton";

export default function Page() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserReview();
      setReviews(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center relative py-8 sm:px-4">
      <div className="absolute bg-[url(/assets/images/JourneyBG.gif)] inset-0 bg-cover bg-center opacity-20"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-4">
        <BackButton />
        <h1 className="text-5xl sm:text-6xl [font-family:var(--font-anta)] text-white z-12">
          My Review
        </h1>
        <MyReviewGrid reviews={reviews} />
      </div>
    </div>
  );
}
