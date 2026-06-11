import { Component, signal, inject, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core'
import { NgFor } from '@angular/common'
import gsap from 'gsap'
import { ScrollService } from '../../services/scroll.service'

interface NavLink {
  label: string
  target: string
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nav.html',
})
export class Nav implements AfterViewInit {
  private readonly el = inject(ElementRef)
  private readonly scroll = inject(ScrollService)

  @ViewChild('navContainer') navContainer!: ElementRef<HTMLElement>
  @ViewChild('navLinks') navLinks!: ElementRef<HTMLElement>
  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLElement>

  protected readonly isScrolled = signal(false)
  protected readonly isMobileOpen = signal(false)
  protected readonly activeSection = signal('hero')

  protected readonly links: NavLink[] = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ]

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40)
    this.updateActiveSection()
  }

  private updateActiveSection(): void {
    const scrollPos = window.scrollY + 120
    for (let i = this.links.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.links[i].target)
      if (section && section.offsetTop <= scrollPos) {
        this.activeSection.set(this.links[i].target)
        return
      }
    }
    this.activeSection.set('hero')
  }

  ngAfterViewInit(): void {
    const items = this.navLinks.nativeElement.querySelectorAll('a')
    gsap.fromTo(
      items,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    )
  }

  protected scrollTo(target: string): void {
    this.isMobileOpen.set(false)
    this.scroll.scrollTo(target)
  }

  protected toggleMobile(): void {
    this.isMobileOpen.set(!this.isMobileOpen())
  }
}
