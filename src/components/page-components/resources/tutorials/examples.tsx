import type { Data } from '@/components/global/types'

import { ResourceCard } from '../resource-card'
import { tutorials } from './data'

const Examples = () => {
  return (
    <div className="overflow-hidden bg-gradient-brand py-24" id="past-webinars">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="sm:subheader-light subheader-mobile-light">
            Developer Tutorials
          </h2>
          <p className="paragraph-light">
            Learn more about how to write your own technical tutorials here, or
            check out some of our samples below:
          </p>

          <div className="mt-8 grid grid-cols-1">
            {tutorials.map((tutorial: Data) => (
              <ResourceCard key={tutorial.id} resource={tutorial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples
