import { Component, ElementRef, AfterViewInit, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { METRICS, CLIENTS } from '../../data'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [],
  templateUrl: './trust.html',
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track { animation: marquee 30s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
  `],
})
export class TrustComponent implements AfterViewInit {
  readonly metrics = METRICS
  readonly clients = CLIENTS

  private el = inject(ElementRef)

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.metric-counter')
    counters.forEach((counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10)
      const suffix = counter.getAttribute('data-suffix') || ''
      const display = counter.querySelector('.counter-value') as HTMLElement

      if (!display) return

      const proxy = { value: 0 }

      gsap.to(proxy, {
        value: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          display.textContent = Math.round(proxy.value) + suffix
        },
      })
    })
  }
}
