"use client";

import { useAtomValue } from "jotai";
import { skillsAtom } from "@/store/atoms";

import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";

export default function SectionProjects({ data }) {
  const currentSkills = useAtomValue(skillsAtom);
  const projects =
    currentSkills.length > 0
      ? data.filter((project) =>
          currentSkills.some((skill) => project.techStack.includes(skill)),
        )
      : data;
  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">Projects</h2>
      <ul className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.title} className="h-full w-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
