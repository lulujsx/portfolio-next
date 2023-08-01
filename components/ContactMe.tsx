
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {SiLetterboxd} from "react-icons/si"
import {motion} from "framer-motion"

type Props = {

}

export default function ContactMe({}: Props) {


  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-pink text-2xl font-press2p">Contact</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">Let's <span className="decoration-pink/80 underline">connect!</span></h4>
        </div>
        <motion.div
            initial={{
                x: 200
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{once:true}}
            className="flex flex-row items-center gap-5 text-pink">
            <a href="https://github.com/lulujsx" target="_blank">
                <AiFillGithub size={100}/>
            </a>
            <a href="https://www.linkedin.com/in/luanavallejos/" target="_blank">
                <FaLinkedin size={100}/>
            </a>
            <a href="https://www.letterboxd.com/luluxita" target="_blank">
                <SiLetterboxd size={100}/>
            </a>
        </motion.div>
    </div>
  )
}