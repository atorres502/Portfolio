export interface Project {
  title: string
  description: string
  tech: string[]
  dates: string
  image?: string
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Art Curriculum Platform',
    description:
      'A full-stack platform that generates personalized art learning curriculums using AI. Built a secure RESTful API with authentication and dynamic content management, integrated OpenAI APIs to auto-generate complete curriculums in under 90 seconds, and used Celery + Redis for asynchronous background processing so the frontend never freezes on heavy compute. Data is modeled with a normalized PostgreSQL schema via the Django ORM.',
    tech: [
      'Django',
      'Django-ninja',
      'React',
      'Celery',
      'Redis',
      'PostgreSQL',
      'OpenAI API',
    ],
    dates: 'Jan 2026 – May 2026',
    image: '/atelier-image.jpg',
    liveUrl: 'https://atelierart.dev/',
    repoUrl: 'https://github.com/mrunkle01/Capstone',
  },
  {
    title: 'Compiler Project',
    description:
      'An end-to-end language processor in C++ that tokenizes, parses, validates, and executes programs written in a custom language, averaging ~8ms runtime. Includes a custom lexical analyzer, a syntax/semantic analysis layer enforcing structural and scope validation, and an interpreter backend that evaluates parsed program logic.',
    tech: ['C++'],
    dates: 'Mar 2026 – May 2026',
    image: '/compiler-picture.avif',
    repoUrl: 'https://github.com/atorres502/CompilerProject',
  },
]
