import type { Webinar } from '@/components/global/types'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface WebinarCardProps {
  webinar: Webinar
}

export const WebinarCard = ({ webinar }: WebinarCardProps) => {
  return (
    <div className="group relative flex flex-col space-y-2">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <CalendarIcon className="h-4 w-4" />
        <time dateTime={webinar.date}>
          {new Date(webinar.date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
      <Link href={webinar.url}>
        <h3 className="font-semibold text-secondary transition-colors group-hover:text-secondary/80">
          {webinar.title}
        </h3>
      </Link>
      {webinar.description && (
        <p className="text-sm text-gray-600">{webinar.description}</p>
      )}
    </div>
  )
}
