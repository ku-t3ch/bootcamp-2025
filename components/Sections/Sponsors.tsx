import React from "react";
import Image from "next/image";

interface SponsorItem {
  name: string;
  image: string;
}

const sponsors: SponsorItem[] = [
  {
    name: "True",
    image: "/assets/images/sponsors/sponsor1.png",
  },
  {
    name: "True1",
    image: "/assets/images/sponsors/sponsor1.png",
  },
  {
    name: "True2",
    image: "/assets/images/sponsors/sponsor1.png",
  },
  {
    name: "True3",
    image: "/assets/images/sponsors/sponsor1.png",
  },
];

const Sponsors = () => {
  return (
    <div className="py-20 relative bg-black flex items-center gap-20 flex-col">
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30 z-0"></div>
      <h1 className="text-white text-5xl text-center relative">ผู้สนับสนุน</h1>
      <div className="flex flex-col lg:flex-row gap-16 relative">
        {sponsors.map((sponsor) => (
          <Image
            key={sponsor.name}
            src={sponsor.image}
            alt={sponsor.name}
            width="170"
            height="168"
            className="w-36 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
