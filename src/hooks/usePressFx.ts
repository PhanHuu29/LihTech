import { useEffect } from 'react'

/** Hiệu ứng nổi + gợn sáng cho chuột, bàn phím và cảm ứng. */
export function usePressFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const selector = '.btn, .svc2, .liquid-surface, .opt, .seg label, .slots label, .icon-btn, .links a, .logo, .hero-contact-row a'
    const closest = (target: EventTarget | null) => (target as Element | null)?.closest<HTMLElement>(selector) || null
    const placeLight = (element: HTMLElement, clientX: number, clientY: number) => {
      const rect = element.getBoundingClientRect()
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top))
      element.style.setProperty('--press-x', `${x}px`)
      element.style.setProperty('--press-y', `${y}px`)
      element.style.setProperty('--liquid-x', `${x}px`)
      element.style.setProperty('--liquid-y', `${y}px`)
      element.style.setProperty('--liquid-rx', `${((.5 - y / rect.height) * 2).toFixed(2)}deg`)
      element.style.setProperty('--liquid-ry', `${((x / rect.width - .5) * 2.5).toFixed(2)}deg`)
    }
    const press = (event: MouseEvent) => {
      const element = closest(event.target)
      if (!element) return
      const rect = element.getBoundingClientRect()
      placeLight(element, event.detail ? event.clientX : rect.left + rect.width / 2, event.detail ? event.clientY : rect.top + rect.height / 2)
      element.classList.remove('is-pressed')
      void element.offsetWidth
      element.classList.add('is-pressed')
    }
    const move = (event: PointerEvent) => {
      const element = closest(event.target)
      if (element) placeLight(element, event.clientX, event.clientY)
    }
    const leave = (event: PointerEvent) => {
      const element = closest(event.target)
      if (!element || element.contains(event.relatedTarget as Node | null)) return
      element.style.setProperty('--liquid-x', '50%')
      element.style.setProperty('--liquid-y', '42%')
      element.style.setProperty('--liquid-rx', '0deg')
      element.style.setProperty('--liquid-ry', '0deg')
    }
    const finish = (event: AnimationEvent) => {
      if (event.animationName === 'press-glow' || event.animationName === 'liquid-pulse') (event.target as Element)?.classList.remove('is-pressed')
    }
    document.addEventListener('click', press)
    document.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerout', leave)
    document.addEventListener('animationend', finish)
    return () => { document.removeEventListener('click', press); document.removeEventListener('pointermove', move); document.removeEventListener('pointerout', leave); document.removeEventListener('animationend', finish) }
  }, [])
}
