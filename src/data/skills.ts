export interface Skill {
  name: string
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms'
}

export const skills: Skill[] = [
  { name: 'C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Django', category: 'Frameworks & Libraries' },
  { name: 'Django-ninja', category: 'Frameworks & Libraries' },
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Celery', category: 'Frameworks & Libraries' },
  { name: 'Junit', category: 'Frameworks & Libraries' },
  { name: 'Selenium', category: 'Frameworks & Libraries' },
  { name: 'PostgreSQL', category: 'Tools & Platforms' },
  { name: 'Redis', category: 'Tools & Platforms' },
  { name: 'Git', category: 'Tools & Platforms' },
  { name: 'OpenAI API', category: 'Tools & Platforms' },
  { name: 'Kali Linux', category: 'Tools & Platforms' },
  { name: 'CCleaner', category: 'Tools & Platforms' },
  { name: 'Postman', category: 'Tools & Platforms' }
]

export interface CourseworkItem {
  name: string
}

export const coursework: CourseworkItem[] = [
  { name: 'Computer Science Capstone' },
  { name: 'Programming Languages' },
  { name: 'Object Oriented Design and Development' },
  { name: 'Advanced Web Application Development' },
  { name: 'Software Testing' },
  { name: 'Discrete Mathematics' },
  { name: 'Data Structures and Algorithms' },
  { name: 'Database Design and Implementation' },
  { name: 'Linux OS' },
  { name: 'Computer Systems/Architecture' },
  { name: 'Enterprise Security' },
  { name: 'Network Essentials' },
  { name: 'IT Professional' }
]
