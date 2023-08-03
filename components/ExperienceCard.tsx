import React from 'react'
import {motion} from "framer-motion"
import { IExperience, IResponse } from '../types/IResponse'

type Props = {
    experience: IExperience
}

export default function ExperienceCard({experience}: Props) {
    const {company,position,date_start,date_end,description} = experience
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-7 shrink-0 w-64 space-x-4 
        md:w-[600px] xl:w-[500px] snap-center cursor-pointer transition-opacity duration-200 overflow-hidden mt-20">
        <div className="pr-5 md:px-10 max-w-3 break-words">
            <h4 className="text-4xl font-light">{position}</h4>
            <p className="font-bold text-2xl mt-1 text-yellow">{company}</p>
            <p className="uppercase py-5 text-pink">{date_start} - {date_end}</p>
            <p className='text-xs md:text-xl'>{description}</p>
        </div>
    </article>
  )
}