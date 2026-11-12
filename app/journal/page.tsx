import type { Metadata } from 'next'
import { articles } from '@/lib/content/journal'
import { PageHero } from '@/components/site/page-hero'
import { ArticleCard } from '@/components/site/cards'
import { Container, Reveal } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Essays on African design heritage, solid wood, architecture, interiors and craft.',
  alternates: { canonical: '/journal' },
}

export default function JournalPage() {
  const [lead, ...rest] = articles
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Notes on heritage, material and form."
        intro="Reflections from our studio on the ideas that shape our work."
        crumbs={[{ label: 'Journal', href: '/journal' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="md:w-2/3">
            <ArticleCard article={lead} large />
          </Reveal>
          <ul className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 md:mt-28">
            {rest.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={(i % 3) * 100}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
