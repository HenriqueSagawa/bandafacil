import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { AppShowcase } from "@/components/app-showcase";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <AppShowcase />
      <CTA />
      <Footer />
    </div>
  );
}
