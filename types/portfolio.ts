export interface Portfolio {
  terminal: TerminalIdentity
  profile: Profile
  stack: StackCategory[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  hobbies: string[]
}

export interface TerminalIdentity {
  user: string
  host: string
}

export interface Profile {
  name: string
  role: string
  location: string
  email: string
  github: string
  linkedin: string
  intro: string
}

export interface StackCategory {
  id: string
  label: string
  items: string[]
}

export interface Experience {
  id: string
  position: string
  company: string
  date_start: string
  date_end: string
  badges: string[]
  /** Bullet points. `**text**` is rendered with emphasis. */
  highlights: string[]
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link: string
  code: string
}

export interface Education {
  id: string
  title: string
  institution: string
  meta: string[]
}
