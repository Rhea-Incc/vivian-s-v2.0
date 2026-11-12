import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { Container, Eyebrow, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export const metadata: Metadata = {
  title: 'The Craft',
  description: 'Solid wood, hand-cut joinery and patient finishing: how every Vivian’s Furniture piece is made to last.',
  alternates: { canonical: '/the-craft' },
}

const chapters = [
  {
    title: 'Selecting the timber',
    body: 'Every piece begins with the wood itself. Boards are chosen for character and stability, and matched so the grain flows across each surface as one continuous story.',
    image: { src: '/images/detail-armrest.jpg', alt: 'Figured solid wood armrest with a fine inlaid line' },
  },
  {
    title: 'Joinery',
    body: 'We favour traditional joints that hold for generations. Where joinery is visible, it becomes a quiet ornament earned through structure.',
    image: { src: '/images/detail-dovetail.jpg', alt: 'Hand-cut dovetail joint at the corner of a timber frame' },
  },
  {
    title: 'Shaping by hand',
    body: 'Curves are drawn, cut and refined by hand until each transition feels effortless to the eye and natural to the touch.',
    image: { src: '/images/detail-leg-joint.jpg', alt: 'Sculpted walnut leg flowing into a tabletop' },
  },
  {
    title: 'Detail & finish',
    body: 'Finishes are built slowly in thin layers, protecting the timber while allowing it to deepen with age. Metal details are used sparingly and precisely.',
    image: { src: '/images/detail-brass-corner.jpg', alt: 'Walnut cabinet corner finished with a brushed brass edge' },
  },
]

export default function CraftPage() {
  return (
    <>
      <PageHero
        eyebrow="The craft"
        title="Made slowly, by hand, to last."
        intro="Solid wood rewards patience. Our process honours the timber and the time it took to grow."
        image={{ src: '/images/workshop-hands.png', alt: "A craftsman's hands shaping walnut at a workbench" }}
        crumbs={[{ label: 'The Craft', href: '/the-craft' }]}
      />

      <section className="py-24 md:py-36">
        <Container className="space-y-24 md:space-y-40">
          {chapters.map((c, i) => (
            <article key={c.title} className="grid gap-10 md:grid-cols-12 md:items-center">
              <Reveal className={`relative aspect-[4/3] overflow-hidden md:col-span-7 ${i % 2 ? 'md:order-2 md:col-start-6' : ''}`}>
                <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              </Reveal>
              <Reveal delay={120} className={`md:col-span-4 ${i % 2 ? 'md:order-1 md:col-start-1' : 'md:col-start-9'}`}>
                <Eyebrow>{`Chapter ${String(i + 1).padStart(2, '0')}`}</Eyebrow>
                <h2 className="display mt-6 text-4xl md:text-5xl">{c.title}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground md:text-lg">{c.body}</p>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-walnut py-24 text-limestone md:py-32">
        <Container>
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-center font-serif text-4xl font-light italic leading-tight text-balance md:text-6xl">
              {'“A solid wood piece is never finished. It continues to mature with the people who live with it.”'}
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
