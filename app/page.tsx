import About from '../components/About'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { getPersonalInfo } from '../lib/personalInfo'

export default function Home() {
  const data = getPersonalInfo()

  return (
    <div className=" bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray/20 scrollbar-thumb-pink/80">
      {/* <Header/> */}
      <section id="hero">
        <Hero/>
      </section>
      <section id="about">
        <About data={data}/>
      </section>
      <section id="experience">
        <WorkExperience data={data.experience}/>
      </section>
      <section id="skills">
        <Skills data={data.skills}/>
      </section>
      <section id="projects">
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
