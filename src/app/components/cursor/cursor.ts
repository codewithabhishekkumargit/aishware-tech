import { Component, signal, inject, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core'

import gsap from 'gsap'

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.html',
})
export class Cursor implements AfterViewInit {
  private readonly el = inject(ElementRef)

  @ViewChild('dot') dot!: ElementRef<HTMLElement>
  @ViewChild('ring') ring!: ElementRef<HTMLElement>

  protected readonly isVisible = signal(false)

  ngAfterViewInit(): void {
    gsap.set(this.dot.nativeElement, { x: 0, y: 0 })
    gsap.set(this.ring.nativeElement, { x: 0, y: 0 })
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.isVisible.set(true)
    gsap.to(this.dot.nativeElement, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
    gsap.to(this.ring.nativeElement, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out' })

    const target = e.target as HTMLElement
    if (target.closest('a, button, [data-cursor-hover]')) {
      gsap.to(this.ring.nativeElement, {
        scale: 1.8,
        borderColor: 'rgba(59, 130, 246, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(this.ring.nativeElement, {
        scale: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.isVisible.set(false)
  }

  @HostListener('window:mousedown')
  onMouseDown(): void {
    gsap.to(this.ring.nativeElement, { scale: 0.75, duration: 0.15, ease: 'power2.out' })
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    gsap.to(this.ring.nativeElement, { scale: 1, duration: 0.15, ease: 'power2.out' })
  }
}
