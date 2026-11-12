import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { categoryLabel, getProject, projects } from '@/lib/content/projects'
import { PageHero } from '@/components/site/page-hero'
import { Container, PlaceholderNote, Reveal } from '@/components/site/primitives'
import { EnquiryBand } from '@/components/site/enquiry-band'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return { title: p.title, description: p.summary, robots: p.verified ? undefined : { index: false } }
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const facts = [
    { label: 'Category', value: categoryLabel(project.category) },
    { label: 'Location', value: project.location },
    { label: 'Collaborators', value: project.collaborators?.join(', ') },
    { label: 'Pieces', value: project.pieces?.join(', ') },
  ]

  return (
    <>
      <PageHero
        eyebrow={categoryLabel(project.category)}
        title={project.title}
        intro={project.summary}
        image={project.image}
        crumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-12">
          <dl className="divide-y divide-foreground/10 border-y border-foreground/10 md:col-span-4">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-3 gap-4 py-4 text-sm">
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">{f.label}</dt>
                <dd className="col-span-2">{f.value ?? <span className="text-muted-foreground">To be confirmed</span>}</dd>
              </div>
            ))}
          </dl>
          <div className="md:col-span-7 md:col-start-6">
            {!project.verified && (
              <PlaceholderNote>
                This page reserves space for a verified project. Imagery is editorial and does not depict a completed
                commission.
              </PlaceholderNote>
            )}
            <div className="mt-10 grid gap-4">
              {project.gallery.map((img) => (
                <Reveal key={img.src} className="relative aspect-[3/2] overflow-hidden bg-secondary">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <EnquiryBand />
    </>
  )
}
