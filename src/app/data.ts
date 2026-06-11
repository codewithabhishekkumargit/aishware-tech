import type { Service, Project, TeamMember, Testimonial, FAQ, Metric, Industry, Technology } from './types'

export const SERVICES: Service[] = [
  {
    title: 'Custom Software Development',
    description: 'We design and build enterprise-grade custom software — CRM systems, ERP platforms, business portals, and mission-critical applications — using modern architecture, clean code, and scalable infrastructure tailored to your business processes.',
    items: ['Enterprise Applications', 'CRM Systems', 'ERP Solutions', 'Business Portals', 'Microservices Architecture'],
    icon: 'code',
  },
  {
    title: 'Web Application Development',
    description: 'High-performance web applications built with Angular, React, and Node.js. From single-page apps to progressive web apps, we deliver fast, responsive, and accessible web experiences that users love.',
    items: ['Angular Development', 'React Development', 'Node.js Backend', 'Progressive Web Apps', 'API Integration'],
    icon: 'globe',
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by OpenAI, LangChain, and custom machine learning models. We build AI chatbots, document processing systems, workflow automation, and RAG-based knowledge platforms that transform operations.',
    items: ['AI Chatbots', 'Workflow Automation', 'AI Agents', 'RAG Systems', 'Document Intelligence'],
    icon: 'brain',
  },
  {
    title: 'Cloud Solutions',
    description: 'Full-stack cloud consulting and implementation on AWS and Azure. We design scalable, secure, and cost-optimized cloud infrastructure using Docker, Kubernetes, and infrastructure-as-code practices for high-availability deployments.',
    items: ['AWS Consulting', 'Azure Solutions', 'Docker Containerization', 'Kubernetes Orchestration', 'Cloud Migration'],
    icon: 'cloud',
  },
  {
    title: 'DevOps Services',
    description: 'Streamlined CI/CD pipelines, automated infrastructure, and comprehensive monitoring. We implement DevSecOps practices to accelerate delivery cycles while maintaining security, reliability, and full visibility into production systems.',
    items: ['CI/CD Pipelines', 'Infrastructure Monitoring', 'Infrastructure as Code', 'DevSecOps', 'Incident Response'],
    icon: 'settings',
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product development from concept to launch. We help startups and enterprises build MVP, SaaS platforms, and digital products using lean methodologies, rapid prototyping, and continuous iteration based on user feedback.',
    items: ['MVP Development', 'SaaS Product Engineering', 'Platform Engineering', 'API Design & Development', 'Digital Transformation'],
    icon: 'box',
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'ATS Chat',
    url: 'https://app.atschat.in/',
    category: 'AI Communication Platform',
    description: 'An intelligent communication platform enabling businesses to automate conversations, customer engagement, and workflow management through advanced AI integrations.',
    challenge: 'Businesses needed a unified platform to manage customer communications across multiple channels while leveraging AI for intelligent automation.',
    solution: 'Built a scalable AI-powered communication platform with natural language processing, multi-channel support, and automated workflow management.',
    impact: 'Reduced response times by 80% and improved customer satisfaction scores by 45% through intelligent automation.',
    technologies: ['Angular', 'Node.js', 'OpenAI', 'WebSocket', 'PostgreSQL', 'Docker'],
    image: '/assets/projects/ats-chat.jpg',
  },
  {
    title: 'Traveldia',
    url: 'https://traveldia.com/',
    category: 'Travel Technology Platform',
    description: 'A modern travel management ecosystem designed to simplify booking experiences, customer engagement, and operational workflows for travel businesses.',
    challenge: 'Travel businesses struggled with fragmented booking systems and manual operational processes that hindered growth.',
    solution: 'Developed a comprehensive travel management platform with integrated booking, CRM, and operational tools.',
    impact: 'Streamlined operations for 500+ travel agents and increased booking efficiency by 60%.',
    technologies: ['Angular', 'Express', 'MongoDB', 'AWS', 'Stripe'],
    image: '/assets/projects/traveldia.jpg',
  },
  {
    title: 'Traveldia Desk',
    url: 'https://desk.traveldia.in/login',
    category: 'Operations Management Platform',
    description: 'A centralized operational platform built for internal workflow management, team collaboration, customer handling, and process automation.',
    challenge: 'Internal teams needed a unified platform for managing operations, customer support, and team collaboration.',
    solution: 'Created a comprehensive desk management system with ticketing, workflow automation, and real-time collaboration features.',
    impact: 'Improved team productivity by 55% and reduced operational overhead by 35%.',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/assets/projects/traveldia-desk.jpg',
  },
]

export const TEAM: TeamMember[] = [
  {
    name: 'Abhishek Kumar',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in enterprise software. Previously led engineering teams at top product companies, delivering scalable solutions used by millions.',
    image: '/assets/team/ceo.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect and cloud infrastructure expert. 12+ years building distributed systems on AWS and Azure with a passion for AI-driven solutions.',
    image: '/assets/team/cto.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'github', url: '#' },
    ],
  },
  {
    name: 'Rahul Verma',
    role: 'Lead Full-Stack Developer',
    bio: 'Angular and Node.js specialist with expertise in building high-performance web applications. Open source contributor and tech speaker at national conferences.',
    image: '/assets/team/lead-dev.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'github', url: '#' },
    ],
  },
  {
    name: 'Ananya Patel',
    role: 'UI/UX Design Lead',
    bio: 'Award-winning designer specializing in enterprise UX, design systems, and accessible interfaces. Creates intuitive experiences that users love.',
    image: '/assets/team/designer.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'dribbble', url: '#' },
    ],
  },
  {
    name: 'Vikram Singh',
    role: 'Project Manager',
    bio: 'PMP-certified project manager with a track record of delivering complex enterprise projects on time. Expert in Agile, Scrum, and client communication.',
    image: '/assets/team/pm.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Sneha Reddy',
    role: 'AI/ML Engineer',
    bio: 'Specializes in NLP, LLMs, and RAG systems. Built intelligent automation solutions for Fortune 500 companies using OpenAI, LangChain, and custom ML models.',
    image: '/assets/team/ai-engineer.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'github', url: '#' },
    ],
  },
  {
    name: 'Arun Nair',
    role: 'DevOps Architect',
    bio: 'Cloud-native infrastructure expert. Masters CI/CD pipelines, Kubernetes orchestration, and monitoring at scale. Ensures 99.9% uptime for all deployments.',
    image: '/assets/team/devops.jpg',
    socials: [
      { icon: 'linkedin', url: '#' },
      { icon: 'github', url: '#' },
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ravi Mehta',
    role: 'CEO',
    company: 'TechCorp India',
    content: 'Aishware Tech delivered an exceptional product that exceeded our expectations. Their team\'s technical expertise and professionalism made the entire process seamless.',
    rating: 5,
    image: '/assets/testimonials/client1.jpg',
  },
  {
    name: 'Neha Kapoor',
    role: 'CTO',
    company: 'Innovate Labs',
    content: 'Working with Aishware Tech was a game-changer for our business. They built a robust, scalable platform that has significantly improved our operational efficiency.',
    rating: 5,
    image: '/assets/testimonials/client2.jpg',
  },
  {
    name: 'Siddharth Joshi',
    role: 'Product Manager',
    company: 'StartupLab',
    content: 'The team at Aishware Tech truly understands modern software development. Their agile approach and attention to detail set them apart from other agencies.',
    rating: 5,
    image: '/assets/testimonials/client3.jpg',
  },
  {
    name: 'Dr. Lakshmi Iyer',
    role: 'Director of Engineering',
    company: 'Enterprise Solutions',
    content: 'Exceptional technical capabilities combined with great communication. They delivered a complex AI platform on time and within budget.',
    rating: 5,
    image: '/assets/testimonials/client4.jpg',
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'What services does Aishware Tech Solutions provide?',
    answer: 'We offer custom software development, AI and automation solutions, web and mobile application development using Angular and React, cloud infrastructure consulting on AWS and Azure, DevOps and CI/CD implementation, and end-to-end product engineering for startups and enterprises.',
  },
  {
    question: 'Which technologies does your development team specialize in?',
    answer: 'Our team specializes in Angular, React, Node.js, Python, TypeScript, AWS, Azure, Docker, Kubernetes, OpenAI, LangChain, PostgreSQL, MongoDB, and modern DevOps tooling for building scalable enterprise applications.',
  },
  {
    question: 'How long does it take to develop a custom software application?',
    answer: 'Timelines depend on project complexity and scope. A typical MVP can be delivered in 8-12 weeks. Mid-size web applications take 3-5 months, while large enterprise platforms with AI integrations may require 6-9 months. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes, we offer comprehensive post-launch support including 24/7 incident monitoring, regular performance optimization, security patches, feature enhancements, and infrastructure management to ensure your application runs reliably.',
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We serve travel and hospitality, healthcare and medtech, HR technology, e-commerce and retail, logistics and supply chain, education and edtech, and various B2B SaaS sectors with tailored software solutions.',
  },
  {
    question: 'How does Aishware Tech ensure software quality?',
    answer: 'We follow rigorous quality assurance practices including automated unit testing (90%+ coverage), integration and E2E testing, security vulnerability scanning, cross-browser testing, performance benchmarking, and code reviews as part of our CI/CD pipelines.',
  },
  {
    question: 'Can you work with our existing development team?',
    answer: 'Absolutely. We can augment your existing team with senior Angular, React, Node.js, and DevOps engineers. Our team integrates seamlessly with your workflows, tools (Jira, Slack, GitHub), and sprint cycles.',
  },
  {
    question: 'What is your engagement model for software projects?',
    answer: 'We offer flexible engagement models — fixed-price projects for well-defined scopes, time-and-material for evolving requirements, dedicated offshore teams for long-term partnerships, and sprint-based agile delivery for product development.',
  },
]

export const METRICS: Metric[] = [
  { value: '50', label: 'Projects Delivered', suffix: '+' },
  { value: '10', label: 'Industries Served', suffix: '+' },
  { value: '99', label: 'Client Satisfaction', suffix: '%' },
  { value: '5', label: 'Years of Excellence', suffix: '+' },
]

export const INDUSTRIES: Industry[] = [
  { name: 'Travel', icon: 'plane', description: 'Travel technology platforms and booking systems' },
  { name: 'Healthcare', icon: 'heart', description: 'Healthcare management and patient engagement solutions' },
  { name: 'HR Tech', icon: 'users', description: 'Human resource management and talent platforms' },
  { name: 'E-commerce', icon: 'shopping-cart', description: 'E-commerce platforms and marketplace solutions' },
  { name: 'Logistics', icon: 'truck', description: 'Supply chain and logistics management systems' },
  { name: 'Education', icon: 'book', description: 'EdTech platforms and learning management systems' },
]

export const TECHNOLOGIES: Technology[] = [
  { name: 'Angular', icon: 'angular', category: 'Frontend' },
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
  { name: 'Docker', icon: 'docker', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'kubernetes', category: 'DevOps' },
  { name: 'AWS', icon: 'aws', category: 'Cloud' },
  { name: 'Azure', icon: 'azure', category: 'Cloud' },
  { name: 'OpenAI', icon: 'openai', category: 'AI' },
  { name: 'LangChain', icon: 'langchain', category: 'AI' },
  { name: 'Python', icon: 'python', category: 'Backend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Language' },
]

export const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', description: 'We start with a deep dive into your business goals, user needs, and technical requirements. This phase includes stakeholder interviews, market research, and feasibility analysis to define a clear product vision.' },
  { number: '02', title: 'Planning', description: 'A strategic roadmap with prioritized features, architectural decisions, technology stack selection (Angular, React, Node.js, AWS, etc.), sprint timelines, and resource planning for predictable delivery.' },
  { number: '03', title: 'Design', description: 'We craft intuitive user interfaces with modern design principles — wireframes, interactive prototypes, design systems, and accessibility-first approaches that ensure exceptional experiences across all devices.' },
  { number: '04', title: 'Development', description: 'Agile development with two-week sprints, daily stand-ups, and continuous integration. Our engineers write clean, testable code following SOLID principles and industry best practices.' },
  { number: '05', title: 'Testing', description: 'Comprehensive quality assurance including 90%+ unit test coverage, integration testing, end-to-end testing, security audits, cross-browser testing, and performance benchmarking.' },
  { number: '06', title: 'Deployment', description: 'Automated CI/CD deployment pipelines with zero-downtime strategies, database migrations, environment configuration, and real-time monitoring setup for production readiness.' },
  { number: '07', title: 'Support', description: 'Ongoing maintenance with 24/7 incident monitoring, regular platform health checks, performance optimization, security patches, and feature enhancements to keep your solution running at its best.' },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Senior Engineering Team',
    description: 'Our team comprises seasoned architects and developers with 10+ years of experience each. We bring deep expertise across Angular, React, Node.js, Python, cloud platforms, and AI technologies to deliver enterprise-grade solutions that stand the test of time.',
  },
  {
    title: 'Modern Architecture',
    description: 'We build clean, scalable, and maintainable code using domain-driven design, microservices architecture, event-driven patterns, and the latest framework versions. Every project follows strict SOLID principles and industry best practices for long-term maintainability.',
  },
  {
    title: 'Cloud Native Solutions',
    description: 'Applications are designed for the cloud from day one — leveraging AWS, Azure, Docker, and Kubernetes for auto-scaling, high availability, and cost optimization. We implement infrastructure-as-code for consistent, repeatable deployments across environments.',
  },
  {
    title: 'Agile Delivery',
    description: 'We follow proven agile methodologies with 2-week sprints, daily stand-ups, and transparent progress tracking via Jira. Clients get full visibility into development with demo sessions at every milestone, ensuring the product evolves exactly as envisioned.',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From ideation and strategy through development, deployment, and ongoing maintenance — we own the entire lifecycle. This holistic approach ensures consistency, faster delivery, and a single point of accountability for your project\'s success.',
  },
  {
    title: 'Security First Approach',
    description: 'Enterprise-grade security is embedded in our DNA. We conduct regular security audits, implement OWASP standards, enforce encryption at rest and in transit, and follow strict compliance protocols including SOC2, GDPR, and HIPAA where required.',
  },
  {
    title: 'Scalable by Design',
    description: 'Every system we build is architected to scale horizontally from day one — handling growth from hundreds to millions of users without degradation. We use caching strategies, database optimization, CDN integration, and load balancing to ensure consistent performance.',
  },
  {
    title: 'AI Ready & Future Proof',
    description: 'Solutions are built with AI integration capabilities baked in — whether it\'s LLM-powered chatbots, RAG-based knowledge systems, predictive analytics, or workflow automation. We ensure your platform is ready for tomorrow\'s technology landscape.',
  },
  {
    title: 'Transparent Communication',
    description: 'We believe in radical transparency. Clients get direct access to project dashboards, weekly status reports, Slack channels, and their dedicated project manager. No black boxes, no surprises — just clear, honest communication at every step.',
  },
  {
    title: 'Quality Assurance',
    description: 'Every release undergoes rigorous testing — unit tests (90%+ coverage), integration tests, E2E tests, performance benchmarking, and security scanning. Our CI/CD pipelines automatically catch regressions before they reach production.',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'We deliver enterprise quality at competitive rates through our optimized delivery model. Our offshore development center provides 40-60% cost savings without compromising on quality, timelines, or communication standards.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We\'re not just vendors — we\'re your technology partners. Our dedicated support includes 24/7 incident response, regular platform health checks, performance optimization, feature enhancements, and strategic technology advisory for your evolving needs.',
  },
]

export const CLIENTS = [
  'TechCorp', 'InnovateLabs', 'DataFlow', 'CloudPeak',
  'NexGen', 'QuantumSoft', 'PixelPerfect', 'StreamLine',
]

export const PARTNERS = [
  'AWS', 'Google Cloud', 'Microsoft', 'OpenAI', 'Docker', 'Kubernetes',
]
