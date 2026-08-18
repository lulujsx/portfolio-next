'use client'

import { useEffect, useSyncExternalStore } from 'react'
import CommandLine from './CommandLine'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Stack from './Stack'
import TerminalSection from './TerminalSection'
import TerminalWindow from './TerminalWindow'
import Whoami from './Whoami'
import { getPersonalInfo, getUiCopy } from '../lib/personalInfo'
import { Locale } from '../types/portfolio'

const STORAGE_KEY = 'portfolio-locale'

const sections = [
  { id: 'whoami', label: 'whoami' },
  { id: 'stack', label: 'stack' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
]

const listeners = new Set<() => void>()

function readStoredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored
  if (window.navigator.language.toLowerCase().startsWith('es')) return 'es'
  return 'en'
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

function getLocaleSnapshot(): Locale {
  return readStoredLocale()
}

function getServerLocaleSnapshot(): Locale {
  return 'en'
}

function setLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next)
  listeners.forEach((listener) => listener())
}

export default function Portfolio() {
  const locale = useSyncExternalStore(subscribe, getLocaleSnapshot, getServerLocaleSnapshot)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const { terminal, profile, stack, experience, projects, education } = getPersonalInfo(locale)
  const labels = getUiCopy(locale)

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en')
  }

  return (
    <TerminalWindow
      terminal={terminal}
      sections={sections}
      locale={locale}
      labels={labels}
      onToggleLocale={toggleLocale}
    >
      <TerminalSection id="whoami" terminal={terminal} command="whoami">
        <Whoami profile={profile} labels={labels} />
      </TerminalSection>

      <TerminalSection id="stack" terminal={terminal} command="cat stack.conf">
        <Stack data={stack} />
      </TerminalSection>

      <TerminalSection id="experience" terminal={terminal} command="cat experience.log">
        <Experience data={experience} labels={labels} />
      </TerminalSection>

      <TerminalSection id="projects" terminal={terminal} command="ls projects/">
        <Projects data={projects} labels={labels} />
      </TerminalSection>

      <TerminalSection id="education" terminal={terminal} command="cat education.txt">
        <Education data={education} />
      </TerminalSection>

      <CommandLine terminal={terminal} caret />
    </TerminalWindow>
  )
}
