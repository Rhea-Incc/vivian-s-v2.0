import type { Metadata } from 'next'
import { projects, projectCategories } from '@/lib/content/projects'
import { PageHero } from '@/components/site/page-hero'
import { ProjectCard } from '@/components/site/cards'
import { Container, PlaceholderNote, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Residential, hospitality, commercial and architectural projects furnished by Vivian’s Furniture.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Rooms we have helped to furnish."
        intro="From private residences to lodges and architectural collaborations, each project is a dialogue between a space and the pieces made for it."
        crumbs={[{ label: 'Projects', href: '/projects' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <PlaceholderNote>
            Verified projects have not yet been supplied. The entries below reserve space for real work and use editorial
            imagery only.
          </PlaceholderNote>
          <ul className="eyebrow mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.6rem] text-muted-foreground">
            {projectCategories.map((c) => (
              <li key={c.value}>{c.label}</li>
            ))}
          </ul>
          <ul className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 2) * 120} className={i % 2 ? 'md:mt-24' : ''}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <EnquiryBand
        title="Planning a project of your own?"
        body="We collaborate with homeowners, architects, interior designers and hospitality groups."
      />
    </>
  )
}
