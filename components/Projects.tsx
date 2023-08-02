import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4]
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row xl:max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute xl:top-24 top-20 uppercase lg:tracking-[20px] tracking-[15px] text-pink xl:text-2xl text-xl font-press2p">Projects</h3>
      <div className="break-words xl:w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
        {projects.map((project,index)=>(
          <div className="mt-9 md:mt-0 xl:mt-24 xl:w-screen flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center py-24 md:px-40" key={index}>
            <motion.img
              initial={{y:-300}}
              transition={{duration:1.2}}
              whileInView={{opacity:1, y: 0 }}
              viewport={{once: true}}
              src="https://i.imgur.com/cyr7Gxv.png"
              className="rounded-xl xl:h-96 h-28 w-52 xl:w-[600px] object-cover" alt="project image" />
            <div className="flex flex-col items-center space-y-4 xl:space-y-10 
            px-0 md:px-10 xl:max-w-6xl max-w-sm">
              <h4 className="text-md xl:text-4xl font-semibold text-center">Guides UNO</h4>
              <div className="px-2 md:-p-10">
                <p className='text-xs md:text-xl'>This is a project promoted by GNUno, which consists of a set of 'study plans' of different technologies for someone who is just starting out has a path to follow, together with resources such as videos, tutorials and recommended bibliography, in addition to the support that the community can give in telegram groups.</p>
                <button>Link</button>
              </div>  
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full absolute  bg-pink/40  h-[500px] "/> */}
    </motion.div>
  )
}