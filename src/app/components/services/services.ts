import { Component, AfterViewInit, inject, ElementRef } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TiltDirective } from '../../directives/tilt.directive'
import { SERVICES } from '../../data'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TiltDirective],
  templateUrl: './services.html',
  styles: [`
    .service-card { background: rgba(255,255,255,.03); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,.06); transition: border-color 0.4s ease, box-shadow 0.4s ease; }
    .service-card:hover { border-color: rgba(99,102,241,.3); box-shadow: 0 0 30px rgba(99,102,241,.08); }
    .gradient-border { position: relative; }
    .gradient-border::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4); opacity: 0; transition: opacity 0.4s ease; z-index: -1; mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; }
    .gradient-border:hover::before { opacity: 1; }
  `],
})
export class ServicesComponent implements AfterViewInit {
  readonly services = SERVICES

  private el = inject(ElementRef)

  ngAfterViewInit() {
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }
}
