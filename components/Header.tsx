import {AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {ImTwitch} from "react-icons/im"
import {motion} from "framer-motion"
import Link from "next/link"


type Props = {}

export default function ({}: Props) {
  return (
    <header className="flex items-start justify-between sticky top-0 max-w-7xl mx-auto z-20 p-5 xl:items-center">
        
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,

            }}
            className="flex flex-row items-center gap-5 text-pink">
            <a href="https://github.com/luanavjs" target="_blank">
                <AiFillGithub size={42}/>
            </a>
            <a href="https://www.linkedin.com/in/luanavallejos/" target="_blank">
                <FaLinkedin size={40}/>
            </a>
            <a href="https://www.twitch.tv/grinderbunny" target="_blank">
                <ImTwitch size={35}/>
            </a>
        </motion.div>
        <Link href="#contact">
            <motion.div
                initial={{
                    x: 500,
                    opacity:0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center text-pink cursor-pointer gap-2"
            >
                    <AiOutlineMail size={40}/>
                    <p className="uppercase hidden md:inline-flex text-sm">Contact me</p>
            </motion.div>
        </Link>
    </header>
  )
}