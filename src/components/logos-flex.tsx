import { clsx } from 'clsx'
import Image from 'next/image'

export function LogosFlex({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const image1 = '/logo-cloud/savvycal.svg'
  const image2 = '/logo-cloud/laravel.svg'
  const image3 = '/logo-cloud/tuple.svg'
  const image4 = '/logo-cloud/transistor.svg'
  const image5 = '/logo-cloud/statamic.svg'

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
            alt="SavvyCal"
            src={image1}
            className="h-12"
            width={192}
            height={48}
            priority
          />
          <Image
            alt="Laravel"
            src={image2}
            className="h-12"
            width={192}
            height={48}
          />
          <Image
            alt="Tuple"
            src={image3}
            className="h-12"
            width={192}
            height={48}
          />
          <Image
            alt="Transistor"
            src={image4}
            className="h-12"
            width={192}
            height={48}
          />
          <Image
            alt="Statamic"
            src={image5}
            className="h-12"
            width={192}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
