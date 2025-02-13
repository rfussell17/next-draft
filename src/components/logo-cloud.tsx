import { clsx } from 'clsx'
import Image from 'next/image'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const redpanda = '/logos/redpanda_logo_draft_dev.svg'
  const rewind = '/logos/rewind_logo_draft_dev.svg'
  const snyk = '/logos/snyk_logo_draft_dev.svg'
  const earthly = '/logos/earthly_logo_draft_dev.svg'
  const tailscale = '/logos/tailscale_logo_draft_dev.svg'
  const saucelabs = '/logos/saucelabs_logo_draft_dev.svg'
  const foxit = '/logos/foxit_logo_draft_dev.svg'
  const containiq = '/logos/containiq_logo_draft_dev.svg'

  return (
    <div
      data-navbar-color="dark"
      className="bg-gradient-brand py-24 text-white"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="lead-light mb-10 text-center font-semibold">
          Trusted by 100+ developer tools companies
        </h2>
      </div>

      <div
        className={clsx(
          className,
          'flex flex-col justify-around max-sm:mx-auto max-sm:max-w-xl max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:flex-row',
        )}
      >
        <Image
          alt="Red Panda logo"
          src={redpanda}
          className="h-12"
          width={192}
          height={48}
          priority
        />
        <Image
          alt="Earthly logo"
          src={earthly}
          className="h-12"
          width={192}
          height={48}
        />
        <Image
          alt="Foxit logo"
          src={foxit}
          className="h-12"
          width={192}
          height={48}
        />
        <Image
          alt="Rewind logo"
          src={rewind}
          className="h-12"
          width={192}
          height={48}
        />
        <Image
          alt="Snyk logo"
          src={snyk}
          className="h-12"
          width={192}
          height={48}
        />
      </div>
    </div>
  )
}
