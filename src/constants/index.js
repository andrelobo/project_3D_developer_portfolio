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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer freelancer",
    company_name: "Lobodev",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Fevereiro 2022 - Atualmente",
    points: [
      "Desenvolvendo e mantendo aplicações web usando React.js e outras tecnologias relacionadas.",
"Colaborando com equipes multidisciplinares, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
"Implementando design responsivo e garantindo compatibilidade entre navegadores.",
"Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "INDT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Nov 2022",
    points: [
      "Atuei como Fullstack Dev em projetos, utilizando Nodejs e React, respectivamente backend e frontend.",
      "Modelagem de bancos, arquitetura de projetos de software.Trabalhamos como equipe ágil utilizando LEAN.",
      "Framework Nestjs (Typescript) para backend.Swagger para documentação de API’s, Insomnia, Typeorm",
      
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "ICTS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Abril 2021- Dezembro 2021",
    points: [
      "Analista Desenvolvedor e atuei como Fullstack Dev em projetos, utilizandoNodejs e React, respectivamente backend e frontend.",
      "Framework Nestjs (Typescript) para backend.Outras tecnologias utilizadas , Swagger para documentação de APIs, Insomnia, Banco de Dados MSSQL Requisito do cliente), LDAP entre outros.",
      "Versionamento de código com GIT",
      "Modelagem de bancos de dados",
      "Arquitetura de projetos de software",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - 2021",
    points: [
      "Utilizo JavaScript , PHP (Laravel), Nodejs , React, React Native MongoDb e MySQL,Gatsby e Nextjs, HTML5, CSS3,",
      "Colaborando com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce Fortunato Tapeçaria",
    description:
      "O trabalho envolveu a criação de um site de e-commerce completo, incluindo páginas de produto, carrinho de compras, checkout e gerenciamento de pedidos. Também foram implementadas funcionalidades como pesquisa de produtos, filtros de produtos, login de usuários e recuperação de senhas.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/andrelobo/fortunato-tape-aria",
  },
  {
    name: "Portal de Imóveis",
    description:
      "Desenvolvimento de uma plataforma para aluguel e venda de imóveis. Nesta plataforma, proprietários e corretores de imóveis podem cadastrar suas propriedades e os usuários finais podem procurar e solicitar informações sobre imóveis para aluguel ou venda.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/andrelobo/projects_realestate",
  },
  {
    name: "Companhia Web",
    description:
      "Site institucional para Agência Digital",
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
    source_code_link: "https://companhia-web.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
