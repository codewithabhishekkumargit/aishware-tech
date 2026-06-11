import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core'

@Directive({
  selector: '[tilt]',
  standalone: true,
})
export class TiltDirective {
  private el = inject(ElementRef)
  @Input() tiltDegree = 8
  @Input() tiltScale = 1.02

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = this.el.nativeElement
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (y - 0.5) * this.tiltDegree
    const tiltY = (x - 0.5) * -this.tiltDegree
    el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${this.tiltScale},${this.tiltScale},${this.tiltScale})`
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const el = this.el.nativeElement
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const el = this.el.nativeElement
    el.style.transition = 'transform 0.1s ease-out'
  }
}
