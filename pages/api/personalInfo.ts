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
    about: "My name is Luana, and I'm a 26 y.o. who loves coding! I grew up with a computer for as long as I can remember. I really enjoyed surfing the web, playing flash games, and using all the social networks that existed. I made my first webpage in 2008! It was about my dog and used a website builder that allowed personalization with static HTML and CSS. All my life I felt comfortable using software for study, art, work and doing anything I set my mind to, that is why I'm so passionate about  <span className='text-yellow'>♡ technology ♡</span> I also love the entire process of creating my own apps, handling client-side and server-side development, working with databases, and deploying them. I often find myself treating my developer journey more like a scrapbook adventure than a structured plan. My current goal is to become a cross-platform mobile developer and learn all about UI design.",
    experience: [
      {
        id: '0',
        company: 'Shalion',
        position: 'JavaScript Developer',
        date_start: 'March 2024',
        date_end: 'Present',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        description: "Development and maintenance of JavaScript templates to do web scraping to accurately and efficiently extract data on eCommerce sites."
      },
      {
        id: '2',
        company: 'PochitamaDevs',
        position: 'FrontEnd Developer',
        date_start: 'August 2023',
        date_end: 'February 2024',
        technologies: [],
        description: 'I joined a project to build a hybrid mobile application and web using React and Ionic components.'
      },
      {
        id: '3',
        company: 'InfinixSoft',
        position: 'React Developer',
        date_start: 'March 2022',
        date_end: 'April 2023',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        description: "Developing and maintaining the user interface. Optimizing the user experience. Implementing responsive design on mobile websites. Integration with APIs and databases."
      },
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
        id: '1.2',
        tech_name: 'React Native',
        tech_logo: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
      },
      {
        id: '1.3',
        tech_name: 'Android Studio',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
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
        tech_name: 'Playwright',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
      },
      {
        id: '6.2',
        tech_name: 'Firebase',
        tech_logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
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
        name: 'Links UNO',
        description: "Our website centralizes useful resources for Computer Science students at the National University of the West (UNO). Includes links to communication groups, Discord study material, YouTube channels with tutorials, and more.",
        image: '/project_links.png',
        alt: 'college project 1 - links',
        link: 'https://ntrs-links.vercel.app/',
        code: 'https://github.com/NTRS-UNO/ntrs-links',
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
        name: 'Bombo',
        description: "Community app, messaging, NFT ticketing, artists and events newsletter.",
        image: '/project_bombo.png',
        link: 'https://wearebombo.com/',
        code: '', 
      },
      

    ]
  })
}
