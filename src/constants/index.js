import {
  python,
  java,
  sql,
  mysql,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  asteroids,
  connectFour,
  bankDashboard,
  services1,
  threejs,
  cinemaApp,
  chatApp,
  Docker,
  springBoot,
  springBootFramework,
  springBootMVC,
  erpWarehouse
  
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

export const services = [
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "SQL", icon: sql},
  { title: "MySQL", icon: mysql},
  {title:"Docker", icon:Docker},
  {title:"springBoot",icon:springBoot},
  {title:"springBootFramework",icon:springBootFramework},
  {title:"springBootMVC",icon: springBootMVC}
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Soldier",
    company_name: "Department of Defense, Rep. Serbia",
    
    iconBg: "#161329",
    date: "Mart 2017",
    points: [
      "Serving in military, doing daily military job, protecing the country.",
    ],
  },
  {
    title: "Worker",
    company_name : "Sintelon/Tarkett",

    iconBg: "#161329",
    date: "2018 - 2019",
    points: [
      "Working in warehouse,doinh inventories,making track of goods and raw-materials"
    ]
  },
  {
    title: "Production",
    company_name: "DivTrades doo Backa Palanka",
    
    iconBg: "#161329",
    date: "Sep 2020 - Sep 2023",
    points: [
      "Working on production line and assembling big jumbo bags for industrial goods.",
    ],
  },
  {
    title: "Warehouse",
    company_name: "Ahold Delhaize Serbia ",
    
    iconBg: "#161329",
    date: "Oct 2024 - April 2025",
    points: [
      "Working in storage, managing the goods, maintaing storage.",
    ],
  },
  {
    title: "Software Engineer – ERP-AI Platform (Self-initiated project)",
    company_name: "Industrial AI Technologies DOO",

    iconBg: "#161329",
    date: "May 1 2025 - present",
    points: [
      "Designed and implemented backend services using Spring Boot",
      "Modeled logistics,transportation, production,warehouse and agriculture workflows based on real operational scenarios",
      "Built authentication and authorization using JWT",
      "Developed modular architecture suitable for scaling and future service separation",
      "Collaborated with domain experts from logistics and public-utility contexts"
    ]
  }
];

export const projects = [
  {
    name: "AsteroidGame",
    description:
      "JavaScript-based platform that allows user to play vintage old game.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "AsteroidGame", color: "yellow-text-gradient" },
    ],
    image: asteroids,
    source_code_link: "https://github.com/jovangolic/AsteroidGame",
  },
  {
    name: "ConnectFour",
    description:
      "Connect Four is a classic game built using Spring Boot with MVC architecture and Thymeleaf as a templating engine for the frontend. The game allows two players to take turns placing discs in columns on a 6x7 grid and the goal is to be the first to place four discs in a row (horizontally, vertically or diagonally).",
    tags: [
      { name: "Java-OOP", color: "pink-text-gradient" }, 
    ],
    image: connectFour,
    source_code_link: "https://github.com/jovangolic/Igra",
  },
  {
    name: "Project-Bank",
    description:
      "It is java backend application for banking management",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      {name: "SpringBoot", color: "blue-text-gradient"}
    ],
    image: bankDashboard,
    source_code_link: "https://github.com/jovangolic/Project-Bank",
  },
  {
    name: "Full-stack-hotel",
    description:
      "Dockerize tool that allows user to book one or more rooms in a hotel",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      {name: "Java", color: "blue-text-gradient"},
      {name: "SpringBoot", color: "blue-text-gradient"},
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: services1,
    source_code_link: "https://github.com/jovangolic/full-stack-hotel",
  },
  {
    name: "Project-Cinema",
    description:
      "Project-Cinema is java full-stack web aplication that allows the users to reserved, cancel or purcahse the ticket/tickets for movie.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      {name: "Java", color: "blue-text-gradient"},
      {name: "SpringBoot", color: "blue-text-gradient"},
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],

    image: cinemaApp,
    source_code_link: "https://github.com/jovangolic/full-stack-cinema",
  },
  {
    name: "Project One-to-one-chat-app",
    description:
      "One-to-one-chat-app is java web application that allows you to comumnicate with other users. It is websocket application.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      {name: "SpringBoot", color: "blue-text-gradient"}
    ],
    image: chatApp,
    source_code_link: "https://github.com/jovangolic/Ono-to-one-chat-app",
  },
  {
    name:"ERP-AI Platform",
    description:"ERP-AI platform for transportation, logistics, warehousing, resource management and Agro-AI, built with Spring Boot–based services, secure REST APIs, and modular, cloud-ready architecture.  ",
    tags:[
      {name:"Java",color:"blue-text-gradient"},
      {name:"SpringBoot",color: "blue-text-gradient"},
      {name:"Spring Security + JWT (HS512)",color:"blue-text-gradient"},
      {name:"MySQL",color:"blue-text-gradient"}
    ],
    image: erpWarehouse,
    source_code_link:"https://github.com/jovangolic/erp-v1",
  }
];
