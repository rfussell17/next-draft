import { clsx } from 'clsx'
import Image from 'next/image'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const image1 = '/logo-cloud/savvycal.svg'
  const image2 = '/logo-cloud/laravel.svg'
  const image3 = '/logo-cloud/tuple.svg'
  const image4 = '/logo-cloud/transistor.svg'
  const image5 = '/logo-cloud/statamic.svg'

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
          alt="SavvyCal"
          src={image1}
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          width={200}
          height={200}
        />
        <Image
          alt="Laravel"
          src={image2}
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          width={200}
          height={200}
        />
        <Image
          alt="Tuple"
          src={image3}
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          width={200}
          height={200}
        />
        <Image
          alt="Transistor"
          src={image4}
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          width={200}
          height={200}
        />
        <Image
          alt="Statamic"
          src={image5}
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}
