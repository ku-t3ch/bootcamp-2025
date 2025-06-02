import { redirect } from "next/navigation";
import TeamTable from "./TeamTable";
import BackButton from "./BackButton";
import { mockStations } from "@/lib/station";

type Props = {
  params: Promise<{
    stationId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { stationId } = await params;

  try {
    const stationIdAsNum = parseInt(stationId);
    if (stationIdAsNum < 1 || stationIdAsNum > 6) {
      redirect("/admin");
    }
  } catch {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen w-full mx-auto py-10 space-y-10">
      <div className="relative max-w-xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-center">
          <div className="absolute top-0 left-4">
            <BackButton />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl text-white [font-family:var(--font-anta)]">
              Stamp Station
            </h1>
            <div className="mx-auto">
              <p className="text-purple-500 text-sm">
                {mockStations[Number(stationId) - 1].name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team selector */}
      <TeamTable />
    </div>
  );
}
