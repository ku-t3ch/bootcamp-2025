import { getReviews } from "@/lib/review";
import AdminReviewTable from "./AdminReviewTable";
import BackButton from "../station/[stationId]/BackButton";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Page() {
  const reviews = await getReviews();

  return (
    <div className="w-full h-full flex flex-col py-8 px-4">
      <div className="md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full mx-auto space-y-4">
        <div className="text-white">
          <BackButton />
          <h1 className="text-3xl text-center">ความคิดเห็นทั้งหมด</h1>
        </div>
        <div id="review-table-wrapper" className="dark">
          <AdminReviewTable reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
