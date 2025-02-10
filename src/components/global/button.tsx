import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import * as React from 'react'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-md border border-transparent bg-gray-100 shadow-md',
    'whitespace-nowrap text-base font-medium', // removed direct text color for demonstration
    'data-[disabled]:bg-gray-300 data-[hover]:bg-gray-300 data-[disabled]:opacity-40',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-base font-medium', // removed direct text color for demonstration
    'data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'border-transparent',
    'text-md whitespace-nowrap font-medium', // removed direct text color for demonstration
    'data-[disabled]:bg-transparent data-[hover]:text-gray-400 data-[disabled]:opacity-40',
  ),
}

// Here we define the conditional text classes for "light" or "dark" text
// You can make these as detailed or minimal as you like.
const toneClasses = {
  light: 'text-white',
  dark: 'text-gray-600',
}

// Add the colorMode prop in addition to variant
type ButtonProps = {
  variant?: keyof typeof variants
  colorMode?: 'light' | 'dark'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  colorMode = 'dark', // default is "dark" text
  className,
  ...props
}: ButtonProps) {
  // Merge our variant with the tone override:
  className = clsx(
    variants[variant],
    // Put toneClasses last so it can override text color from the variant.
    toneClasses[colorMode],
    className,
  )

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
