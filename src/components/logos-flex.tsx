import { clsx } from 'clsx'
import Image from 'next/image'

export function LogosFlex({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const redpanda = '/logos/redpanda_logo_draft_dev.svg'
  const rewind = '/logos/rewind_logo_draft_dev.svg'
  // const snyk = '/logos/snyk_logo_draft_dev2.svg'
  const earthly = '/logos/earthly_logo_draft_dev.svg'
  const tailscale = '/logos/tailscale_logo_draft_dev.svg'
  const saucelabs = '/logos/saucelabs_logo_draft_dev.svg'
  const foxit = '/logos/foxit_logo_draft_dev.svg'
  const containiq = '/logos/containiq_logo_draft_dev.svg'

  return (
    <div className="text-white">
      <div className="mb-5">
        <h3 className="subheader-mobile-light pb-3 font-semibold sm:pb-0 sm:text-left sm:text-base">
          Trusted by 100+ developer tools companies
        </h3>
      </div>
      <div className="rounded-lg bg-white/5 px-4 py-8">
        <div
          className={clsx(
            className,
            'flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-around sm:gap-4',
          )}
        >
          <Image
            alt="Red Panda logo"
            src={redpanda}
            className="h-20"
            width={192}
            height={48}
            priority
          />
          <Image
            alt="Earthly logo"
            src={earthly}
            width={192}
            height={48}
            className="h-20"
          />
          <Image
            alt="Foxit logo"
            src={foxit}
            width={192}
            height={48}
            className="h-20"
          />
          <Image
            alt="Rewind logo"
            src={rewind}
            width={192}
            height={48}
            className="h-20"
          />
          <Image
            alt="ContainIQ logo"
            src={containiq}
            width={192}
            height={48}
            className="h-20"
          />
        </div>
      </div>
    </div>
  )
}
