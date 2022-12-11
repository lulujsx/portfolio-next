import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </div>
  )
}