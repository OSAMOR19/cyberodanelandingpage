import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GrantsSection } from "@/components/sections/GrantsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { SecurityHighlights } from "@/components/sections/SecurityHighlights";
import { TeamSection } from "@/components/sections/TeamSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorks />
        <SecurityHighlights />
        <PublicationsSection />
        <TrustSection />
        <GrantsSection />
        <TeamSection />
        <InsightsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
