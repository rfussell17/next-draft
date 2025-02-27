'use client'

import { event } from '../utils/analytics'

export default function TrackingButton({
  label = 'Click Me',
  actionName = 'click',
}) {
  const handleClick = () => {
    event({
      action: actionName,
      category: 'button',
      label: label,
      value: 1,
    })
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
    >
      {label}
    </button>
  )
}
