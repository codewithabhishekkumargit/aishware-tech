import { Component, inject, AfterViewInit, ElementRef } from '@angular/core'

import { FormsModule } from '@angular/forms'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styles: [`
    .select-wrapper select { appearance: none; -webkit-appearance: none; }
    .select-wrapper select option { background: #0F172A; color: white; }
    .select-wrapper select option:hover { background: #1e293b; }
    .select-wrapper select:focus + .select-arrow { opacity: 1; }
    .select-label-float { transform: translateY(-1.25rem) scale(0.8); color: rgb(59 130 246 / 0.8); }
    @media (pointer: coarse) {
      .select-wrapper select { min-height: 3.25rem; font-size: 1rem; }
      .select-wrapper select option { font-size: 0.9375rem; padding: 0.75rem 1rem; }
    }
  `]})
export class Contact implements AfterViewInit {
  private readonly el = inject(ElementRef)

  protected formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  }

  protected readonly projectTypes = [
    'Custom Software Development',
    'AI & Automation Platform',
    'Web Application (Angular/React)',
    'Cloud Infrastructure (AWS/Azure)',
    'DevOps & CI/CD',
    'Product Engineering (MVP/SaaS)',
    'Enterprise CRM/ERP',
    'Consulting & Strategy',
    'Other'
  ]
  protected readonly budgets = ['Under $10k', '$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+']

  submitForm() {
    const { name, email, message } = this.formData
    if (!name || !email || !message) return
    const mailto = `mailto:contact@aishwaretech.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${this.formData.phone}\nCompany: ${this.formData.company}\nProject Type: ${this.formData.projectType}\nBudget: ${this.formData.budget}\n\nMessage:\n${message}`)}`
    window.location.href = mailto
  }

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.form-field, .info-item'), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
      },
    })
  }
}
