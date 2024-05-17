import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Stefan Garofalo",
  initials: "SG",
  location: "Turin, Italy",
  locationLink: "https://www.google.com/maps/place/Turin",
  about:
    "An enthusiast and curious developer eager to discover something new everyday",
  summary:
    "I am a passionate and dedicated frontend developer with over two years of experience in building and shipping high-quality applications. I have a meticulous eye for detail and commit to crafting clean, efficient, and performant solutions. I embrace innovation and always strive to keep up with the latest breakthroughs.",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "garofalo.s@outlook.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/stefan-garofalo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stefan-garofalo/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/stefangarofalo",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "ITTS Carlo Grassi",
      degree: "IT Engineer - Senior High School Diploma",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Promemoria Group",
      link: "https://www.promemoriagroup.com/en",
      badges: ["On-site"],
      title: "Frontend Developer",
      start: "2022",
      end: "Present",
      description:
        "Crafted numerous full-stack applications delivering high-quality code and showing self-reliance. Took care of maintaining existing products, fixing bugs, implementing new features and refactoring old codebases. Handled significant responsibility for most of the development of many projects.",
    },
  ],
  skills: [
    "JavaScript",
    "Next.js",
    "Nuxt",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Prismic",
    "WP Headless",
  ],
  projects: [
    {
      title: "Archivio Gianni Minà",
      techStack: ["Next.js", "TailwindCSS", "JavaScript", "WP Headless"],
      description:
        "The archival website of the iconic personality Gianni Minà, one amongst the most influencial reporters and journalists of Italy and the 20th century ",
      link: {
        label: "giannimina.it",
        href: "https://giannimina.it",
      },
    },
    {
      title: "Radiant Inc. Website",
      techStack: ["Next.js", "TailwindCSS", "JavaScript", "Prismic"],
      description:
        "The corporate website for a fictional energy provider company, based on nuclear and green solutions",
      link: {
        label: "radiantinc.vercel.app",
        href: "https://radiantinc.vercel.app",
      },
      repositoryUrl: "https://github.com/stefan-garofalo/radiant-inc-website",
    },
    {
      title: "Genoa's Museums Catalogue",
      techStack: [
        "Nuxt",
        "MongoDB",
        "TailwindCSS",
        "JavaScript",
        "WP Headless",
      ],
      description:
        "A platform to consult and explore the entire heritage of Genoa's Civic Museums",
      link: {
        label: "catalogo.museidigenova.it",
        href: "https://catalogo.museidigenova.it/",
      },
    }
  ],
} as const;
