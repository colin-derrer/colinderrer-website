import DigitalThings from "@/components/DigitalThings";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projectData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="py-[1vh] my-[5vh] flex flex-col sm:flex-row justify-between items-center relative">
        <div className="my-auto">
          <p>hello, I&apos;m</p>
          <h1 className="tracking-tighter text-7xl">COLIN DERRER</h1>
          <p className="text-primary">
            an Orlando-based full stack web developer.
          </p>
        </div>
        <div className="max-w-[60ch] mt-auto absolute bottom-0 text-center sm:text-left">
          <p className="">
            I love working with interactive technologies to help make I love
            working with interactive technologies to help make I love working
            with interactive technologies to help make
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            This website is currently being redesigned. Please check back in a
            day or two!
          </p>
        </div>
        <div className="relative">
          <div className=" bg-primary size-96" />
        </div>
      </header>
      <section className="flex flex-col gap-2 pt-16">
        <SectionHeader text="DEVELOPMENT & DESIGN" />
        <div className="">
          <h3 className="text-sm font-medium">USING THESE FOR THE FRONTEND</h3>
          <div className="flex flex-wrap w-full gap-4 text-muted-foreground hover:*:text-foreground *:transition-all">
            <p>Next.js 13</p>
            <p>Framer</p>
            <p>Webflow</p>
            <p>Figma</p>
            <p>Adobe Photoshop & Illustrator</p>
            <p>TailwindCSS</p>
            <p>Blender (the software, not the appliance)</p>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-sm font-medium">...AND THESE FOR THE BACKEND</h3>
          <div className="flex flex-wrap w-full gap-4 text-muted-foreground hover:*:text-foreground *:transition-all">
            <p>Next.js 13</p>
            <p>Express.js</p>
            <p>TypeScript</p>
            <p>Python</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-sm font-medium">
            ...TO BUILD THESE SORTS OF DIGITAL THINGS:
          </h3>
          <div className="flex flex-col">
            <DigitalThings title="E-COMMERCE SITES" />
            <DigitalThings title="SLEEK, MODERN SAAS SITES" />
            <DigitalThings title="MINIMALIST STUDIO SITES" />
            <DigitalThings title="PERSONAL SITES" />
            <DigitalThings title="DESKTOP & MOBILE UI" />
            <DigitalThings title="DESKTOP & MOBILE UI" />
            <DigitalThings title="APIs AND DIGITAL SERVICES" />
            <DigitalThings title="INTERACTIVE DEMOS" />
          </div>
        </div>
      </section>
      <section className="pt-16 space-y-2">
        <SectionHeader text="PROJECTS" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p) => {
            return <ProjectCard {...p} key={p.title} />;
          })}
        </div>
      </section>
    </div>
  );
}
