import CommandLine from '../components/CommandLine'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Hobbies from '../components/Hobbies'
import Projects from '../components/Projects'
import Stack from '../components/Stack'
import TerminalSection from '../components/TerminalSection'
import TerminalWindow from '../components/TerminalWindow'
import Whoami from '../components/Whoami'
import { getPersonalInfo } from '../lib/personalInfo'

const sections = [
  { id: 'whoami', label: 'whoami' },
  { id: 'stack', label: 'stack' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
]

export default function Home() {
  const { terminal, profile, stack, experience, projects, education, hobbies } = getPersonalInfo()

  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-10 lg:py-14">
      <TerminalWindow terminal={terminal} sections={sections}>
        <TerminalSection id="whoami" terminal={terminal} command="whoami">
          <Whoami profile={profile} />
        </TerminalSection>

        <TerminalSection id="stack" terminal={terminal} command="cat stack.conf">
          <Stack data={stack} />
        </TerminalSection>

        <TerminalSection id="experience" terminal={terminal} command="cat experience.log">
          <Experience data={experience} />
        </TerminalSection>

        <TerminalSection id="projects" terminal={terminal} command="ls projects/">
          <Projects data={projects} />
        </TerminalSection>

        <TerminalSection id="education" terminal={terminal} command="cat education.txt">
          <Education data={education} />
        </TerminalSection>

        <TerminalSection id="hobbies" terminal={terminal} command="cat hobbies.txt">
          <Hobbies data={hobbies} />
        </TerminalSection>

        <CommandLine terminal={terminal} caret />
      </TerminalWindow>
    </main>
  )
}
