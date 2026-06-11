import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) private platformId: object, private ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(this.platformId)
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger)
    }
  }

  get gsap() {
    return gsap
  }

  get ScrollTrigger() {
    return ScrollTrigger
  }

  fadeInUp(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...options,
    })
  }

  fadeInDown(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...options,
    })
  }

  fadeInScale(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...options,
    })
  }

  staggerReveal(elements: string | Element[], options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(elements, {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    })
  }

  wordReveal(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      y: '100%',
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      ...options,
    })
  }

  counterAnimation(element: string | Element, end: number, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      innerText: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { innerText: 1 },
      ...options,
    })
  }

  scaleIn(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.from(element, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...options,
    })
  }

  parallax(element: string | Element, options?: gsap.TweenVars) {
    if (!this.isBrowser) return
    return gsap.to(element, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: element as HTMLElement,
        scrub: true,
      },
      ...options,
    })
  }

  refresh() {
    if (!this.isBrowser) return
    ScrollTrigger.refresh()
  }

  kill() {
    if (!this.isBrowser) return
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}
