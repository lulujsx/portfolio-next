import { Portfolio } from '../types/portfolio'

export const personalInfo: Portfolio = {
  terminal: {
    user: 'luana',
    host: 'portfolio',
  },
  profile: {
    name: 'Luana Vallejos',
    role: 'Front End & Mobile Developer',
    location: 'Argentina',
    email: 'luanalorenavallejos@gmail.com',
    github: 'github.com/lulujsx',
    linkedin: 'linkedin.com/in/luanavallejos',
    intro:
      'Front End & Mobile Developer building user-facing applications for web and mobile. I work close to design and product, turning interfaces into accessible, responsive and maintainable code with React, Next.js and Flutter. Computer Science student at Universidad Nacional del Oeste.',
  },
  stack: [
    {
      id: 'frontend',
      label: 'frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Material UI', 'Tailwind CSS'],
    },
    {
      id: 'mobile',
      label: 'mobile',
      items: ['Flutter', 'Dart', 'React Native', 'Expo'],
    },
    {
      id: 'backend-data',
      label: 'backend & data',
      items: ['Node.js', 'REST APIs', 'SQL', 'Snowflake'],
    },
    {
      id: 'tools',
      label: 'tools',
      items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Figma'],
    },
    {
      id: 'testing',
      label: 'testing & automation',
      items: ['Playwright'],
    },
  ],
  experience: [
    {
      id: 'tecso',
      position: 'Front End & Mobile Developer',
      company: 'Tecso',
      date_start: 'Dec 2024',
      date_end: 'Present',
      badges: ['current'],
      highlights: [
        'Development and maintenance of **Skyloop**, a drone operations platform.',
        'Building web and mobile interfaces, integrating APIs and shipping new features in collaboration with design, backend and QA teams.',
      ],
      technologies: ['React', 'TypeScript', 'Flutter', 'Dart', 'Material UI', 'REST APIs', 'Git', 'Docker'],
    },
    {
      id: 'shalion',
      position: 'Automation Developer',
      company: 'Shalion',
      date_start: 'Mar 2024',
      date_end: 'Nov 2024',
      badges: [],
      highlights: [
        'Developed web scraping and automation solutions for e-commerce, focused on data extraction, processing and validation.',
        'Built scrapers for dynamic websites and ran quality checks to ensure reliable data.',
      ],
      technologies: ['Node.js', 'Playwright', 'JavaScript', 'SQL', 'Snowflake', 'Google Sheets'],
    },
    {
      id: 'infinixsoft',
      position: 'React Developer',
      company: 'InfinixSoft',
      date_start: 'Mar 2022',
      date_end: 'Mar 2023',
      badges: [],
      highlights: [
        'Developed and maintained responsive web interfaces, building reusable components and integrating APIs.',
        'Ensured a consistent user experience across devices and screen sizes.',
      ],
      technologies: ['React', 'Next.js', 'JavaScript', 'Git', 'REST APIs'],
    },
  ],
  projects: [
    {
      id: 'links-uno',
      name: 'Links UNO',
      description:
        'Hub that centralizes useful resources for Computer Science students at Universidad Nacional del Oeste: communication groups, study material, tutorials and more.',
      technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
      link: 'https://ntrs-links.vercel.app/',
      code: 'https://github.com/NTRS-UNO/ntrs-links',
    },
    {
      id: 'messenger-clone',
      name: 'Messenger clone',
      description:
        'Real-time messaging app with message notifications and alerts, plus creation and management of chat rooms and channels.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth'],
      link: 'https://github.com/lulujsx/messenger-clone',
      code: 'https://github.com/lulujsx/messenger-clone',
    },
    {
      id: 'bombo',
      name: 'Bombo',
      description: 'Community app with messaging, NFT ticketing and an artists and events newsletter.',
      technologies: [],
      link: 'https://wearebombo.com/',
      code: '',
    },
  ],
  education: [
    {
      id: 'uno',
      title: 'Computer Science',
      institution: 'Universidad Nacional del Oeste (UNO)',
      meta: ['Buenos Aires, Argentina', 'in progress'],
    },
  ],
  hobbies: ['music', 'cinema', 'gaming', 'learning new things'],
}

export function getPersonalInfo(): Portfolio {
  return personalInfo
}
