import { Component, AfterViewInit, ElementRef, inject } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TEAM } from '../../data'

interface MemberViewModel {
  name: string
  role: string
  bio: string
  image: string
  socials: { icon: string; url: string }[]
  initials: string
  gradient: string
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.html',
  styles: [`
    .team-card { opacity: 0; transform: translateY(40px); }
  `],
})
export class TeamComponent implements AfterViewInit {
  private el = inject(ElementRef)

  readonly members: MemberViewModel[] = TEAM.map(m => ({
    ...m,
    initials: this.getInitials(m.name),
    gradient: this.computeGradient(m.name),
  }))

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.team-card', {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 80%',
      },
    })
  }

  private getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('')
  }

  private computeGradient(name: string): string {
    const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
    const hue1 = hash % 360
    const hue2 = (hash * 1.618) % 360
    return `linear-gradient(135deg, hsl(${hue1}, 60%, 55%), hsl(${hue2}, 60%, 45%))`
  }

  socialIcon(icon: string): string {
    const paths: Record<string, string> = {
      linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
      twitter: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
      github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
      dribbble: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.24 5.1c.45.95.7 1.99.7 3.1 0 .34-.03.68-.08 1.01a8.44 8.44 0 00-5.34-1.56c-.18-.4-.36-.8-.54-1.19 2.22-.92 4.1-2.13 5.26-3.36zm-1.98-1.5c-1.04 1.03-2.77 2.1-4.83 2.89-.9-1.69-1.82-3.19-2.5-4.18 1.1-.36 2.27-.56 3.5-.56 1.39 0 2.72.33 3.83.95v.9zm-7.7 1.08c.69.97 1.58 2.45 2.48 4.16-2.85.44-5.97.49-7.28.02.3-2.01 1.55-3.71 3.28-4.78 1.14-.7 2.44-1.1 3.82-1.2l-.3.8zm-6.04 6.06c.04-.48.08-.96.16-1.44 1.88.48 5.06.54 7.98.2.16.48.32.96.5 1.44-3.56.9-6.2 2.5-7.7 4.03-.92-1.16-1.35-2.5-1.46-3.73 1.02.38 2.4.62 4.1.67l.52-1.17zm1.98 4.66c1.3-1.31 3.74-2.71 6.98-3.52.5 1.3.9 2.6 1.1 3.8a9.22 9.22 0 01-4.1.96c-1.5 0-2.92-.44-3.98-1.24zm8.2.08c-.2-1.1-.58-2.26-1.02-3.45 1.87-.26 3.96.02 5.47.85-.34 1.27-1 2.44-1.94 3.37-.8.8-1.76 1.42-2.83 1.82l.32-2.6z',
    }
    return paths[icon as keyof typeof paths] || paths['linkedin']
  }
}
