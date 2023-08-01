import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl font-press2p">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
        {projects.map((project,index)=>(
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={index}>
            <motion.img
              initial={{y:-300}}
              transition={{duration:1.2}}
              whileInView={{opacity:1, y: 0 }}
              viewport={{once: true}}
              src="https://i.imgur.com/D41Pm3w.jpg"
              className="rounded-xl h-96 object-cover" alt="project image" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">Name of project</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque dignissimos blanditiis magni deleniti illo nesciunt adipisci ipsam minima aliquid laudantium sunt unde ipsum, excepturi ut mollitia officia, totam temporibus!</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-pink/40 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}