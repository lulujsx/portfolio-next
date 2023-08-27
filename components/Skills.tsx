import { motion } from "framer-motion";
import { ISkill } from '../types/IResponse'
import Skill from './Skill';

type Props = {
  directionLeft?: boolean,
  data: ISkill[]
}

export default function Skills({data}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-center mx-auto xl:mb-28 mb-10"
    >
      <h2 className="uppercase text-yellow tracking-[20px] text-xl md:text-2xl font-press2p mt-5">
        Skills
      </h2>

      <div className="flex flex-col">
        <h3 className="hidden md:block uppercase tracking-[3px] text-pink text-xs xl:text-lg xl:mt-7 xl:mb-20">
          Technologies i&apos;ve been using
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 xl:gap-9 mt-14 md:mt-9 xl:mt-0 justify-center mx-auto">
          {data?.map((skill: ISkill) => (
            <div className="flex justify-center items-center" key={skill.id}>
              <Skill skill={skill}/>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
