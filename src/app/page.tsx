import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <>
      <div id="home" className="pt-10">
        {/* We can use AboutSection as the Hero/Home section or add a specific HeroSection later. */}
        <AboutSection />
      </div>
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
    </>
  );
}
