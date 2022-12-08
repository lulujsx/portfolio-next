import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-pink">About</h3>
        <motion.img 
            src="https://i.imgur.com/D41Pm3w.jpg"
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
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-pink/70">little</span> background
            </h4>
            <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum, quibusdam vel voluptatum a, consequuntur doloribus nemo facere quasi laudantium officia minima ut natus ipsa harum obcaecati. Pariatur, eveniet impedit!
            </p>
        </div>
    </motion.div>
  )
}

export default About