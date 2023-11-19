
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
  threejs,
  sass,
  npm,
  vue,
  toys,
  air,
  meme,
  minesweeper,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JS Developer",
    icon: creator,
  },
]

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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Sass",
    icon: sass,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "Vue",
    icon: vue,
  },

]

const projects = [
  {
    name: "Airist",
    description:
      "Airist serves as a fully functional Airbnb clone, functioning as an online marketplace connecting individuals offering their properties for short-term rentals with those seeking accommodations. This comprehensive Fullstack app boasts essential features such as booking, checking stay availability, and robust sorting and filtering options. For hosts, the platform provides a dedicated dashboard showcasing sales and orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: air,
    github_link: "https://github.com/Shira-CI/airist/",
    site_link: "https://airist-9s0i.onrender.com/"
  },
  {
    name: "Mister Toy",
    description:
      "A toy store, Fullstck app that highlights toys available for purchase. The application comprises both customer and seller interfaces, including product descriptions, prices, tags, sorting and filtering options, as well as customer reviews. On the seller side, functionalities include inventory management, and modification of product descriptions and prices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: toys,
    github_link: "https://github.com/Shira-CI/mister-toy-frontend",
    site_link: "https://mister-toy-ec6o.onrender.com/"
  },

  {
    name: "Meme Generator",
    description:
      "Meme Generator Frontend App that allows users to choose from suggested images or upload their own, enabling easy editing and captioning for a touch of humor",
    tags: [
      {
        name: "ES6",
        color: "blue-text-gradient",
      },
      {
        name: "HTML 5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: meme,
    github_link: "https://github.com/Shira-CI/meme-generator",
    site_link: "https://memes.shiracohenidov.com/"
  },
  {
    name: "Minesweeper",
    description:
      "Minesweeper Frontend App, a classic yet challenging game brought to life in a digital space. Test your strategic thinking and logic as you uncover hidden mines on the interactive grid.",
    tags: [
      {
        name: "ES6",
        color: "blue-text-gradient",
      },
      {
        name: "HTML 5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: minesweeper,
    github_link: "https://github.com/Shira-CI/minesweeper",
    site_link: "https://minesweeper.shiracohenidov.com"
  },

]

export { services, technologies, projects }