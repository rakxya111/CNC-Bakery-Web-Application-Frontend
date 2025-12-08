import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import HeroBottom from "@/components/Home/HeroBottom";
import Inquire from "@/components/Home/Inquire";
import Navbar from "@/components/Home/Navbar";

export default function Home() {
  return (
    <>

    <Navbar />
    <Hero />
    <HeroBottom />
    <Featured />
    <Inquire />

    </>
  );
}
