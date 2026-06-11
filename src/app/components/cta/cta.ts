import { Component, AfterViewInit, ElementRef, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagneticDirective } from '../../directives/magnetic.directive'
import { ScrollService } from '../../services/scroll.service'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [MagneticDirective],
  styles: [`
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animated-gradient {
      background-size: 200% 200%;
      animation: gradient-shift 8s ease infinite;
    }
  `],
  templateUrl: './cta.html',
})
export class Cta implements AfterViewInit {
  private readonly el = inject(ElementRef)
  private readonly scroll = inject(ScrollService)

  scrollTo(section: string) {
    this.scroll.scrollTo(section)
  }

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
      },
    })
  }
}
