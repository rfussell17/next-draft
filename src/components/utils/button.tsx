import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'border-transparent bg-gray-950 rounded-full border shadow-md',
    'text-white whitespace-nowrap text-base font-medium',
    'data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40',
  ),
  secondary: clsx(
    'text-white relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'border-transparent rounded-full border bg-primary shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-gray-950 whitespace-nowrap text-base font-medium',
    'data-[disabled]:bg-primary data-[hover]:bg-primary/20 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'border-transparent ring-black/10 rounded-lg border shadow ring-1',
    'text-gray-950 whitespace-nowrap text-sm font-medium',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
