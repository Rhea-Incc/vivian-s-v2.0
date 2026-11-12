import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { Container, Eyebrow, PlaceholderNote, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export const metadata: Metadata = {
  title: 'Our Story',
  description: "The philosophy behind Vivian's Furniture: African heritage, solid wood and furniture crafted for generations.",
  alternates: { canonical: '/our-story' },
}

const values = [
  { title: 'Heritage', body: 'We draw on the principles of African form: confident volume, rhythm and meaning carried in material.' },
  { title: 'Integrity', body: 'Solid timber, honest construction and finishes chosen to age gracefully rather than to impress briefly.' },
  { title: 'Longevity', body: 'We make furniture to be inherited, repaired and loved across generations, never to be replaced.' },
]

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Where heritage becomes timeless."
        intro="A studio devoted to furniture that carries the memory of the continent into the homes of today."
        image={{
          src: '/images/heritage-sculpture-chair.jpg',
          alt: 'A solid timber lounge chair beside a large carved sculpture and a relief wall panel',
        }}
        crumbs={[{ label: 'Our Story', href: '/our-story' }]}
      />

      <section className="py-24 md:py-36">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow>The beginning</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7 md:col-start-5">
            <p className="font-serif text-3xl font-light leading-snug text-balance md:text-5xl">
              {"Vivian's Furniture was founded on a simple belief: that furniture can carry a culture's sense of form with the same dignity as its art."}
            </p>
            <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground md:text-lg">
              <p>
                We look to the carvers, builders and makers of Africa not for motifs to borrow, but for principles to
                understand. Proportion, presence and the beauty of a surface worked by hand guide everything we make.
              </p>
              <p>
                Our pieces are made for international interiors, yet they remain unmistakably rooted. They are meant to be
                lived with every day, and to be passed on.
              </p>
            </div>
            <PlaceholderNote className="mt-10">
              {"The founder's personal story, studio history and portrait will be added once supplied."}
            </PlaceholderNote>
          </Reveal>
        </Container>
      </section>

      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/art-earth-city.jpg"
            alt="Abstract painting of an earthen city in ochre and umber"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-24 md:py-36">
        <Container>
          <Reveal>
            <Eyebrow>What we hold to</Eyebrow>
          </Reveal>
          <ul className="mt-14 grid gap-14 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 110} className="border-t border-foreground/15 pt-8">
                <h2 className="font-serif text-4xl font-light">{v.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
