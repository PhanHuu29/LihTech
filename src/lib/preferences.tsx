import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { CONFIG } from '../config'

export type Language = 'vi' | 'en'
export type Theme = 'light' | 'dark'
export type Translate = (vi: string, en: string) => string
const read = (key: string) => { try { return localStorage.getItem(key) } catch { return null } }
const storage = (name: string) => read(`lihtech.${name}`)
const initialLanguage = (): Language => storage('language') === 'en' ? 'en' : storage('language') === 'vi' ? 'vi' : CONFIG.defaultLanguage
const initialTheme = (): Theme => {
  const stored = storage('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return CONFIG.defaultTheme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : CONFIG.defaultTheme
}
interface Preferences {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  toggleTheme: () => void
  tr: Translate
}
const C = createContext<Preferences>({ language: 'vi', setLanguage: () => {}, theme: 'light', toggleTheme: () => {}, tr: (vi) => vi })
export const usePreferences = () => useContext(C)

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [manualTheme, setManualTheme] = useState(() => !!storage('theme'))
  useEffect(() => {
    document.documentElement.lang = language
    try { localStorage.setItem('lihtech.language', language) } catch { /* still usable */ }
  }, [language])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071126' : '#eef2f8')
    if (manualTheme) { try { localStorage.setItem('lihtech.theme', theme) } catch { /* still usable */ } }
  }, [theme, manualTheme])
  useEffect(() => {
    if (manualTheme || CONFIG.defaultTheme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const change = () => setTheme(media.matches ? 'dark' : 'light')
    media.addEventListener('change', change)
    return () => media.removeEventListener('change', change)
  }, [manualTheme])
  const toggleTheme = () => { setManualTheme(true); setTheme((old) => old === 'light' ? 'dark' : 'light') }
  return <C.Provider value={{ language, setLanguage, theme, toggleTheme, tr: (vi, en) => language === 'vi' ? vi : en }}>{children}</C.Provider>
}
