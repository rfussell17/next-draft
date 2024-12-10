import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-r',
        'from-[#875E6F]',
        'via-[#815F72]',
        'via-[#73667F]',
        'via-[#656A8A]',
        'via-[#5E6E92]',
        'to-[#404A63]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <Gradient
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
