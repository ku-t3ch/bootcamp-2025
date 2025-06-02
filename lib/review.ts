"use server";

import { Review } from "@/types/review";

export async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/reviews");

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const json = await res.json();
    const reviews: Review[] = json.data.reviews;

    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
