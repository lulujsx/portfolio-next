import React from 'react'
import { IProject } from '../types/IResponse'
import Link from "next/link"
import Image from 'next/image'
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
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row xl:max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase lg:tracking-[20px] tracking-[15px] text-yellow xl:text-2xl text-xl font-press2p">Projects</h3>
      <div className="xl:w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80 items-baseline justify-between gap-[6rem] px-10">
        {data?.map((project: IProject) =>(
          <div className="xl:mt-24 flex-shrink-0 xl:mb-12 snap-center flex flex-col md:flex-row xl:flex-col space-y-5 items-center justify-center py-24 max-w-[500px]" key={project.id}>
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  width={600}
                  height={600}
                  className="rounded-xl xl:h-80 xl:w-[600px] h-52 w-60 object-cover" alt="project image" />
              </div>
                <div className="flex flex-col items-center space-y-4 xl:space-y-10 
                px-0 md:px-10 xl:max-w-6xl max-w-sm">
                  <h4 className="text-base md:text-xl xl:text-4xl font-semibold text-center">{project.name}</h4>
                  <div className="px-2 md:-p-10">
                    <p className='text-xs md:text-base xl:text-lg h-[160px]'>{project.description}</p>
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