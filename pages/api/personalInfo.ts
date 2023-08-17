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
    about: "I am a software developer based in Buenos Aires, Argentina, who is passionate about modern technologies and creative ways of solving problems. In addition to fullstack web development I love experimenting with mobile apps, UI/UX, and modern tech stacks and software architectures.",
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
        description: "This is a project promoted by GNUno, study plans as roadmaps with videos, tutorials and recommended bibliography.",
        image: '/project_gnunoguides.png',
        alt: 'college project 1 - roadmaps',
        link: 'https://autodidactauno.vercel.app/',
        code: 'https://github.com/lulujsx/web-guides-uno',
      },
      {
        id: '2',
        name: 'Messenger clone',
        description: "Real-time messaging using Pusher. Message notifications and alerts. Creating and managing chat rooms and channels",
        image: '/project_messenger-clone.png',
        link: 'https://github.com/lulujsx/messenger-clone',
        code: 'https://github.com/lulujsx/messenger-clone',
      },
      {
        id: '3',
        name: 'Bombo Community',
        description: "Community app, messaging, NFT ticketing, artists and events newsletter.",
        image: '/project_bombo.png',
        link: 'https://wearebombo.com/',
        code: '', 
      },
      

    ]
  })
}
