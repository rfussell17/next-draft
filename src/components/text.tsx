import { clsx } from 'clsx'
import React from 'react'

type TextColor = 'light' | 'dark'

type HeadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  textColor?: TextColor
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export function Heading({
  className,
  as: Element = 'h2',
  textColor = 'dark',
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={clsx(
        className,
        'font-code',
        'bg-gradient-primary bg-clip-text pb-1 text-4xl font-medium tracking-tighter sm:text-6xl',
        'text-transparent',
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  textColor = 'light',
  ...props
}: HeadingProps) {
  const textClass = textColor === 'light' ? 'text-gray-100' : 'text-secondary'

  return (
    <Element
      {...props}
      className={clsx(
        className,
        'font-code',
        textClass,
        'mt-4',
        'font-semibold',
      )}
    />
  )
}

type LeadProps = {
  textColor?: TextColor
} & React.ComponentPropsWithoutRef<'p'>

export function Lead({ className, textColor = 'dark', ...props }: LeadProps) {
  const textClass = textColor === 'light' ? 'text-gray-100' : 'text-gray-500'

  return (
    <p
      {...props}
      className={clsx(className, 'font-sans', textClass, 'text-lg font-medium')}
    />
  )
}
