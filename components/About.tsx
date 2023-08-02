import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import { IResponse } from '../types/IResponse'

type Props = {
    data: IResponse
}

function About({data}: Props) {

    const {photo, about} = data

  return (
    <motion.div
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl font-press2p">About</h3>
        <motion.img 
            src={photo}
            initial={{
                x: -200
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{once:true}}
            className="hidden md:block -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-6 md:px-10 max-w-3 break-words">
            <h4 className="text-3xl md:text-4xl font-semibold">
                Hello, every-<span className="underline decoration-pink/70">nyan</span>!
            </h4>
            <p className="text-xs md:text-sm xl:text-xl">
                {about}
            </p>
        </div>
    </motion.div>
  )
}

export default About