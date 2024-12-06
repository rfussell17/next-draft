'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import { Mark } from './logo'

function Circle({ size, opacity }: { size: number; opacity: string }) {
  return (
    <div
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          '--opacity': opacity,
        } as React.CSSProperties
      }
      className={clsx(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.blue.500)_var(--opacity),transparent)_100%)]',
        'ring-blue-500/[8%] ring-1 ring-inset',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" />
      <Circle size={400} opacity="5%" />
      <Circle size={272} opacity="5%" />
      <Circle size={144} opacity="10%" />
      <div className="from-white absolute inset-0 bg-gradient-to-t to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="bg-white ring-black/5 absolute left-44 top-32 flex size-16 items-center justify-center rounded-full shadow ring-1">
      <Mark className="fill-black h-9" />
    </div>
  )
}

function Logo({ src, left, top }: { src: string; left: number; top: number }) {
  return (
    <Image
      alt=""
      src={src}
      width={64}
      height={64}
      style={{ left: `${left}px`, top: `${top}px` }}
      className="bg-white ring-black/5 absolute size-16 rounded-full shadow ring-1"
    />
  )
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo src="/logo-cluster/career-builder.svg" left={360} top={144} />
        <Logo src="/logo-cluster/dribbble.svg" left={285} top={20} />
        <Logo src="/logo-cluster/glassdoor.svg" left={255} top={210} />
        <Logo src="/logo-cluster/linkedin.svg" left={144} top={40} />
        <Logo src="/logo-cluster/upwork.svg" left={36} top={56} />
        <Logo src="/logo-cluster/we-work-remotely.svg" left={96} top={176} />
      </div>
    </div>
  )
}
