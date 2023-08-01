import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-7 shrink-0 w-64 space-x-4 
        md:w-[600px] xl:w-[900px] snap-center cursor-pointer transition-opacity duration-200 overflow-hidden mt-20">
        {/* <motion.img 
            initial={{
                y:-100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{opacity: 1, y:0 }}
            viewport={{once: true}}
            src="https://i.imgur.com/D41Pm3w.jpg"
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            alt=""
        /> */}
        <div className="pr-5 md:px-10 max-w-3 break-words">
            <h4 className="text-4xl font-light">React Developer</h4>
            <p className="font-bold text-2xl mt-1">InfinixSoft</p>
            <p className="uppercase py-5 text-pink">March 2022 - April 2023</p>
            <p className='text-xs md:text-xl'>Developing and maintaining the user interface. Optimizing the user experience. SEO best practices. Implementing responsive design on mobile websites.
            Integration with APIs and databases.
            </p>
        </div>
    </article>
  )
}