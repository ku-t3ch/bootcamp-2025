import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
