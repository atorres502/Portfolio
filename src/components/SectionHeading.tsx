import type { ReactNode } from 'react'

function SectionHeading({
  children,
  center = false,
}: {
  children: ReactNode
  center?: boolean
}) {
  return (
    <div className={`mb-8 ${center ? 'flex flex-col items-center' : ''}`}>
      <div className="h-1 w-10 rounded-full bg-indigo-500" />
      <h2 className="font-display mt-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {children}
      </h2>
    </div>
  )
}

export default SectionHeading
