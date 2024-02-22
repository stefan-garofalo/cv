import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Stefan Garofalo",
  initials: "SG",
  location: "Turin, Italy",
  locationLink: "https://www.google.com/maps/place/Turin",
  about:
    "Passionate and curious developer eager to discover something new everyday",
  summary:
    "I am an enthusiast driven by a relentless passion for learning. With a keen eye for detail, I commit to develop clean and performant solutions. My journey in the world of development spans over a year, during which I have successfully built and shipped applications that reflect such principles",
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
      company: "Promemoria S.r.l.",
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
      title: "Radiant Inc. Website",
      techStack: ["Next.js", "TailwindCSS", "JavaScript", "Prismic"],
      description:
        "The corporate website for a fictional energy provider company, based on nuclear and green solutions",
      link: {
        label: "radiantinc.vercel.app",
        href: "https://radiantinc.vercel.app",
      },
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
    },
    {
      title: "Cassero Documentation Center",
      techStack: [
        "Nuxt",
        "MongoDB",
        "TailwindCSS",
        "JavaScript",
        "WP Headless",
      ],
      description:
        "A website to display the archive and documents held by the Cassero LGBT association based in Bologna",
      link: {
        label: "centrodocumentazionecassero.it",
        href: "https://centrodocumentazionecassero.it/",
      },
    },
  ],
} as const;
