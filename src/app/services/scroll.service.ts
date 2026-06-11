import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private lenis: Lenis | null = null
  private isBrowser: boolean

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  init(): void {
    if (!this.isBrowser || this.lenis) return

    gsap.registerPlugin(ScrollTrigger)

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      })

      this.lenis.on('scroll', ScrollTrigger.update)

      const raf = (time: number) => {
        this.lenis?.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
  }

  scrollTo(target: string | HTMLElement): void {
    if (!this.isBrowser) return

    const el = typeof target === 'string' ? document.getElementById(target) : target
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - 80

    if (this.lenis) {
      this.lenis.scrollTo(top, { duration: 1.2 })
    } else {
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  destroy(): void {
    this.lenis?.destroy()
    this.lenis = null
  }
}
