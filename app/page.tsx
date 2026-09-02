import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Plans } from "@/components/sections/Plans";
import { ValueAdded } from "@/components/sections/ValueAdded";
import { Comparison } from "@/components/sections/Comparison";
import { Audience } from "@/components/sections/Audience";
import { LeadForm } from "@/components/sections/LeadForm";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Plans />
        <ValueAdded />
        <Comparison />
        <Audience />
        <LeadForm />
        <Closing />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
