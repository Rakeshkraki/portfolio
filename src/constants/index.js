import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  Besanth,
  Fundamentals,
  java,
  Spektra,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: ".NET ",
    icon: web,
  },
  {
    title: "Full Stack",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "DevOps intern",
    company_name: "Fundamentals",
    icon: Fundamentals,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    points: [
      "The DevOps internship offers hands-on experience in the dynamic world of software development and IT operations.",
      "Interns will work alongside skilled professionals, learning to streamline processes, automate tasks, and bridge the gap between development and deployment. ",
    ],
  },
  {
    title: "Java Full-Stack(Course)",
    company_name: "Besant Technologis",
    icon: Besanth,
    iconBg: "#383E56",
    date: "Jun 2023- Feb 2024",
    points: [
      "Developing and maintaining web applications using Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Spektra Systems LLC",
    icon: Spektra,
    iconBg: "#383E56",
    date: "Mar 2024 - Jul 2024 ",
    points: [
      "Developed and maintained web applications using ASP.NET, C#, and ADO.NET.",
      "Designed and implemented front-end features with HTML, CSS, JavaScript, and AngularJS, ensuring responsive and user-friendly interfaces.",
      "Built and consumed Web API Core services for robust and scalable back-end solutions",
      "Worked with SQL Server for database design, writing complex queries, and ensuring data integrity. ",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Online Banking",
    description:
      "Developed an online banking platform with features such as account management, fund transfers, and transaction history. Collaborated with a team to meet project deadlines and improve user experience",
    tags: [
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Sql server",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lab Translator",
    description:
      "Developed a robust platform, Lab Exchanger Using Azure Service, for seamless exchange of lab resources. ",
    tags: [
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Azure Cognitive Service",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rakeshkraki",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rakeshkraki",
  },
];

export { services, technologies, experiences, testimonials, projects };
