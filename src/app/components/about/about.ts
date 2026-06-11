import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollService } from '../../services/scroll.service'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class AboutComponent implements AfterViewInit {
  private el = inject(ElementRef)
  private scroll = inject(ScrollService)

  @ViewChild('textCol') textCol!: ElementRef
  @ViewChild('visualCol') visualCol!: ElementRef
  @ViewChild('statsRow') statsRow!: ElementRef
  @ViewChild('shapesContainer') shapesContainer!: ElementRef

  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '10+', label: 'Industries Served' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Years of Excellence' },
  ]

  trustSignals = [
    'ISO 27001 Certified',
    'SOC 2 Compliant',
    'GDPR Compliant',
    '250+ Engineers',
  ]

  ngAfterViewInit() {
    this.animateSection()
  }

  scrollTo(section: string) {
    this.scroll.scrollTo(section)
  }

  private animateSection() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(this.textCol.nativeElement, { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(this.textCol.nativeElement.querySelectorAll('.reveal-item'), { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, '-=0.4')
      .from(this.statsRow.nativeElement.querySelectorAll('.stat-card'), { y: 40, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.3')
      .from(this.visualCol.nativeElement, { x: 80, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')

    const shapes = this.shapesContainer.nativeElement.querySelectorAll('.shape')
    gsap.to(shapes, {
      y: (i) => (i % 2 === 0 ? -20 : 20),
      x: (i) => (i % 3 === 0 ? 15 : -15),
      rotation: (i) => (i % 2 === 0 ? 8 : -8),
      duration: 4 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3,
    })
  }
}
