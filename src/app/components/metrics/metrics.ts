import { Component, AfterViewInit, ElementRef, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { METRICS } from '../../data'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-metrics',
  standalone: true,
  templateUrl: './metrics.html',
})
export class Metrics implements AfterViewInit {
  protected readonly metrics = METRICS
  private readonly el = inject(ElementRef)

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.metric-value')
    counters.forEach((el: HTMLElement) => {
      const target = parseInt(el.dataset['target'] || '0', 10)
      const suffix = el.dataset['suffix'] || ''
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.closest('.metric-card'),
          start: 'top 85%',
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString() + suffix
        },
      })
    })

    gsap.from(this.el.nativeElement.querySelectorAll('.metric-card, .chart-placeholder'), {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
      },
    })
  }
}
