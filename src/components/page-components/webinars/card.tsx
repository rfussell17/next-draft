import type { Webinar } from '@/components/global/types'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface WebinarCardProps {
  webinar: Webinar
}

export const WebinarCard = ({ webinar }: WebinarCardProps) => {
  return (
    <div className="group relative my-4 flex flex-col space-y-2 rounded-lg border-l-2 bg-white/5 py-4 pl-3">
      <div className="flex items-center space-x-2 text-sm text-gray-100">
        <CalendarIcon className="h-4 w-4" />
        <time dateTime={webinar.date}>
          {new Date(webinar.date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
      <Link href={webinar.url}>
        <h3 className="font-semibold text-white transition-colors group-hover:text-gray-300">
          {webinar.title}
        </h3>
      </Link>
      {webinar.description && (
        <p className="text-sm text-gray-100">{webinar.description}</p>
      )}
    </div>
  )
}
