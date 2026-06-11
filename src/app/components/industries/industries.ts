import { Component, AfterViewInit, ElementRef, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { INDUSTRIES } from '../../data'

gsap.registerPlugin(ScrollTrigger)

const ICONS: Record<string, string> = {
  plane: '\u2708\uFE0F',
  heart: '\u2764\uFE0F',
  users: '\uD83D\uDC65',
  'shopping-cart': '\uD83D\uDED2',
  truck: '\uD83D\uDE9A',
  book: '\uD83D\uDCDA',
}

@Component({
  selector: 'app-industries',
  standalone: true,
  templateUrl: './industries.html',
})
export class Industries implements AfterViewInit {
  protected readonly industries = INDUSTRIES
  protected readonly getIcon = (name: string) => ICONS[name] || '\uD83D\uDCCD'
  private readonly el = inject(ElementRef)

  ngAfterViewInit() {
    gsap.to(this.el.nativeElement.querySelectorAll('.industry-card'), {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
      },
    })
  }
}
