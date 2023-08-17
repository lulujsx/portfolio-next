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
      className="h-screen flex overflow-hidden flex-col text-center mx-auto "
    >
      <h3 className="uppercase lg:tracking-[20px] tracking-[15px] text-yellow xl:text-2xl text-xl font-press2p w-full my-5 xl:mt-10 xl:mb-16">Projects</h3>
      <div className='flex flex-row justify-evenly'>
        <div className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80 items-baseline justify-between gap-[6rem] px-10">
          {data?.map((project: IProject) =>(
            <div className="flex-shrink-0 snap-center flex flex-col md:flex-row xl:flex-col space-y-5 items-center justify-center max-w-[300px] mb-[88px] xl:mb-0" key={project.id}>
                <div className="overflow-hidden">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      width={600}
                      height={600}
                      className="rounded-xl xl:h-[200px] xl:w-[350px] h-52 w-72 object-cover cursor-pointer" alt="project image" />
                  </Link>
                </div>
                  <div className="flex flex-col items-center
                  px-0  xl:max-w-6xl max-w-sm">
                    <h4 className="text-base md:text-xl xl:text-3xl font-semibold text-center">{project.name}</h4>
                    <div className="px-2 md:-p-10">
                      <p className='text-xs md:text-base xl:text-md'>{project.description}</p>
                      <Link href={project.link} target="_blank">
                        <button className='linkButton mt-4'>Link</button>
                      </Link>
                    </div>  
                  </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full absolute  bg-pink/40  h-[500px] "/> */}
    </motion.div>
  )
}