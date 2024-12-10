import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import type { FC } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <div className="relative">
      <Gradient>
        <Container className="relative">
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-white lg:leading-1 text-balance text-5xl/[0.9] font-medium tracking-tight md:text-7xl/[0.8]">
              {title}
            </h1>
            <p className="text-white mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
              {subtitle}
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button
                variant="primary"
                href={primaryButtonHref}
                className="font-semibold"
              >
                {primaryButtonText}
              </Button>
              <Button variant="outline" href={secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </Container>
      </Gradient>
    </div>
  )
}

export default Hero
