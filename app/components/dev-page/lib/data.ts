import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Intro",
    hash: "/dev#",
  },
  {
    name: "Projects",
    hash: "/dev#projects",
  },
  {
    name: "Skills",
    hash: "/dev#skills",
  },
  {
    name: "Blogs",
    hash: "/dev#blogs",
  },
  {
    name: "Contact",
    hash: "/dev#contact",
  },
] as const;



// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Cheffy",
    description:
      "A recipe sharing social media platform with NextJs using TypeScript, that user can easily share recipe, vote or rate recipe. As admin user can manage recipe and users. The feed shows ranking based data with endless scrolling.Ranking calculates ratings, votes, logging user's food diet and many more. Users can be premium for one month to see premium recipes.",
    tags: ["Next.js", "Next UI", "TanStack Query", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://i.ibb.co.com/4ZKQCM3/all-devices-white.png",
    link: "https://cheffy-client.vercel.app/",
    frontend: "https://github.com/TonmoyTalukder/cheffy-client",
    backend: "https://github.com/TonmoyTalukder/cheffy-server"
  },
  {
    title: "AI Medi Assist",
    description:
      "A Next.js + LangChain application integrates with the GEMINI API, enabling users to upload medical clinical reports. The AI generates a summary of the report, which can be modified by the user. Additionally, the application features an AI-powered chat for users to gain further insights into the report and explore recommended next steps in their medical journey.",
    tags: ["Next.js", "Shadcn UI", "Typescript", "Tailwind CSS", "LangChain", "GEMINI API Integration"],
    imageUrl: "https://i.ibb.co.com/WBJYWyb/all-devices-black.png",
    link: "https://cheffy-client.vercel.app/",
    frontend: "https://ai-medi-assist.vercel.app/",
    backend: ""
  },
  {
    title: "SportifyNow",
    description:
      "A sport facility booking platform with React + Vite using TypeScript, that user can easily book a sport facility with integrated payment system, review or earn rewards.",
    tags: ["React", "Redux", "Ant Design", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://i.ibb.co.com/7YBJFkx/all-devices-white-1.png",
    link: "https://sportify-now.vercel.app/",
    frontend: "https://github.com/TonmoyTalukder/SportifyNow",
    backend: "https://github.com/TonmoyTalukder/Sports-Facility-Booking-Platform/tree/sportify-now-backend"
  },
  {
    title: "VerdantSpace",
    description:
      "A nursery e-commerce website allow users to browse, filter, and search for products, add products to their cart to place order. Additionally, there is a product and category management section for CRUD operations.",
    tags: ["React", "Redux", "Ant Design", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://i.ibb.co.com/WPSJDVP/all-devices-white-2.png",
    link: "https://verdant-space.vercel.app/",
    frontend: "https://github.com/TonmoyTalukder/verdant-space",
    backend: "https://github.com/TonmoyTalukder/verdant-space-server"
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Redux",
  "Next.js",
  "TanStack Query",
  "Tailwind CSS",
  "Next UI",
  "Shadcn UI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Machine Learning",
  "Deep Learning"
] as const;