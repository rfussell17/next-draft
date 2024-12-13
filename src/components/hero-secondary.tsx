import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Gradient } from './gradient'

const HeroSecondary = ({
  eyebrow = 'Deploy faster',
  title = 'Everything you need to deploy your app',
  description = 'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
  features = [
    {
      name: 'Push to deploy',
      description:
        'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod.',
      href: '#',
      icon: ArrowPathIcon,
    },
  ],
  accentColor = 'text-white',
  textColor = 'text-white',
  secondaryTextColor = 'text-white',
}) => {
  return (
    <Gradient>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className={`text-base/7 font-semibold ${accentColor}`}>
              {eyebrow}
            </h2>
            <p
              className={`mt-2 text-pretty text-4xl font-semibold tracking-tight ${textColor} sm:text-5xl lg:text-balance`}
            >
              {title}
            </p>
            <p className={`mt-6 text-lg/8 ${secondaryTextColor}`}>
              {description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt
                    className={`flex items-center gap-x-3 text-base/7 font-semibold ${textColor}`}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className={`size-5 flex-none ${accentColor}`}
                    />
                    {feature.name}
                  </dt>
                  <dd
                    className={`mt-4 flex flex-auto flex-col text-base/7 ${secondaryTextColor}`}
                  >
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href={feature.href}
                        className={`text-gray-100 rounded-xl bg-primary px-4 py-2 text-sm/6 font-semibold`}
                      >
                        See How We {feature.name}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Gradient>
  )
}

export default HeroSecondary
