import LeaderboardDetail from "@/components/Leaderboard/LeaderboardDetail";
import LeaderboardHeader from "@/components/Leaderboard/LeaderboardHeader";


export default function Page() {
  return (
    <section className="min h-screen bg-[url('/assets/images/HomeBG.gif')] bg-cover bg-center">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-30 max-w-5xl mx-auto grid">
        <div className="text-4xl sm:text-3xl md:text-3xl font-bold mb-6 text-white" id="leader-box">
          <LeaderboardHeader />
        </div>
        <div className =" w-full rounded-2xl bg-score backdrop-blur-md p-6 sm:p-8 text-white space-y-4 shadow-lg" id="leader-info">
          <LeaderboardDetail />
        </div>
      </div>
    </section>
  );
}