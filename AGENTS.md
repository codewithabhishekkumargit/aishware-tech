# AGENTS.md — Aishware Tech Solutions Website

## Project Overview
Corporate website for **Aishware Tech Solutions Pvt Ltd** — an enterprise software development company based in Bangalore, India. Single-page landing site with 19 sections built with Angular 21 standalone components.

## Tech Stack
- **Framework**: Angular 21 (standalone, no `NgModule`)
- **Styling**: TailwindCSS v4 (`@import 'tailwindcss'` in styles.css)
- **Animations**: GSAP 3.x with ScrollTrigger
- **Smooth Scroll**: Lenis (via ScrollService)
- **Directives**: Custom MagneticDirective (buttons), TiltDirective (cards)
- **Routing**: Angular Router with single route (`/` → HomeComponent)

## Design System
- **Primary**: `#0F172A` (dark navy)
- **Accent gradient**: `#3B82F6 → #8B5CF6 → #06B6D4`
- **Fonts**: Inter Tight (headings), Inter (body), Space Grotesk (metrics)
- **Components**: Glass morphism (`.glass`, `.glass-hover` utilities), `.text-gradient`, `.bg-accent-gradient` in styles.css

## Build Commands
```bash
npm install         # Install deps (already done)
npm start           # Dev server (uses --no-deprecation flag)
npm run build       # Production build (uses --no-deprecation flag)
```

## Architecture

### Section Order (home.ts template)
Hero → Trust → Metrics → Services → About → WhyUs → Projects → TechStack → Process → Team → Testimonials → Industries → Faq → Contact → Cta → Footer

### Components (19 total)
| Component | File | Section ID | Notes |
|-----------|------|-----------|-------|
| Nav | `nav/` | — | Fixed header, mobile hamburger, Lenis scrollTo |
| Cursor | `cursor/` | — | Custom cursor, hidden on mobile (`hidden md:block`) |
| ScrollProgress | `scroll-progress/` | — | Top progress bar |
| Hero | `hero/` | `hero` | Aurora gradient, particles, word-by-word stagger, magnetic CTAs |
| Trust | `trust/` | — | Marquee + counter metrics |
| Metrics | `metrics/` | — | Animated bar chart |
| Services | `services/` | — | 6 service cards with tilt |
| About | `about/` | `about` | Stats, trust signals, Get in Touch button |
| WhyUs | `why-us/` | — | 12-item grid with SVG icons |
| Projects | `projects/` | `projects` | 3 project cards with mockups, tilt, shine |
| TechStack | `tech-stack/` | — | Orbiting tech labels |
| Process | `process/` | — | Timeline with 7 steps |
| Team | `team/` | — | Member cards, social links visible on mobile |
| Testimonials | `testimonials/` | — | Carousel with dot nav |
| Industries | `industries/` | — | 6 industry cards |
| Faq | `faq/` | — | Accordion |
| Contact | `contact/` | `contact` | Form with dropdowns, floating labels, whatsapp |
| Cta | `cta/` | — | Animated gradient CTA section |
| Footer | `footer/` | — | 5-col grid, links, policies |

### Services
- **ScrollService** (`services/scroll.service.ts`): Lenis init + `scrollTo(id)` using `getBoundingClientRect().top + scrollY`
- **AnimationService** (`services/animation.service.ts`): GSAP utility methods

### Directives
- **MagneticDirective**: Buttons repel cursor on hover (configurable `magneticStrength`)
- **TiltDirective**: Cards tilt on mouse move (configurable `tiltDegree`, `tiltScale`)

### Data
All content lives in `src/app/data.ts`: SERVICES, PROJECTS, TEAM, TESTIMONIALS, FAQS, METRICS, INDUSTRIES, TECHNOLOGIES, PROCESS_STEPS, WHY_CHOOSE_US, CLIENTS, PARTNERS

### Types
Defined in `src/app/types.ts`

## Key Patterns & Conventions

### GSAP Animations
- Use `gsap.to()` with CSS initial state (inline `style="opacity:0;transform:translateY(40px)"`) — more reliable than `.from()` which conflicts with Tailwind's `transition-all`
- Register `ScrollTrigger` in component if used
- Always use `scrollTrigger` with `trigger: this.el.nativeElement` and `start: 'top 80%'` or similar

### Nav Scrolling
- Nav links call `this.scroll.scrollTo(id)` where `id` matches a section element's `id`
- Target sections must have `id="..."` attribute in their HTML

### Mobile Responsiveness
- All sections: `py-32 md:py-40` for consistent vertical spacing
- Container padding: `px-6` everywhere (standardized)
- Hover-only content (social links, project details) uses `opacity-100 md:opacity-0 md:group-hover:opacity-100`
- Touch devices: `@media (pointer: coarse)` for larger touch targets, `font-size: 1rem` on selects to prevent iOS zoom
- Custom cursor hidden on mobile via `hidden md:block`
- Hero mouse effects wrapped in `matchMedia('(pointer: fine)')` check
- Hero uses `min-h-screen` with `100dvh` fallback instead of `h-screen`

## Recent Fixes (June 2026)
- **[DEP0205] warning**: Fixed by adding `NODE_OPTIONS=--no-deprecation` to npm scripts
- **Why Us / Industries not rendering**: Switched GSAP from `.from()` to `.to()` with CSS initial state (`.from()` failed on `display: none` timeline element + `transition-all` conflict)
- **Project card hover content invisible on mobile**: Changed `opacity-0 group-hover:opacity-100` → `opacity-100 md:opacity-0 md:group-hover:opacity-100`
- **Team social links invisible on mobile**: Same pattern as above
- **Tech stack orbit overflow**: Container `w-72 sm:w-80 md:w-96` instead of `w-80`
- **Select dropdowns on iOS**: Added `-webkit-appearance: none`, touch-target `min-height: 3.25rem`, `font-size: 1rem` via `@media (pointer: coarse)`

## SEO
- Meta tags with geo-keywords (Bangalore, Noida, India) in `index.html`
- JSON-LD schema in `index.html`
- All copy written with SEO-rich content
