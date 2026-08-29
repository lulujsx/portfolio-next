'use client'

import { useEffect, useSyncExternalStore } from 'react'
import AsciiNameBanner from './AsciiNameBanner'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Stack from './Stack'
import TerminalPrompt from './TerminalPrompt'
import TerminalSection from './TerminalSection'
import TerminalWindow from './TerminalWindow'
import Whoami from './Whoami'
import { getPersonalInfo, getUiCopy } from '../lib/personalInfo'
import { applyTheme, readStoredTheme, THEME_STORAGE_KEY } from '../lib/theme'
import { Locale, Theme } from '../types/portfolio'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

const sections = [
  { id: 'whoami', label: 'whoami' },
  { id: 'stack', label: 'stack' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
]

const localeListeners = new Set<() => void>()
const themeListeners = new Set<() => void>()

function readStoredLocale(): Locale {
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored
  if (window.navigator.language.toLowerCase().startsWith('es')) return 'es'
  return 'en'
}

function subscribeLocale(onStoreChange: () => void) {
  localeListeners.add(onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    localeListeners.delete(onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

function setLocale(next: Locale) {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
  localeListeners.forEach((listener) => listener())
}

function subscribeTheme(onStoreChange: () => void) {
  themeListeners.add(onStoreChange)
  window.addEventListener('storage', onStoreChange)
  const media = window.matchMedia('(prefers-color-scheme: light)')
  media.addEventListener('change', onStoreChange)
  return () => {
    themeListeners.delete(onStoreChange)
    window.removeEventListener('storage', onStoreChange)
    media.removeEventListener('change', onStoreChange)
  }
}

function setTheme(next: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, next)
  applyTheme(next)
  themeListeners.forEach((listener) => listener())
}

export default function Portfolio() {
  const locale = useSyncExternalStore(subscribeLocale, readStoredLocale, () => 'en' as Locale)
  const theme = useSyncExternalStore(subscribeTheme, readStoredTheme, () => 'dark' as Theme)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const { terminal, profile, stack, experience, projects, education } = getPersonalInfo(locale)
  const labels = getUiCopy(locale)

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en')
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <TerminalWindow
      terminal={terminal}
      sections={sections}
      locale={locale}
      theme={theme}
      labels={labels}
      onToggleLocale={toggleLocale}
      onToggleTheme={toggleTheme}
    >
      <TerminalSection
        id="whoami"
        terminal={terminal}
        command="whoami"
        title={labels.sectionAbout.title}
        subtitle={labels.sectionAbout.subtitle}
        afterCommand={<AsciiNameBanner />}
      >
        <Whoami profile={profile} labels={labels} />
      </TerminalSection>

      <TerminalSection
        id="stack"
        terminal={terminal}
        command="cat stack.conf"
        title={labels.sectionStack.title}
        subtitle={labels.sectionStack.subtitle}
      >
        <Stack data={stack} />
      </TerminalSection>

      <TerminalSection
        id="experience"
        terminal={terminal}
        command="cat experience.log"
        title={labels.sectionExperience.title}
        subtitle={labels.sectionExperience.subtitle}
      >
        <Experience data={experience} labels={labels} />
      </TerminalSection>

      <TerminalSection
        id="projects"
        terminal={terminal}
        command="ls projects/"
        title={labels.sectionProjects.title}
        subtitle={labels.sectionProjects.subtitle}
      >
        <Projects data={projects} labels={labels} />
      </TerminalSection>

      <TerminalSection
        id="education"
        terminal={terminal}
        command="cat education.txt"
        title={labels.sectionEducation.title}
        subtitle={labels.sectionEducation.subtitle}
      >
        <Education data={education} />
      </TerminalSection>

      <TerminalPrompt terminal={terminal} labels={labels.terminal} />
    </TerminalWindow>
  )
}
