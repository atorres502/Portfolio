import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center border-b border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-500">
          Add image (16:9)
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {project.dates}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-4 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
