import Station from "@/components/MyJourney/Station";
import UserInfo from "@/components/MyJourney/UserInfo";

export default function MyJourney() {

  const ids = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center relative py-32">
      <div className="absolute bg-[url(/assets/images/AboutBG.png)] inset-0 bg-cover bg-center"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-12">
        <h1 className="text-6xl [font-family:var(--font-anta)] text-white z-12">My Journey</h1>
        <div className="w-full max-w-2xl px-4 flex flex-col items-center gap-8">
          <UserInfo />
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
            {ids.map(id => (
              <Station key={id} stationId={id} status="unlock" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
