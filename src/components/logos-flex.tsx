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
    <div className="pb-16 text-white">
      <div className="mb-5">
        <h2 className="text-left text-sm font-semibold">
          [Trusted by 100+ developer tools companies]
        </h2>
      </div>

      <div
        className={clsx(
          className,
          'sm:logo-flex logo-flex-mobile flex flex-col items-center justify-around rounded-lg py-3 sm:flex-row',
        )}
      >
        <Image
          alt="SavvyCal"
          src={image1}
          className="h-9 sm:h-8 lg:h-12"
          width={100}
          height={100}
        />
        <Image
          alt="Laravel"
          src={image2}
          className="h-9 sm:h-8 lg:h-12"
          width={100}
          height={100}
        />
        <Image
          alt="Tuple"
          src={image3}
          className="h-9 sm:h-8 lg:h-12"
          width={100}
          height={100}
        />
        <Image
          alt="Transistor"
          src={image4}
          className="h-9 sm:h-8 lg:h-12"
          width={100}
          height={100}
        />
        <Image
          alt="Statamic"
          src={image5}
          className="h-9 sm:h-8 lg:h-12"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}
