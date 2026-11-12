import Image from 'next/image'
import type { ReactNode } from 'react'
import type { ImageAsset } from '@/lib/content/types'
import { Container, Eyebrow } from './primitives'
import { Breadcrumbs, type Crumb } from './breadcrumbs'

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumbs,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  image?: ImageAsset
  crumbs?: Crumb[]
}) {
  return (
    <section className="pt-28 md:pt-36">
      <Container>
        {crumbs && <Breadcrumbs items={crumbs} className="mb-10 md:mb-14" />}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow className="animate-rise mb-6">{eyebrow}</Eyebrow>
            <h1 className="display animate-rise text-5xl [animation-delay:120ms] sm:text-6xl md:text-7xl xl:text-8xl">
              {title}
            </h1>
          </div>
          {intro && (
            <div className="animate-rise text-pretty leading-relaxed text-muted-foreground [animation-delay:240ms] md:col-span-4 md:col-start-9 md:text-lg">
              {intro}
            </div>
          )}
        </div>
      </Container>
      {image && (
        <div className="mt-14 md:mt-20">
          <div className="relative mx-auto aspect-[4/5] max-w-[1520px] overflow-hidden sm:aspect-[16/9] md:aspect-[21/9] md:px-10">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1520px) 1440px, 100vw"
                className="animate-settle object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
