import {motion} from "framer-motion"

type Props = {
    directionLeft?: boolean
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            className="rounded-full border border-pink object-cover w-16 h-16 md:w-28 md:h-28 
            xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
        <motion.div
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{duration: 1.7}}
            whileInView={{opacity: 1, x: 0}}
        >
            <h4 className="text-sm xl:text-xl">TypeScript</h4>
        </motion.div>
    </div>
  )
}