import React, {useState, useEffect} from 'react'
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { IResponse } from '../types/IResponse'


export default function Home() {
  const [data, setData] = useState<IResponse>(Object)
    
  const callApi = async() => {
    console.log("data", data)
    try {
        fetch('/api/personalInfo')
        .then((res)=> res.json())
        .then((data) =>{
            setData(data)
        })
    }
    catch(err) {
        console.error(err)
    }
  }

  useEffect(() => {
    callApi();
  }, []);


  return (
    <div className=" bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
      <Head>
        <title>Luana Vallejos</title>
      </Head>
      {/* <Header/> */}
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
      <section id="about" className='snap-start'>
        <About data={data}/>
      </section>
      <section id="experience" className='snap-start'>
        <WorkExperience data={data.experience}/>
      </section>
      <section id="skills" className='snap-center'>
        <Skills data={data.skills}/>
      </section>
      <section id="projects" className='snap-start'>
        <Projects data={data.projects}/>
      </section>
      {/* <section id="contact" className="snap-start">
        <ContactMe/>
      </section> */}
        {/* <footer>
          <div className="my-10">
            <p>Made with love by Lulu</p>
          </div>
        </footer> */}
      
    </div>
  )
}
