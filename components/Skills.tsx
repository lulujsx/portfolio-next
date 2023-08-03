import { motion } from "framer-motion";
import { ISkill } from '../types/IResponse'
import Skill from './Skill';

type Props = {
  data: ISkill[]
}

export default function Skills({data}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase text-yellow tracking-[20px] text-xl md:text-2xl font-press2p">
        Skills
      </h3>

      <h3 className="hidden md:block absolute top-36 uppercase tracking-[3px] text-pink text-xs xl:text-xl xl:mt-7">
        Technologies i&apos;ve been using
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 xl:gap-9 mt-14 md:mt-9 xl:mt-0 justify-center mx-auto">
        {data?.map((skill: ISkill) => (
          <div className="flex justify-center items-center" key={skill.id}>
            <Skill skill={skill}/>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
