import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  dcc,
  microverse,
  practitioner,
  awsDevops,
  devopsLinux,
  devops
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  
  {
    title: 'devops intern',
    company_name: 'webmob',
    icon: microverse,
    iconBg: '#333333',
    date: 'August2025 - DEC 2025',
  },
  
  {
    title: 'B.tech AIDS',
    company_name: 'CGC LANDRAN',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2022 - June 2026',
  },
];

const projects = [
  {
    id: "project-1",
    name: "AWS DevOps Certification",   // ← Certificate title here
    description: "Completed AWS DevOps training.",
    image: awsDevops,                  // ← Imported image from assets
  },
  {
    id: "project-2",
    name: "AWS Cloud Practitioner",
    description: "AWS Academy Graduate.",
    image: practitioner,
  },
  {
    id: "project-3",
    name: "Linux for DevOps",
    description: "Linux essentials for DevOps.",
    image: devopsLinux,
  },
  {
    id: "project-4",
    name: "DevOps Advanced Projects",
    description: "Udemy DevOps training.",
    image: devops,
  },
];

export { services, technologies, experiences, projects };
