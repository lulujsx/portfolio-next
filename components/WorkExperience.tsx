import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from "framer-motion"

type Props = {}

export default function WorkExperience({}: Props) {
  return ( 
  <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl font-press2p">Experience</h3>
      <div className="w-full flex space-x-5overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>

    </motion.div>
  )
}