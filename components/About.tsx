import React from 'react'
import {motion} from "framer-motion"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
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
        className="flex flex-col text-center md:text-left xl:mb-28 mb-10">
        <h2 className="uppercase tracking-[20px] text-yellow text-2xl font-press2p text-center my-5 xl:mt-10">About</h2>
        <div className="flex px-10 justify-evenly mx-auto items-center xl:px-52">
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
                className="hidden md:block w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-96 xl:h-96"
            />
            <div className="md:px-10 max-w-3 break-words flex flex-col items-center xl:items-start">
                    <h4 className="text-3xl md:text-4xl font-semibold mb-3">
                        Hello, every-<span className="underline decoration-pink">nyan</span>!<span className='text-pink'> ♡</span>
                    </h4>
                    <p className="text-sm xl:text-lg" dangerouslySetInnerHTML={{ __html: about }}>
                       
                    </p>
                <div className='flex flex-row items-center gap-5 text-pink my-7'>
                    <a href="https://github.com/lulujsx" target="_blank">
                        <AiFillGithub className="text-4xl xl:text-5xl hover:text-yellow hover:animate-bounce"/>
                    </a>
                    <a href="https://www.linkedin.com/in/luanavallejos/" target="_blank">
                        <FaLinkedin className="text-4xl xl:text-5xl hover:text-yellow hover:animate-bounce"/>
                    </a>
                    <a href="mailto:luanalorenavallejos@gmail.com" target="_blank">
                        <AiOutlineMail className="text-4xl xl:text-5xl hover:text-yellow hover:animate-bounce"/>
                    </a>
                </div>
                <img src="https://media4.giphy.com/media/IQebREsGFRXmo/giphy.gif" alt="pokemon mew gif" className="h-[100px] md:h-[150px] block md:hidden"/>
            </div>
        </div>
    </motion.div>
  )
}

export default About