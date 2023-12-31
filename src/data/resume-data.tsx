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
    "Crafted numerous full-stack applications delivering high-quality code and showing self-reliance. Took care of maintaining existing products, fixing bugs, implementing new features and refactoring old codebases. Handled significant responsibility for most of the development of many projects.",

  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "garofalo.s@outllok.com",
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
      degree: "IT Specialist - Secondary School Diploma",
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
        "Developed tens of multipage fullstack applications implementing Responsive Design, Auth, Data fetching, 3rd party APIs and Store architecture. I also maintained existing projects deploying new features and fixing bugs.",
    },
  ],
  skills: [
    "JavaScript",
    "React/Next.js",
    "Vue.js/Nuxt",
    "Node.js",
    "MongoDB",
    "MySQL",
    "TailwindCSS",
  ],
  projects: [
    {
      title: "Catalogo Musei di Genova",
      techStack: ["Nuxt", "MongoDB", "TailwindCSS", "WP Headless"],
      description:
        "A platform to consult and explore the entire heritage of Genoa's Civic Museums",
      link: {
        label: "catalogo.museidigenova.it",
        href: "https://catalogo.museidigenova.it/",
      },
    },
    {
      title: "Cassero Documentation Center",
      techStack: ["Nuxt", "MongoDB", "TailwindCSS", "WP Headless"],
      description:
        "A website to display the archive and documents held by the Cassero LGBT association based in Bologna",
      link: {
        label: "centrodocumentazionecassero.it",
        href: "https://centrodocumentazionecassero.it/",
      },
    },
  ],
} as const;
