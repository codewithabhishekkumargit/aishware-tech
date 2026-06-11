import { Component, AfterViewInit, inject, ElementRef } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TECHNOLOGIES } from '../../data'

gsap.registerPlugin(ScrollTrigger)

interface TechCategory {
  name: string
  color: string
  items: string[]
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.html',
})
export class TechStackComponent implements AfterViewInit {
  private el = inject(ElementRef)

  readonly categories: TechCategory[] = [
    { name: 'Frontend', color: '#3B82F6', items: [] },
    { name: 'Backend', color: '#8B5CF6', items: [] },
    { name: 'Database', color: '#06B6D4', items: [] },
    { name: 'DevOps', color: '#F59E0B', items: [] },
    { name: 'Cloud', color: '#10B981', items: [] },
    { name: 'AI', color: '#EF4444', items: [] },
    { name: 'Language', color: '#EC4899', items: [] },
  ]

  constructor() {
    for (const tech of TECHNOLOGIES) {
      const cat = this.categories.find(c => c.name === tech.category)
      if (cat) cat.items.push(tech.name)
    }
  }

  ngAfterViewInit() {
    gsap.fromTo('.tech-chip',
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }
}
