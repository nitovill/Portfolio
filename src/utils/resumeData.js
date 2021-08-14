import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Nito Villafuerte",
  title: "Full stack developer",
  cumpleaños: "30 de Octubre, 1995",
  email: "nitovillafuerte@outlook.com",
  address: "Jujuy, Argentina",
  phone: "+54 388 5162847",
  social: {
    Linkedin: {
      link: "https://www.linkedin.com/in/nelson-mariano-villafuerte/",
      icon: <LinkedInIcon />,
      text: "MyLinkedIn",
    },
    Github: {
      link: "https://github.com/nitovill",
      icon: <GitHubIcon />,
      text: "MyGithub",
    },
  },
  about:
    "My name is Mariano, I am a Full Stack Developer and a computer science teacher. When I was studying the teaching staff I discovered programming and fell in love, I took the entrance exam to the National University of Jujuy to enter this world and I managed to pass with a perfect grade (100).\n\n While I was studying the University Programmer Analyst I discovered web programming and I knew that I had to focus on this, my dream is to work on what I love so much.\n\nI am an introverted person, I respect the opinions of others and I make my own known. I always like to learn new things.",
  experiences: [
    {
      title: "FULL STACK DEVELOPER - Experiencia academica 'Trakker'",
      date: "Julio 2021. 1 mes.",
      description:
        "Miembro del equipo de desarrollo de una SPA de hotel que permite reservar, publicar y gestionar el alquiler de inmuebles, entre otras cosas.",
    },
    {
      title: "FULL STACK DEVELOPER - Experiencia academica 'Hey Bulldog!!'",
      date: "Mayo 2021. 1 mes.",
      description:
        "Desarrollo individual de una SPA de razas de perros, consume datos de una API (api.thedogapi.com) a través de un Back End desarrollado por mí agregando funcionalidades a la API original.",
    },
  ],
  education: [
    {
      title: "Fullstack developer - Bootcamp Henry",
      date: "2020 - 2021",
      description:
        "Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos",
    },
    {
      title:
        "Analsita Programador Universitario - Universidad Nacional de Jujuy",
      date: "2020 - 2023",
      description:
        "Analista Programador Universitario, Programación informática, aplicaciones específicas",
    },
    {
      title: "Profesor de Informática - Instituto de Educación Superior 6",
      date: "2020 - 2023",
      description: "Profesorado en Informatica, Educación secundaria",
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "Javascript",
        "Redux",
        "HTML",
        "CSS",
        "MaterialUI",
        "Bootstrap",
      ],
    },
    {
      title: "BACK -END",
      description: [
        "NodeJs",
        "Javascript",
        "Express",
        "Firebase",
        "TypeScript",
      ],
    },
    {
      title: "DATABASES",
      description: ["Sequelize", "PostgreSQL", "MongoDB", "Mongoose", "MySQL"],
    },
  ],
};
