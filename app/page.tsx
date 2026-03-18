import Hero from "@/components/Hero";
import HardwareProjects from "@/components/HardwareProjects";
import SoftwareProjects from "@/components/SoftwareProjects";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <HardwareProjects />
      <SoftwareProjects />
      <About />
    </main>
  );
}
