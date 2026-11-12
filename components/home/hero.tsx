import Image from 'next/image'
import { Cta } from '@/components/site/primitives'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-walnut text-limestone">
      <Image
        src="/images/hero-living.jpg"
        alt="A calm living room with a curved cream sofa, a sculptural walnut coffee table and a figured walnut sideboard"
        fill
        priority
        sizes="100vw"
        className="animate-settle object-cover object-[60%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/35 to-walnut/40"
      />
      <div className="relative mx-auto w-full max-w-[1520px] px-5 pt-40 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow animate-rise flex items-center gap-4 text-sand">
          <span aria-hidden className="h-px w-8 bg-sand" />
          Handcrafted solid wood furniture
        </p>
        <h1 className="display animate-rise mt-8 max-w-5xl text-[3.25rem] [animation-delay:150ms] sm:text-7xl md:text-8xl xl:text-[8.5rem]">
          Rooted in African Heritage.{' '}
          <em className="font-light text-sand">Crafted for Generations.</em>
        </h1>
        <div className="animate-rise mt-12 flex flex-col gap-10 [animation-delay:320ms] md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty leading-relaxed text-limestone/80 md:text-lg">
            Distinctive pieces shaped by hand in solid timber, for homes and spaces made to be lived in for a lifetime.
          </p>
          <div className="flex flex-wrap gap-4">
            <Cta href="/collections" variant="light">
              Explore Collections
            </Cta>
            <Cta href="/bespoke" variant="outline-light" data-track="bespoke_cta">
              Discover Bespoke
            </Cta>
          </div>
        </div>
        <div aria-hidden className="mt-16 hidden items-center gap-4 md:flex">
          <span className="animate-drift block h-10 w-px bg-limestone/60" />
          <span className="eyebrow text-[0.6rem] text-limestone/60">Scroll</span>
        </div>
      </div>
    </section>
  )
}
