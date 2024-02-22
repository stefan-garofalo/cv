"use client";

import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence mode="wait" initial={false}>
        {projects.length > 0 ? (
          <motion.ul
            layout
            key={currentSkills.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
          >
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
          </motion.ul>
        ) : (
          <div className="h-28 lg:h-48">
            No projects match the selected skills
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
