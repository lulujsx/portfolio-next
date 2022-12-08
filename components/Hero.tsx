import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, my name is Luana", "Programmer","Student"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img 
            src="https://i.imgur.com/M4zlnMH.jpg" 
            className="relative rounded-full h-32 w-32 mx-auto object-cover" 
            alt="My photo"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-pink pb-2 tracking-[15px]">Software Developer</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#d14888"/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>

        </div>
    </div>
  )
}