import React, {useState, useEffect} from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from "framer-motion"
import { IExperience, IResponse } from '../types/IResponse'

type Props = {
  data: IExperience[] 
}

export default function WorkExperience({data}: Props) {

  return ( 
  <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase lg:tracking-[20px] tracking-[15px] text-yellow lg:text-2xl text-xl font-press2p">Experience</h3>
      <div className="w-full flex xl:justify-center xl:items-center space-x-2overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80 xl:overflow-x-hidden">
        {data?.map((experience: IExperience)=> (
          <ExperienceCard experience={experience} key={experience.id}/>
        ))}
      </div>

    </motion.div>
  )
}