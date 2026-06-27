import { useState, useEffect } from 'react'

function getInitialDark(): boolean {
  try {
    const stored = localStorage.getItem('tipco-theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    // No stored preference → use system
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

function applyDark(dark: boolean) {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

// Apply immediately (before paint) to avoid flash
applyDark(getInitialDark())

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialDark)

  // Apply class + persist whenever state changes
  useEffect(() => {
    applyDark(isDark)
    try {
      localStorage.setItem('tipco-theme', isDark ? 'dark' : 'light')
    } catch { /* storage blocked */ }
  }, [isDark])

  // Listen for OS-level preference changes (only when user hasn't set a preference)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('tipco-theme')
      if (!stored) setIsDark(e.matches)  // only auto-switch if no manual pick
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = () => setIsDark(d => !d)
  const setLight = () => setIsDark(false)
  const setDark  = () => setIsDark(true)

  return { isDark, toggle, setLight, setDark }
}
