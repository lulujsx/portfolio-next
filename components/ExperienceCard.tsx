import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
        md:w-[600px] xl:w-[900px] snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
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
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">React Developer</h4>
            <p className="font-bold text-2xl mt-1">InfinixSoft</p>
            <div className="flex space-x-2 my-2">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png" 
                    className="h-10 w-10 rounded-full"
                    alt=""/>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png" 
                    className="h-10 w-10 rounded-full "
                    alt=""/>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png" 
                    className="h-10 w-10 rounded-full "
                    alt=""/>
            </div>
            <p className="uppercase py-5 text-pink">April 2022 - Present</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Develop</li>
                <li>Develop</li>
                <li>Develop</li>
                <li>Develop</li>
            </ul>
        </div>
    </article>
  )
}