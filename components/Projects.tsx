import React from 'react'
import { IProject } from '../types/IResponse'
import Link from "next/link"
import {motion} from "framer-motion"

type Props = {
  data: IProject[]
}

export default function Projects({data}: Props) {
  
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row xl:max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase lg:tracking-[20px] tracking-[15px] text-yellow xl:text-2xl text-xl font-press2p">Projects</h3>
      <div className="mt-9 xl:w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80 scale-90">
        {data?.map((project: IProject) =>(
          <div className="xl:mt-24 xl:w-screen flex-shrink-0 xl:mb-12 snap-center flex flex-col md:flex-row xl:flex-col
            space-y-5 items-center justify-center py-24 md:px-36 xl:scale-75 md:scale-100 scale-90" key={project.id}>
            <motion.img
              initial={{y:-300}}
              transition={{duration:1.2}}
              whileInView={{opacity:1, y: 0 }}
              viewport={{once: true}}
              src={project.image}
              className="rounded-xl xl:h-72 md:h-40 md:w-72 h-28 w-52 xl:w-[600px] object-cover" alt="project image" />
            <div className="flex flex-col items-center space-y-4 xl:space-y-10 
            px-0 md:px-10 xl:max-w-6xl max-w-sm">
              <h4 className="text-base md:text-xl xl:text-4xl font-semibold text-center">{project.name}</h4>
              <div className="px-2 md:-p-10">
                <p className='text-xs md:text-base xl:text-lg'>{project.description}</p>
                <Link href={project.link} target="_blank">
                  <button className='linkButton mt-4'>Link</button>
                </Link>
              </div>  
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full absolute  bg-pink/40  h-[500px] "/> */}
    </motion.div>
  )
}