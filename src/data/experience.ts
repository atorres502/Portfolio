export interface ExperienceItem {
  role: string
  org: string
  dates: string
  bullets: string[]
  gpa?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'B.S. in Computer Science',
    org: 'Aurora University',
    dates: 'Expected Dec 2026',
    bullets: [],
    gpa: '3.625/4.0',
  },
]
