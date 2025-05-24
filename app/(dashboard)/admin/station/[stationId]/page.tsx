import { redirect } from "next/navigation";
import TeamTable from "./TeamTable";
import BackButton from "./BackButton";

type Props = {
  params: {
    stationId: string;
  };
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
          <div className="absolute left-4">
            <BackButton />
          </div>
          <h1 className="text-center text-2xl text-white [font-family:var(--font-anta)]">
            Stamp Station {stationId}
          </h1>
        </div>
      </div>
      
      {/* Team selector */}
      <TeamTable />
    </div>
  );
}
