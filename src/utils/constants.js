import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Project", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
];

export const workData = [
  {
    company: "TwoWaits",
    designation: "Machine Learning Intern",
    duration: "July 2022",
    companyImg: "ML_Logo.png",
    description: (
      <>
        <ul>
          <li>
            I mainly worked on understanding and comparing different machine learning models and their uses in different
            cases and situations. Also performing various types of data cleaning and pipelining tasks to make a dataset suitable
            for machine learning model training.
          </li>
        </ul>
      </>
    ),
  }, 
  {
    company: "Freelancer",
    designation: "DSA Tutor",
    duration: "Apr 2023 - Now",
    companyImg: "freelance.jpg",
    description: (
      <>
        <ul>
          <li>
            Teaching Data Structure and Algorith as a freelancer.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Freelancer",
    designation: "Data Analysis and Visualization ",
    duration: "Apr 2023 - Now",
    companyImg: "freelance.jpg",
    description: (
      <>
        <ul>
          <li>
            Taking freelancing jobs in Data Analysis and Visualization domain. Using PowerBI and Tableau to create powerful and
            attractive Data Visualization dashboards for clients.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "PROJECT",
    title: "Bank Loan Prediction App",
    image: "landing-page",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
    title: "CriSys Disaster Management System",
    image: "CriSys",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Study Assist System",
    image: "ChatUI",
    link: "",
    source: "",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/lexcsam",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/lexcsam/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/lexcsam/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/starter_vish",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://lexcsam.hashnode.dev/",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "lexcsam.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
