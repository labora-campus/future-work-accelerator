import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import CaseStudySection from "@/components/landing/CaseStudySection";
import SolutionSection from "@/components/landing/SolutionSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ProgramSection from "@/components/landing/ProgramSection";
import MethodologySection from "@/components/landing/MethodologySection";
import InstructorsSection from "@/components/landing/InstructorsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CaseStudySection />
        <SolutionSection />
        <ForWhoSection />
        <ResultsSection />
        <ProgramSection />
        <MethodologySection />
        <InstructorsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
