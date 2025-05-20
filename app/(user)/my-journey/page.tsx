import Station from "@/components/MyJourney/Station";
import UserInfo from "@/components/MyJourney/UserInfo";

export default function MyJourney() {

  const ids = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-linear-to-t from-black to-[#110622] bg-no-repeat bg-cover bg-center relative pt-16">
      <div className="absolute bg-[url(/assets/images/AboutBG.png)] inset-0 bg-cover bg-center"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-12">
        <h1 className="text-6xl [font-family:var(--font-anta)] text-white z-12">My Journey</h1>
        <div className="p-4">
          <UserInfo />
        </div>
        <div className="inset-0 inline-grid grid-cols-2 gap-x-4 md:gap-x-20 gap-y-8 lg:grid-cols-3 justify-center items-center">
          {ids.map(id => (
            <Station key={id} stationId={id} status="unlock" />
          ))}
        </div>
      </div>
    </div>
  );
}
