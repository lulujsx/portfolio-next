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
    className="overflow-hidden max-w-full mx-auto text-center xl:mb-28 mb-16">
      <h2 className="uppercase lg:tracking-[20px] tracking-[15px] text-yellow lg:text-2xl text-xl font-press2p my-5">Experience</h2>
      <div className='flex flex-col text-left'>
        <div className="flex xl:justify-center xl:items-center space-x-2 overflow-x-scroll overflow-y-hidden px-10 xl:px-0 pb-[100px] xl:pb-0 snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80 xl:overflow-x-hidden">
          {data?.map((experience: IExperience)=> (
            <ExperienceCard experience={experience} key={experience.id}/>
          ))}
      </div>
      </div>

    </motion.div>
  )
}