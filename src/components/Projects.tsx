import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl border-t border-slate-200 px-6 py-16 dark:border-slate-800"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
