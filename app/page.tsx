import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Specialists } from "@/components/Specialists";
import { TrustBlock } from "@/components/TrustBlock";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header />
      <div className="z-10">
        <Hero />
        <Benefits />
        <About />
        <Specialists />
        <HowItWorks />
        <TrustBlock />
        <Reviews />
        <FinalCta />
        <Footer />
      </div>
    </div>
  );
};
