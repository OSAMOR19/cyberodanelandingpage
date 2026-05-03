import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Insights",
  description: "Research intelligence, commentary, and analysis from the Cyberodane team on the evolving cyber threat landscape.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
