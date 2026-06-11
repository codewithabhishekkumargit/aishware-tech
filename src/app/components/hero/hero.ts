import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagneticDirective } from '../../directives/magnetic.directive'
import { ScrollService } from '../../services/scroll.service'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MagneticDirective],
  templateUrl: './hero.html',
  styles: [`
    :host { display: block; }
    .aurora-blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.35; will-change: transform; }
    .aurora-1 { width: 600px; height: 600px; background: #6366f1; top: -10%; left: -5%; animation: aurora1 20s ease-in-out infinite; }
    .aurora-2 { width: 500px; height: 500px; background: #8b5cf6; top: 30%; right: -8%; animation: aurora2 25s ease-in-out infinite; }
    .aurora-3 { width: 450px; height: 450px; background: #06b6d4; bottom: -10%; left: 25%; animation: aurora3 18s ease-in-out infinite; }
    .aurora-4 { width: 350px; height: 350px; background: #a855f7; top: 15%; left: 45%; animation: aurora4 22s ease-in-out infinite; }
    @keyframes aurora1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(100px,-80px) scale(1.3); } 66% { transform: translate(-60px,60px) scale(0.9); } }
    @keyframes aurora2 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-80px,100px) scale(1.2); } 66% { transform: translate(60px,-40px) scale(0.9); } }
    @keyframes aurora3 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(50px,-100px) scale(0.9); } 66% { transform: translate(-90px,60px) scale(1.25); } }
    @keyframes aurora4 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-70px,-40px) scale(1.15); } 66% { transform: translate(80px,70px) scale(0.85); } }
    .word { display: inline-block; opacity: 0; }
    .scroll-indicator { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: rgba(255,255,255,.4); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; }
    .scroll-arrow { width: 1.25rem; height: 1.25rem; border-right: 2px solid rgba(255,255,255,.4); border-bottom: 2px solid rgba(255,255,255,.4); transform: rotate(45deg); animation: scrollBounce 2s ease-in-out infinite; }
    @keyframes scrollBounce { 0%,100% { transform: rotate(45deg) translate(0,0); opacity: 0.4; } 50% { transform: rotate(45deg) translate(4px,4px); opacity: 1; } }
  `],
})
export class HeroComponent implements AfterViewInit {
  headline = 'Enterprise Software Development That Scales Your Business'
  words = this.headline.split(' ')

  @ViewChild('particlesContainer') particlesContainer!: ElementRef

  private el = inject(ElementRef)
  private scroll = inject(ScrollService)

  ngAfterViewInit() {
    const hero = this.el.nativeElement.querySelector('.hero-section') as HTMLElement
    const glow = this.el.nativeElement.querySelector('.mouse-glow') as HTMLElement
    const isFinePointer = window.matchMedia('(pointer: fine)').matches

    if (isFinePointer) {
      hero.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        glow.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(99,102,241,.12), transparent 80%)`
      })

      hero.addEventListener('mousemove', (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15
        const y = (e.clientY / window.innerHeight - 0.5) * 15
        gsap.to('.parallax-layer', { x, y, duration: 1, ease: 'power2.out', overwrite: 'auto' })
      })
    }

    gsap.fromTo('.word',
      { y: 100, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.3 }
    )

    gsap.fromTo('.subheadline',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.4 }
    )

    gsap.fromTo('.cta-btn',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 1.8 }
    )

    this.createParticles()
  }

  scrollTo(section: string) {
    this.scroll.scrollTo(section)
  }

  createParticles() {
    const container = this.particlesContainer.nativeElement
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#a855f7', '#3b82f6']

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 8 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.opacity = `${Math.random() * 0.4 + 0.1}`
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px'
      container.appendChild(particle)

      gsap.to(particle, {
        y: -(30 + Math.random() * 60),
        x: -(15 + Math.random() * 30) + 15,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 3,
      })
    }
  }
}
