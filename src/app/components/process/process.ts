import { Component, Inject, PLATFORM_ID, afterNextRender } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS_STEPS } from '../../data'

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.html',
})
export class ProcessComponent {
  readonly steps = PROCESS_STEPS

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        gsap.registerPlugin(ScrollTrigger)
        this.initAnimations()
      }
    })
  }

  private initAnimations(): void {
    gsap.fromTo('.process-line-fill',
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      },
    )

    gsap.utils.toArray<HTMLElement>('.process-step').forEach(step => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    })
  }
}
