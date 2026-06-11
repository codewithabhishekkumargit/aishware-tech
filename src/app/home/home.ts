import { Component, OnInit, inject } from '@angular/core'
import { ScrollService } from '../services/scroll.service'

import { Nav } from '../components/nav/nav'
import { HeroComponent } from '../components/hero/hero'
import { TrustComponent } from '../components/trust/trust'
import { Metrics } from '../components/metrics/metrics'
import { ServicesComponent } from '../components/services/services'
import { AboutComponent } from '../components/about/about'
import { WhyUsComponent } from '../components/why-us/why-us'
import { ProjectsComponent } from '../components/projects/projects'
import { TechStackComponent } from '../components/tech-stack/tech-stack'
import { ProcessComponent } from '../components/process/process'
import { TeamComponent } from '../components/team/team'
import { TestimonialsComponent } from '../components/testimonials/testimonials'
import { Industries } from '../components/industries/industries'
import { Faq } from '../components/faq/faq'
import { Contact } from '../components/contact/contact'
import { Cta } from '../components/cta/cta'
import { Footer } from '../components/footer/footer'
import { Cursor } from '../components/cursor/cursor'
import { ScrollProgress } from '../components/scroll-progress/scroll-progress'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Nav, HeroComponent, TrustComponent, Metrics,
    ServicesComponent, AboutComponent, WhyUsComponent,
    ProjectsComponent, TechStackComponent, ProcessComponent,
    TeamComponent, TestimonialsComponent, Industries,
    Faq, Contact, Cta, Footer,
    Cursor, ScrollProgress,
  ],
  template: `
    <app-cursor />
    <app-scroll-progress />
    <app-nav />
    <main>
      <section id="hero"><app-hero /></section>
      @defer (on viewport) { <app-trust /> } @placeholder { <div class="h-32"></div> }
      @defer (on viewport) { <app-metrics /> } @placeholder { <div class="h-24"></div> }
      <section id="services"><app-services /></section>
      <section id="about"><app-about /></section>
      @defer (on viewport) { <app-why-us /> } @placeholder { <div class="h-16"></div> }
      <section id="projects"><app-projects /></section>
      @defer (on viewport) { <app-tech-stack /> } @placeholder { <div class="h-16"></div> }
      @defer (on viewport) { <app-process /> } @placeholder { <div class="h-16"></div> }
      @defer (on viewport) { <app-team /> } @placeholder { <div class="h-16"></div> }
      @defer (on viewport) { <app-testimonials /> } @placeholder { <div class="h-16"></div> }
      @defer (on viewport) { <app-industries /> } @placeholder { <div class="h-16"></div> }
      @defer (on viewport) { <app-faq /> } @placeholder { <div class="h-16"></div> }
      <section id="contact"><app-contact /></section>
      @defer (on viewport) { <app-cta /> } @placeholder { <div class="h-16"></div> }
    </main>
    @defer (on viewport) { <app-footer /> } @placeholder { <div class="h-16"></div> }
  `,
})
export class HomePage implements OnInit {
  private scroll = inject(ScrollService)

  ngOnInit() {
    this.scroll.init()
  }
}
