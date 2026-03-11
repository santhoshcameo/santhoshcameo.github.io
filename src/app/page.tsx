import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Publications from '@/components/sections/Publications';
import Skills from '@/components/sections/Skills';
import GitHubActivity from '@/components/sections/GitHubActivity';
import Education from '@/components/sections/Education';
import Awards from '@/components/sections/Awards';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Skills />
      <GitHubActivity />
      <Education />
      <Awards />
    </>
  );
}
