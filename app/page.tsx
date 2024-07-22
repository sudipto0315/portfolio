"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { Skills } from "@/components/SkillsCards";
import { TracingBeam } from "@/components/ui/TracingBeam";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { ScrollContainer } from "@/components/ContainerScroll";
import { MacbookScroll } from "@/components/MacBookScroll";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam>
          <Hero />
          <MacbookScroll />
        </TracingBeam>
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        {/* <ScrollContainer /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
