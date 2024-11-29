import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import Image from 'next/image'

function Rings() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      className={clsx(
        'col-start-1 row-start-1 size-full',
        '[mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]',
      )}
    >
      {Array.from(Array(42).keys()).map((n) => (
        <circle
          key={n}
          cx="250"
          cy="250"
          r={n * 14 + 4}
          className="stroke-white"
          style={{ strokeOpacity: 0.15 }}
        />
      ))}
    </svg>
  )
}

function Checkmark() {
  return (
    <div className="z-10 col-start-1 row-start-1 flex items-center justify-center">
      <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-t from-green-500 to-green-300 shadow">
        <CheckIcon className="size-4 fill-white" />
      </div>
    </div>
  )
}

function Photos() {
  return (
    <div className="z-10 col-start-1 row-start-1">
      <div className="mx-auto flex size-full max-w-md items-center justify-around">
        <Image
          alt=""
          src="/linked-avatars/customer.jpg"
          width={200}
          height={200}
          className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
        <Image
          alt=""
          src="/linked-avatars/manager.jpg"
          width={200}
          height={200}
          className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
      </div>
    </div>
  )
}

export function LinkedAvatars() {
  return (
    <div aria-hidden="true" className="isolate mx-auto grid h-full grid-cols-1">
      <Rings />
      <Photos />
      <Checkmark />
    </div>
  )
}

export default LinkedAvatars
