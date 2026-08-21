import { Locale, Portfolio, UiCopy } from '../types/portfolio'

const terminal = {
  user: 'lulu',
  host: 'Dev-Portfolio',
} as const

const github = 'github.com/lulujsx'
const linkedin = 'linkedin.com/in/luanavallejos'

const stackItems = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  mobile: ['Flutter', 'Dart', 'React Native', 'Expo'],
  backend: ['Node.js', 'REST APIs', 'SQL', 'Snowflake'],
  tools: ['Git', 'GitHub', 'GitLab', 'Docker', 'Figma'],
  testing: ['Jest', 'Testing Library', 'Playwright'],
}

const tech = {
  tecso: ['React', 'TypeScript', 'Flutter', 'Dart', 'Material UI', 'REST APIs', 'Git', 'Docker'],
  freelance: ['React', 'Ionic', 'JavaScript', 'Git'],
  shalion: ['Node.js', 'Playwright', 'JavaScript', 'SQL', 'Snowflake', 'Google Sheets'],
  infinixsoft: ['React', 'Next.js', 'JavaScript', 'Git', 'REST APIs'],
}

const projectsShared = {
  'links-uno': {
    name: 'Links UNO',
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://ntrs-links.vercel.app/',
    code: 'https://github.com/NTRS-UNO/ntrs-links',
  },
  'messenger-clone': {
    name: 'Messenger clone',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    link: 'https://github.com/lulujsx/messenger-clone',
    code: 'https://github.com/lulujsx/messenger-clone',
  },
  bombo: {
    name: 'Bombo',
    technologies: [] as string[],
    link: 'https://wearebombo.com/',
    code: '',
  },
}

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    location: 'location',
    github: 'github',
    linkedin: 'linkedin',
    tech: 'tech',
    live: 'live',
    code: 'code',
    current: 'current',
    sections: 'Sections',
    switchLanguage: 'Switch to Spanish',
  },
  es: {
    location: 'ubicación',
    github: 'github',
    linkedin: 'linkedin',
    tech: 'tech',
    live: 'demo',
    code: 'código',
    current: 'actual',
    sections: 'Secciones',
    switchLanguage: 'Cambiar a inglés',
  },
}

export const personalInfo: Record<Locale, Portfolio> = {
  en: {
    terminal,
    profile: {
      name: 'Luana Vallejos',
      role: 'Front End & Mobile Developer',
      location: 'Argentina',
      github,
      linkedin,
      intro:
        'Front End & Mobile Developer building user-facing applications for web and mobile. I work close to design and product, turning interfaces into accessible, responsive and maintainable code with React, Next.js and Flutter. Computer Science student at Universidad Nacional del Oeste.',
    },
    stack: [
      { id: 'frontend', label: 'frontend', items: stackItems.frontend },
      { id: 'mobile', label: 'mobile', items: stackItems.mobile },
      { id: 'backend-data', label: 'backend & data', items: stackItems.backend },
      { id: 'tools', label: 'tools', items: stackItems.tools },
      { id: 'testing', label: 'testing & automation', items: stackItems.testing },
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
        technologies: tech.tecso,
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
        technologies: tech.shalion,
      },
      {
        id: 'freelance',
        position: 'Front End Developer',
        company: 'Freelance',
        date_start: 'Aug 2023',
        date_end: 'Feb 2024',
        badges: [],
        highlights: [
          'Developed a **job portal** as a hybrid web and mobile application using React and Ionic.',
          'Built shared UI components and flows that worked across the web experience and the mobile app.',
        ],
        technologies: tech.freelance,
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
        technologies: tech.infinixsoft,
      },
    ],
    projects: [
      {
        id: 'links-uno',
        ...projectsShared['links-uno'],
        description:
          'Hub that centralizes useful resources for Computer Science students at Universidad Nacional del Oeste: communication groups, study material, tutorials and more.',
      },
      {
        id: 'messenger-clone',
        ...projectsShared['messenger-clone'],
        description:
          'Real-time messaging app with message notifications and alerts, plus creation and management of chat rooms and channels.',
      },
      {
        id: 'bombo',
        ...projectsShared.bombo,
        description: 'Community app with messaging, NFT ticketing and an artists and events newsletter.',
      },
    ],
    education: [
      {
        id: 'uno',
        title: "B.Sc. in Computer Science",
        institution: 'Universidad Nacional del Oeste',
        meta: ['Buenos Aires, Argentina', 'in progress'],
      },
    ],
  },
  es: {
    terminal,
    profile: {
      name: 'Luana Vallejos',
      role: 'Desarrolladora Front End y Mobile',
      location: 'Argentina',
      github,
      linkedin,
      intro:
        'Desarrolladora Front End y Mobile. Construyo aplicaciones web y móviles orientadas a la persona usuaria. Trabajo cerca de diseño y producto, transformando interfaces en código accesible, responsive y mantenible con React, Next.js y Flutter. Estudiante de Informática en la Universidad Nacional del Oeste.',
    },
    stack: [
      { id: 'frontend', label: 'frontend', items: stackItems.frontend },
      { id: 'mobile', label: 'mobile', items: stackItems.mobile },
      { id: 'backend-data', label: 'backend y datos', items: stackItems.backend },
      { id: 'tools', label: 'herramientas', items: stackItems.tools },
      { id: 'testing', label: 'testing y automatización', items: stackItems.testing },
    ],
    experience: [
      {
        id: 'tecso',
        position: 'Desarrolladora Front End y Mobile',
        company: 'Tecso',
        date_start: 'Dic 2024',
        date_end: 'Present',
        badges: ['current'],
        highlights: [
          'Desarrollo y mantenimiento de **Skyloop**, una plataforma de operaciones de drones.',
          'Construcción de interfaces web y móviles, integración de APIs y desarrollo de nuevas funcionalidades junto a los equipos de diseño, backend y QA.',
        ],
        technologies: tech.tecso,
      },
      {
        id: 'shalion',
        position: 'Desarrolladora de Automatización',
        company: 'Shalion',
        date_start: 'Mar 2024',
        date_end: 'Nov 2024',
        badges: [],
        highlights: [
          'Desarrollé soluciones de web scraping y automatización para e-commerce, con foco en extracción, procesamiento y validación de datos.',
          'Construí scrapers para sitios dinámicos y realicé controles de calidad para asegurar datos confiables.',
        ],
        technologies: tech.shalion,
      },
      {
        id: 'freelance',
        position: 'Desarrolladora Front End',
        company: 'Freelance',
        date_start: 'Ago 2023',
        date_end: 'Feb 2024',
        badges: [],
        highlights: [
          'Desarrollé un **portal de empleo** como aplicación híbrida web y mobile con React e Ionic.',
          'Construí componentes y flujos de UI compartidos para la experiencia web y la app móvil.',
        ],
        technologies: tech.freelance,
      },
      {
        id: 'infinixsoft',
        position: 'Desarrolladora React',
        company: 'InfinixSoft',
        date_start: 'Mar 2022',
        date_end: 'Mar 2023',
        badges: [],
        highlights: [
          'Desarrollé y mantuve interfaces web responsive, construyendo componentes reutilizables e integrando APIs.',
          'Aseguré una experiencia de usuario consistente en distintos dispositivos y tamaños de pantalla.',
        ],
        technologies: tech.infinixsoft,
      },
    ],
    projects: [
      {
        id: 'links-uno',
        ...projectsShared['links-uno'],
        description:
          'Sitio que centraliza recursos útiles para estudiantes de Informática de la Universidad Nacional del Oeste: grupos de comunicación, material de estudio, tutoriales y más.',
      },
      {
        id: 'messenger-clone',
        ...projectsShared['messenger-clone'],
        description:
          'App de mensajería en tiempo real con notificaciones y alertas, más creación y gestión de salas y canales de chat.',
      },
      {
        id: 'bombo',
        ...projectsShared.bombo,
        description: 'App de comunidad con mensajería, ticketing NFT y un newsletter de artistas y eventos.',
      },
    ],
    education: [
      {
        id: 'uno',
        title: 'Licenciatura en Informática',
        institution: 'Universidad Nacional del Oeste',
        meta: ['Buenos Aires, Argentina', 'en curso'],
      },
    ],
  },
}

export function getPersonalInfo(locale: Locale): Portfolio {
  return personalInfo[locale]
}

export function getUiCopy(locale: Locale): UiCopy {
  return uiCopy[locale]
}
