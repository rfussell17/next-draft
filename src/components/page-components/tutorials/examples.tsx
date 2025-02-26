import type { Data } from '@/components/global/types'

import { ResourceBlock } from '../resources/resource-block'
import { tutorials } from './data'

const Examples = () => {
  return (
    <div className="overflow-hidden bg-gradient-brand py-24" id="examples">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="sm:subheader-light subheader-mobile-light">
            Developer Tutorials
          </h2>
          <p className="paragraph-light">
            Learn more about how to write your own technical tutorials here, or
            check out some of our samples below:
          </p>

          <div className="mt-8 grid grid-cols-1 py-6">
            {tutorials.map((tutorial: Data) => (
              <div key={tutorial.id} className="mb-8">
                <ResourceBlock resource={tutorial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples