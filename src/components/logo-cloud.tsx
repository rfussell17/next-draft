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
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <Image
        alt="SavvyCal"
        src={image1}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <Image
        alt="Laravel"
        src={image2}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <Image
        alt="Tuple"
        src={image3}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <Image
        alt="Transistor"
        src={image4}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <Image
        alt="Statamic"
        src={image5}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
