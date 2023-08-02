import {motion} from "framer-motion"
import { ISkill } from '../types/IResponse'

type Props = {
    directionLeft?: boolean,
    skill: ISkill
}

export default function Skill({directionLeft, skill}: Props) {
    const {tech_name, tech_logo} = skill
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            className="object-cover w-16 h-16 md:w-28 md:h-28 
            xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            src={tech_logo}/>
        <motion.div
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{duration: 1.7}}
            whileInView={{opacity: 1, x: 0}}
        >
            <h4 className="text-sm xl:text-xl">{tech_name}</h4>
        </motion.div>
    </div>
  )
}