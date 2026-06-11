export interface Service {
  title: string
  description: string
  items: string[]
  icon: string
}

export interface Project {
  title: string
  url: string
  category: string
  description: string
  challenge: string
  solution: string
  impact: string
  technologies: string[]
  image: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  socials: { icon: string; url: string }[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Metric {
  value: string
  label: string
  suffix?: string
}

export interface Industry {
  name: string
  icon: string
  description: string
}

export interface Technology {
  name: string
  icon: string
  category: string
}
