import SectionCTA from "@/components/sections/SectionCTA";
import SectionFeatures from "@/components/sections/sectionFeatures";
import SectionWelcomeHome from "@/components/sections/sectionWelcomeHome";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <SectionWelcomeHome />

        <SectionFeatures />
        
        <SectionCTA />
    </div>
  );
}
