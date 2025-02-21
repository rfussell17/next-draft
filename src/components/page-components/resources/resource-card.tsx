import type { Data } from '@/components/global/types'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ResourceCardProps {
  resource: Data
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const hasDate = !!resource.date

  return (
    <div className="group relative my-4 flex flex-col space-y-2 rounded-lg border-l-2 bg-white/5 py-4 pl-3">
      {hasDate && (
        <div className="flex items-center space-x-2 text-sm text-gray-100">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={resource.date}>
            {new Date(resource.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      )}
      <Link href={resource.url}>
        <h3 className="font-semibold text-white transition-colors group-hover:text-gray-300">
          {resource.title}
        </h3>
      </Link>
      {resource.description && (
        <p className="text-sm text-gray-100">{resource.description}</p>
      )}
    </div>
  )
}
