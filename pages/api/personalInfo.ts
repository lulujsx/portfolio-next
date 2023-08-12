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
    photo: 'https://i.pinimg.com/564x/af/38/3f/af383f48f2d3ea0ae5bd7b505d22c2c9.jpg',
    about: "I'm from Buenos Aires, Argentina. I study Computer Science B.Sc. at Universidad Nacional Del Oeste. Passionate about web, design, problem solving and everything related to computing. During my last job, I have gained valuable experience working as a frontend developer with a focus on the React ecosystem. I am eager to continue growing as a fullstack developer, exploring new technologies, taking new challanges and delivering exceptional user experiences. In my free time, I love watching Horror movies, read manga and listen to music.",
    experience: [
      {
        id: '0',
        company: 'InfinixSoft',
        position: 'React Developer',
        date_start: 'March 2022',
        date_end: 'April 2023',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        description: "Developing and maintaining the user interface. Optimizing the user experience. SEO best practices. Implementing responsive design on mobile websites. Integration with APIs and databases."
      },
      {
        id: '1',
        company: 'Estetic Laser',
        position: 'Graphic Designer',
        date_start: 'February 2019',
        date_end: 'July 2021',
        technologies: [],
        description: 'Create engaging and shareable social media posts, including static images, animated graphics, infographics, short videos, and other visual assets for branding. Raw photo editing and retouching.'
      }
    ],
    skills: [
      {
        id: '0',
        tech_name: 'ReactJS',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        id: '1',
        tech_name: 'NextJS',
        tech_logo: 'https://i.imgur.com/2zLQtbE.png',
      },
      {
        id: '2',
        tech_name: 'NodeJS',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: '3',
        tech_name: 'Express',
        tech_logo: 'https://i.imgur.com/pRtyttv.png',
      },
      {
        id: '4',
        tech_name: 'TypeScript',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        id: '5',
        tech_name: 'JavaScript',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        id: '6',
        tech_name: 'TailwindCSS',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      },
      {
        id: '7',
        tech_name: 'MongoDB',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },

    ],
    projects: [
      {
        id: '0',
        name: 'Guides UNO',
        description: "This is a project promoted by GNUno, which consists of a set of 'study plans' of different technologies for someone who is just starting out has a path to follow, together with resources such as videos, tutorials and recommended bibliography.",
        image: '/project_gnunoguides.png',
        alt: 'college project 1 - roadmaps',
        link: 'https://autodidactauno.vercel.app/',
        code: 'https://github.com/lulujsx/web-guides-uno',
      },
      {
        id: '2',
        name: 'Messenger clone',
        description: "Real-time messaging using Pusher. Message notifications and alerts. Creating and managing chat rooms and channels",
        image: '/project_gnunoguides.png',
        link: 'https://soyautodidacta.vercel.app/',
        code: 'https://github.com/luanavjs/manga-app-frontend',
      },
      {
        id: '3',
        name: 'Messenger clone',
        description: "Real-time messaging using Pusher. Message notifications and alerts. Creating and managing chat rooms and channels",
        image: '/project_gnunoguides.png',
        link: 'https://soyautodidacta.vercel.app/',
        code: 'https://github.com/luanavjs/manga-app-frontend', 
      },
      {
        id: '4',
        name: 'Messenger clone',
        description: "Real-time messaging using Pusher. Message notifications and alerts. Creating and managing chat rooms and channels",
        image: '/project_gnunoguides.png',
        link: 'https://soyautodidacta.vercel.app/',
        code: 'https://github.com/luanavjs/manga-app-frontend',
      }
      
    ]
  })
}
