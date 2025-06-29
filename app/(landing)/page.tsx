import HomeSection from "@/components/Sections/Home";
import AboutSection from "@/components/Sections/About";
import TimelineSection from "@/components/Sections/Timeline";
import OurCampSection from "@/components/Sections/OurCamp";
import SponsorSection from "@/components/Sections/Sponsors";
import FollowSection from "@/components/Sections/Follow";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <TimelineSection />
      <OurCampSection />
      <SponsorSection />
      <FollowSection />
    </>
  );
}
