import { skills, coursework } from '../data/skills'
import SectionHeading from './SectionHeading'

const categories = [
  'Languages',
  'Frameworks & Libraries',
  'Tools & Platforms',
] as const

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl rounded-2xl bg-slate-50 px-6 py-16 dark:bg-slate-900/40"
    >
      <SectionHeading>Skills & Coursework</SectionHeading>

      <div className="grid gap-8 sm:grid-cols-3">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Relevant Coursework
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {coursework.map((course) => (
            <li
              key={course.name}
              className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-slate-700 dark:border-indigo-900/60 dark:bg-slate-800 dark:text-slate-300"
            >
              {course.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
