"use client";

import axiosClient from "@/lib/axios";

export const fetchUserReview = async () => {
  try {
    const res = await axiosClient.get("/reviews/username");
    if (!res.data["data"]) {
      throw new Error("Failed to query user review");
    }

    return res.data["data"]["reviews"];
  } catch (e) {
    console.error(e);
    return [];
  }
};
