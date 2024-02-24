import { PrettyLightsLogo } from '@/components/PrettyLightsLogo'
import { LIST_SECTIONS } from '@/data/list'
import { ListSection } from '@/components/ListSection/ListSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 lg:p-24 items-center sm:items-start">
      <div className="z-10 max-w-5xl w-full text-sm basis-full">
        <PrettyLightsLogo
          className="fill-slate-600 mx-auto sm:mx-0"
          height={100}
          width={100}
        />
      </div>

      <div className="mt-16 space-y-4">
        {LIST_SECTIONS.map((section) => (
          <ListSection key={section.name} {...section} />
        ))}
      </div>
    </main>
  )
}
