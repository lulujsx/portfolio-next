import {AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {motion} from "framer-motion"


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
            className="flex flex-row items-center">
            {/* Social Icons */}   
            <a href="https://github.com/luanavjs" target="_blank">
                <AiFillGithub size={40} className="text-gray"/>
            </a>
            <a href="https://github.com/luanavjs" target="_blank">
                <AiFillGithub size={40} className="text-gray"/>
            </a>
            <a href="https://github.com/luanavjs" target="_blank">
                <AiFillGithub size={40} className="text-gray"/>
            </a>
        </motion.div>

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
            className="flex flex-row items-center text-gray cursor-pointer"
        >
                <AiOutlineMail size={40}/>
                <p className="uppercase hidden md:inline-flex text-sm">Contact me</p>
        </motion.div>
    </header>
  )
}