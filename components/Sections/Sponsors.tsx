import React from "react";
import Image from "next/image";

interface SponsorItem {
  name: string;
  image: string;
}

const sponsors: SponsorItem[] = [
  {
    name: "Lactasoy",
    image: "/assets/images/sponsors/lactasoy.jpg",
  },
];

const Sponsors = () => {
  return (
    <div
      className="scroll-mt-24 py-20 relative bg-black flex items-center gap-20 flex-col "
      id="sponsors"
    >
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30 z-0"></div>
      <h1 className="text-white text-6xl text-center relative">ผู้สนับสนุน</h1>
      <div className="flex flex-col lg:flex-row gap-16 relative">
        {sponsors.map((sponsor) => (
          <Image
            key={sponsor.name}
            src={sponsor.image}
            alt={sponsor.name}
            width="170"
            height="168"
            className="size-36 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
