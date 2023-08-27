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
      className="flex flex-col text-center mx-auto mb-28"
    >
      <h3 className="uppercase lg:tracking-[20px] tracking-[15px] text-yellow xl:text-2xl text-xl font-press2p my-5">Projects</h3>
      <div className='flex justify-center flex-wrap gap-9 xl:mt-16 mt-10'>
          {data?.map((project: IProject) =>(
            <div className="flex flex-col sm:w-[350px] px-10 xl:pb-16" key={project.id}>
                  <Link href={project.link} target="_blank" className="overflow-hidden hover:rounded-xl rounded-xl mb-3" >
                    <img
                      src={project.image}
                      className="h-[160px] rounded-xl object-cover cursor-pointer w-[100%] transition-[0.5s] hover:scale-[120%] hover:rounded-xl" alt="project image" />
                  </Link>
                  <div className="flex flex-col items-center ">
                    <h4 className="text-base md:text-xl xl:text-3xl font-semibold text-center">{project.name}</h4>
                    <div className="px-2 md:-p-10">
                      <p className='text-xs md:text-base xl:text-sm'>{project.description}</p>
                      <Link href={project.link} target="_blank">
                        <button className='linkButton mt-4 '>Link</button>
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