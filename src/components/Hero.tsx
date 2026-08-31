import { useState } from 'react'

function Hero() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section
      id="about"
      className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center"
    >
      {imageFailed ? (
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-100 font-display text-3xl font-semibold text-slate-500 ring-[6px] ring-indigo-300 dark:bg-slate-800 dark:text-slate-400 dark:ring-indigo-500/60">
          AT
        </div>
      ) : (
        <img
          src="/profile.jpeg"
          alt="Alejandro Torres"
          onError={() => setImageFailed(true)}
          className="h-32 w-32 rounded-full object-cover ring-[6px] ring-indigo-300 shadow-md dark:ring-indigo-500/60"
        />
      )}
      <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
        Alejandro Torres
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        Software Engineer | Full Stack Developer | C++ | Django | React | Java
      </p>
      <span className="mt-4 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
        Open to Software Engineering internships & new-grad roles
      </span>
      <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-400">
        I'm a Computer Science student at Aurora University who likes building
        things end-to-end; from a Django/React platform that generates
        AI-personalized art curriculums, to a C++ compiler that parses and
        runs its own custom language. I care about writing code that's fast,
        testable, and doesn't fall over under load. I'm drawn to
        work that has a genuine, positive impact on people's lives.
      </p>
    </section>
  )
}

export default Hero
