import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'
import { GraduationCapIcon } from './icons/GraduationCapIcon'

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl border-t border-slate-200 px-6 py-16 dark:border-slate-800"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-5">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.org}`}
            className="rounded-xl border border-slate-200 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <GraduationCapIcon className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                {item.role} · {item.org}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {item.dates}
              </span>
            </div>
            {item.bullets.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {item.gpa && (
              <div className="mt-3">
                <span className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
                  GPA:
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.gpa.split('/')[0]}
                  </span>
                  /{item.gpa.split('/')[1]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
