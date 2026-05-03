import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SecurityHighlights } from "@/components/sections/SecurityHighlights";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { GrantsSection } from "@/components/sections/GrantsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Research & Output",
  description: "Explore Cyberodane's six defining research themes, peer-reviewed publications, active grant programmes, and the flagship Odane Guard AI platform.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <SecurityHighlights />
        <PublicationsSection />
        <GrantsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
