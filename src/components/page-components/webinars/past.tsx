import type { Webinar } from '@/components/global/types'
import { WebinarCard } from './card'
import { pastWebinars } from './data'

const PastWebinars = () => {
  return (
    <div className="overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="sm:subheader-gradient subheader-mobile-gradient pb-6">
            Past Webinars
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastWebinars.map((webinar: Webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastWebinars
