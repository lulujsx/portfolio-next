export interface IResponse {
    name: string,
    tags: string,
    photo: string,
    about: string,
    experience: IExperience[],
    skills: ISkill[],
    projects: IProject[]
}

export interface IExperience {
    id: string,
    company: string,
    position: string,
    date_start: string,
    date_end: string,
    technologies: string[],
    description: string
}

export interface ISkill {
    id: string,
    tech_name: string,
    tech_logo: string,
}

export interface IProject {
    id: string,
    name: string,
    description: string,
    image: string,
    link: string,
    code: string,
}