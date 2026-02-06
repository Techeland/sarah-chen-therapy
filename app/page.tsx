import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CTA />
    </>
  );
}
