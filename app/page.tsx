import { Featured, Hero, HeroBottom, HowItWorks, Inquire, ProductCatalog } from "@/components/Home";
import Navbar from "@/components/Home/Navbar";

export default function Home() {
  return (
    <>

    <Navbar />
    <Hero />
    <HeroBottom />
    <Featured />
    <Inquire />
    <HowItWorks />
    <ProductCatalog />

    </>
  );
}
