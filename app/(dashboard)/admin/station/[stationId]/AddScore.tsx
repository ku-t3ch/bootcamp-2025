"use client";

import { useState } from "react";
import { Button, Input } from "@heroui/react";
import axiosClient from "@/lib/axios";
import { useParams } from "next/navigation";
import axios from "axios";

export default function ScoreInput() {
  const params = useParams();
  const stationId = params.stationId;

  const [username, setUsername] = useState("");
  const [score, setScore] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const increaseScore = () => setScore((s) => (s < 5 ? s + 1 : s));
  const decreaseScore = () => setScore((s) => (s > 1 ? s - 1 : s));

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError("กรุณากรอก Username");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await axiosClient.post("/score/add", {
        username: username.trim(),
        score: score,
        stationId: stationId,
      });

      setSuccess(`เพิ่มคะแนนให้ ${username} สำเร็จแล้ว (${score} คะแนน)`);
      setUsername("");
      setScore(1);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data?.message || "ไม่สามารถเพิ่มคะแนนได้");
        } else if (error.request) {
          setError("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
        } else {
          setError("เกิดข้อผิดพลาดในการสร้างคำขอ");
        }
      } else {
        setError("เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/50 border border-white/20 rounded-xl w-full max-w-2xl mx-auto p-6 space-y-3 shadow-[0_0_40px_10px_rgba(255,0,255,0.3)]">
      <div className="text-center text-white font-bold text-sm sm:text-base">
        การเพิ่มคะแนน
      </div>

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}
      {success && (
        <div className="text-green-400 text-sm text-center">{success}</div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Username input */}
        <div className="w-full sm:flex-grow">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-black bg-white/90 border-0 rounded-lg w-full text-sm sm:text-base"
            disabled={isSubmitting}
          />
        </div>

        {/* Score control */}
        <div className="flex items-center bg-white rounded-full h-10 w-[120px] mt-2 sm:mt-0">
          <button
            onClick={decreaseScore}
            className={`flex items-center justify-center h-full px-3 font-bold text-xl ${
              score <= 1 || isSubmitting ? "text-gray-400" : "text-gray-700"
            }`}
            aria-label="ลดคะแนน"
            disabled={score <= 1 || isSubmitting}
          >
            −
          </button>
          <div className="flex-grow flex items-center justify-center">
            <span className="text-black font-medium text-lg">{score}</span>
          </div>
          <button
            onClick={increaseScore}
            className={`flex items-center justify-center h-full px-3 font-bold text-xl ${
              score >= 5 || isSubmitting ? "text-gray-400" : "text-gray-700"
            }`}
            aria-label="เพิ่มคะแนน"
            disabled={score >= 5 || isSubmitting}
          >
            +
          </button>
        </div>
      </div>

      {/* Submit button */}
      <Button
        onPress={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#F182D2] hover:bg-[#F182D2]/90 disabled:bg-[#F182D2]/50 text-white h-10 sm:h-8 text-sm sm:text-base"
      >
        {isSubmitting ? "กำลังส่งข้อมูล..." : "Submit"}
      </Button>
    </div>
  );
}
