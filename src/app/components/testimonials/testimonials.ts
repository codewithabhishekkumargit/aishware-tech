import { Component, Inject, PLATFORM_ID, afterNextRender, OnDestroy } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { TESTIMONIALS } from '../../data'

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnDestroy {
  readonly testimonials = TESTIMONIALS
  readonly starArray = [1, 2, 3, 4, 5]
  currentIndex = 0
  private interval?: ReturnType<typeof setInterval>

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.startAutoPlay()
      }
    })
  }

  private startAutoPlay(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
    }, 5000)
  }

  setCurrent(index: number): void {
    this.currentIndex = index
    if (this.interval) clearInterval(this.interval)
    this.startAutoPlay()
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval)
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('')
  }
}
