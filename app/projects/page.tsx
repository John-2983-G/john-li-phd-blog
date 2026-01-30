import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-start justify-between space-y-2 pt-6 pb-8 md:space-y-5">
          <div>
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Projects
            </h1>
          </div>
          {/* P4 右边悬浮显示 */}
          <div className="flex-shrink-0 drop-shadow-xl">
            <img
              src="/data/P4.jpg"
              alt="Project P4"
              className="h-80 w-auto object-cover shadow-2xl transition-shadow hover:shadow-2xl"
            />
          </div>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => {
              const { title, description, href, imgSrc } = d
              return (
                <Card
                  key={title}
                  title={title}
                  description={description}
                  imgSrc={imgSrc}
                  href={href}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
