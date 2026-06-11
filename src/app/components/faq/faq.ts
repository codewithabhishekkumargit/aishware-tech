import { Component, signal, AfterViewInit, ElementRef, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FAQS } from '../../data'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
})
export class Faq implements AfterViewInit {
  protected readonly faqs = FAQS
  protected readonly openIndex = signal<number | null>(null)
  private readonly el = inject(ElementRef)

  toggle(index: number) {
    const prev = this.openIndex()
    if (prev === index) {
      this.closeItem(index)
      this.openIndex.set(null)
    } else {
      if (prev !== null) this.closeItem(prev)
      this.openIndex.set(index)
      this.openItem(index)
    }
  }

  private closeItem(index: number) {
    const items = this.el.nativeElement.querySelectorAll('.faq-item')
    if (index >= items.length) return
    const answer = items[index].querySelector('.faq-answer') as HTMLElement
    if (answer) gsap.to(answer, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' })
  }

  private openItem(index: number) {
    requestAnimationFrame(() => {
      const items = this.el.nativeElement.querySelectorAll('.faq-item')
      if (index >= items.length) return
      const answer = items[index].querySelector('.faq-answer') as HTMLElement
      if (answer) gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: answer.scrollHeight, opacity: 1, duration: 0.4, ease: 'power3.out' })
    })
  }

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.faq-item'), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
      },
    })
  }
}
