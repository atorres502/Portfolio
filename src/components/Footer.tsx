import SectionHeading from './SectionHeading'

function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-4xl border-t border-slate-200 px-6 py-16 text-center dark:border-slate-800"
    >
      <SectionHeading center>Get in touch</SectionHeading>
      <div className="flex justify-center gap-6 text-sm font-medium">
        <a
          href="https://www.linkedin.com/in/alejandro-torres-2b2a5a367/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline dark:text-indigo-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/atorres502"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline dark:text-indigo-400"
        >
          GitHub
        </a>
        <a
          href="mailto:talejandro502@gmail.com"
          className="text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Email
        </a>
      </div>
      <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
        Montgomery, IL · © {new Date().getFullYear()} Alejandro Torres
      </p>
    </footer>
  )
}

export default Footer
