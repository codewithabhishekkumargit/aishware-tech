import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TiltDirective } from '../../directives/tilt.directive'
import { PROJECTS } from '../../data'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TiltDirective],
  templateUrl: './projects.html',
})
export class ProjectsComponent implements AfterViewInit {
  private el = inject(ElementRef)

  @ViewChild('heading') heading!: ElementRef
  @ViewChild('cardsContainer') cardsContainer!: ElementRef

  projects = PROJECTS

  gradients = [
    'from-emerald-600/30 to-emerald-900/30',
    'from-blue-600/30 to-blue-900/30',
    'from-purple-600/30 to-purple-900/30',
  ]

  ngAfterViewInit() {
    this.animateSection()
  }

  trackByTitle(_index: number, project: (typeof PROJECTS)[number]) {
    return project.title
  }

  onCardMouseMove(e: MouseEvent, card: HTMLElement) {
    const shine = card.querySelector('.shine') as HTMLElement
    if (!shine) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    shine.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 60%)`
    shine.style.opacity = '1'
  }

  onCardMouseLeave(card: HTMLElement) {
    const shine = card.querySelector('.shine') as HTMLElement
    if (!shine) return
    shine.style.opacity = '0'
  }

  private animateSection() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(this.heading.nativeElement, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from(this.cardsContainer.nativeElement.querySelectorAll('.project-card'), { y: 80, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, '-=0.3')
  }
}
