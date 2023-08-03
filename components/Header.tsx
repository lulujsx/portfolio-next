import {AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {ImTwitch} from "react-icons/im"
import {motion} from "framer-motion"
import Link from "next/link"


type Props = {}

export default function Header({}: Props) {
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
            <Link href="#hero" className="text-2xl">
                
            </Link>
        </motion.div>
        {/* <Link href="#contact">
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
        </Link> */}
    </header>
  )
}