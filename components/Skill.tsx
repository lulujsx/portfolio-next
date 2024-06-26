import {motion} from "framer-motion"
import { ISkill } from '../types/IResponse'

type Props = {
    directionLeft?: boolean,
    skill: ISkill
}

export default function Skill({directionLeft, skill}: Props) {
    const {tech_name, tech_logo} = skill
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center gap-4 cursor-pointer">
        <motion.img
            className="object-cover w-16 h-16 md:w-20 md:h-20 
            xl:w-20 xl:h-20 hover:animate-pulse"
            src={tech_logo}/>
        
        <h4 className="text-sm xl:text-xl">{tech_name}</h4>
        
    </motion.div>
  )
}