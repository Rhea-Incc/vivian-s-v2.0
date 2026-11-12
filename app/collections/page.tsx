import type { Metadata } from 'next'
import { collections } from '@/lib/content/collections'
import { PageHero } from '@/components/site/page-hero'
import { CollectionCard } from '@/components/site/cards'
import { Container, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Explore handcrafted solid wood collections for dining, living, bedroom and statement spaces, alongside bespoke creations.',
  alternates: { canonical: '/collections' },
}

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The collections"
        title="Six collections, one language of form."
        intro="Each collection is composed as a family of pieces, so a room, or an entire home, can be furnished with a single coherent voice."
        crumbs={[{ label: 'Collections', href: '/collections' }]}
      />
      <section className="py-20 md:py-32">
        <Container>
          <ul className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 110} className={i % 3 === 1 ? 'lg:mt-24' : ''}>
                <CollectionCard collection={c} index={i} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <EnquiryBand
        title="Looking for something entirely your own?"
        body="Every collection piece can be the starting point for a commission, adapted in dimension, timber and finish."
      />
    </>
  )
}
