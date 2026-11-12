import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { collections, getCollection, getRelatedCollections } from '@/lib/content/collections'
import { getProductsByCollection } from '@/lib/content/products'
import { PageHero } from '@/components/site/page-hero'
import { CollectionCard, ProductCard } from '@/components/site/cards'
import { Container, Eyebrow, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps<'/collections/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const c = getCollection(slug)
  if (!c) return {}
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/collections/${c.slug}` },
    openGraph: { images: [{ url: c.image.src, alt: c.image.alt }] },
  }
}

export default async function CollectionPage({ params }: PageProps<'/collections/[slug]'>) {
  const { slug } = await params
  const collection = getCollection(slug)
  if (!collection) notFound()
  const pieces = getProductsByCollection(collection.slug)
  const related = getRelatedCollections(collection.slug)

  return (
    <>
      <PageHero
        eyebrow={collection.room}
        title={collection.title}
        intro={collection.summary}
        image={collection.image}
        crumbs={[
          { label: 'Collections', href: '/collections' },
          { label: collection.title, href: `/collections/${collection.slug}` },
        ]}
      />

      <section className="py-20 md:py-32">
        <Container className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow>About the collection</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="space-y-6 md:col-span-7 md:col-start-5">
            {collection.introduction.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? 'font-serif text-3xl font-light leading-snug md:text-4xl' : 'leading-relaxed text-muted-foreground md:text-lg'}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-foreground/10 py-20 md:py-28">
        <Container>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-3xl font-light md:text-4xl">Pieces in this collection</h2>
            <span className="eyebrow text-[0.6rem] text-muted-foreground">
              {pieces.length} {pieces.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
          <p className="mt-16 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Piece names are working titles. Dimensions, timbers and lead times are confirmed with our studio on enquiry.
          </p>
        </Container>
      </section>

      <section className="border-t border-foreground/10 py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-3xl font-light md:text-4xl">Continue exploring</h2>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-3">
            {related.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 100}>
                <CollectionCard collection={c} aspect="aspect-[3/2]" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
