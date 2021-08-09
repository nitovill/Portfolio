import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Mariano Villafuerte",
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
    "Mi nombre es Mariano, soy Full Stack Developer y profesor de informática. Cuando cursaba el profesorado descubrí la programación y me enamoré, hice el examen de ingreso a la universidad nacional de Jujuy para adentrarme en este mundo y logré aprobar con nota perfecta (100). \n\n Mientras cursaba la carrera Analista Programador Universitario descubrí la programación web y supe que tenía que enfocarme en esto, mi sueño es trabajar de lo que tanto amo. \n\n Soy una persona introvertida, respeto las opiniones de los demás y doy a conocer la mia. Me gusta siempre aprender cosas nuevas.",
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
};
