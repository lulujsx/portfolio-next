// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  tags: string[],
  photo: string,
  about: string,
  experience: Object[],
  skills: Object[],
  projects: Object[],

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  res.status(200).json({ 
    name: 'Luana Vallejos',
    tags: ['FullStack Developer, UI Designer, STEM Student'],
    photo: '',
    about: "I'm from Buenos Aires, Argentina. I study Computer Science B.Sc. at Universidad Nacional Del Oeste. I'm in search of new challenges to improve my language and development skills. During my last job, I have gained valuable experience working as a FrontEnd Developer with a focus on the React ecosystem. In my free time, I love watching Horror movies, read manga and listen to music.",
    experience: [
      {
        id: '0',
        company: 'InfinixSoft',
        position: 'React Developer',
        date_start: 'April 2022',
        date_end: 'Present',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        points: ['Developing from scratch and maintaining the user interface.', 'Optimizing the user experience.', 'SEO best practices.', 'Implementing responsive design on mobile websites.', 'Integration with APIs and databases.']
      }
    ],
    skills: [
      {
        id: '0',
        techName: 'ReactJS',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        id: '1',
        techName: 'NextJS',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        id: '2',
        techName: 'NodeJS',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: '3',
        techName: 'Express',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        id: '4',
        techName: 'TypeScript',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        id: '5',
        techName: 'JavaScript',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        id: '6',
        techName: 'TailwindCSS',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      },
      {
        id: '7',
        techName: 'MongoDB',
        techLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },

    ],
    projects: [
      {
        id: '0',
        projectName: 'Manga App',
        projectDescription: 'Aplicación web que muestra un listado de mangas que leí/estoy leyendo actualmente. Para ver los detalles de cada manga, hay que registrarse e iniciar sesión.',
        projectImg: '',
        projectLink: 'https://manga-app-lulu.vercel.app/',
        projectRepo: 'https://github.com/luanavjs/manga-app-frontend',
      }
    ]
  })
}
