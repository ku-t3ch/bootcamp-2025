import { redirect } from "next/navigation";
import TeamTable from "./TeamTable";

type Props = {
  params: Promise<{
    stationId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { stationId } = await params;

  // stationId validation
  try {
    const stationIdAsNum = parseInt(stationId);
    // station must be in range (1-6)
    if (stationIdAsNum < 1 || stationIdAsNum > 6) {
      redirect("/admin");
    }
  } catch {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen w-full mx-auto py-10 space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-center text-3xl text-white [font-family:var(--font-anta)]">
          Stamp Station {stationId}
        </h1>
      </div>
      {/* Team selector */}
      <TeamTable />
    </div>
  );
}
