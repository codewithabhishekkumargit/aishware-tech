import { Directive, ElementRef, HostListener, Input, inject, AfterViewInit } from '@angular/core'
import { gsap } from 'gsap'

@Directive({
  selector: '[magnetic]',
  standalone: true,
})
export class MagneticDirective implements AfterViewInit {
  private el = inject(ElementRef)
  @Input() magneticStrength = 0.3

  ngAfterViewInit() {
    const el = this.el.nativeElement
    el.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = this.el.nativeElement
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * this.magneticStrength
    const y = (e.clientY - rect.top - rect.height / 2) * this.magneticStrength
    gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' })
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const el = this.el.nativeElement
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' })
  }
}
