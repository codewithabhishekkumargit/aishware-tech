import { Component, signal, inject, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core'

import gsap from 'gsap'

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [],
  templateUrl: './scroll-progress.html',
})
export class ScrollProgress implements AfterViewInit {
  private readonly el = inject(ElementRef)

  @ViewChild('progress') progress!: ElementRef<HTMLElement>

  protected readonly width = signal('0%')

  ngAfterViewInit(): void {
    this.updateProgress()
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateProgress()
  }

  private updateProgress(): void {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    this.width.set(pct + '%')
  }
}
