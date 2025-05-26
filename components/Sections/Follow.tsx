import React from "react";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { RiGlobalLine as WebIcon } from "react-icons/ri";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";

import Link from "next/link";

interface SocialItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const socials: SocialItem[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/ku.t3ch/",
    icon: <FacebookIcon className="size-12" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ku.t3ch/",
    icon: <InstagramIcon className="size-13" />,
  },
  {
    name: "Ku Tech",
    link: "https://tech.nisit.ku.ac.th/",
    icon: <WebIcon className="size-12" />,
  },
];

const Follow = () => {
  return (
    <div className="py-20 relative bg-black flex items-center gap-10 flex-col" id="contact">
      <div className="absolute bg-[url(/assets/images/TimelineBG.gif)] inset-0 bg-cover bg-center opacity-30 z-0"></div>
      <h1 className="text-white text-5xl text-center relative">
        ติดตามข่าวสาร
      </h1>
      <div className="flex gap-10 relative text-white items-center">
        {socials.map((social) => (
          <Link key={social.name} href={social.link} target="_blank">
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Follow;
