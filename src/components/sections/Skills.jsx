"use client";

import { useAtom } from "jotai";
import { skillsAtom } from "@/store/atoms";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export default function SectionSkills({ data }) {
  const [skills, setSkills] = useAtom(skillsAtom);
  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {data.map((skill) => (
          <button
            key={skill}
            onClick={() =>
              setSkills((draft) =>
                draft.includes(skill)
                  ? draft.filter((s) => s !== skill)
                  : [...draft, skill],
              )
            }
          >
            <Badge variant={skills.includes(skill) ? "secondary" : "default"}>
              {skill}
            </Badge>
          </button>
        ))}
      </div>
    </Section>
  );
}
