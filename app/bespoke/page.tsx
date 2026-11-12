import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/page-hero'
import { Container, Eyebrow, Reveal, SectionIntro } from '@/components/site/primitives'
import { EnquiryForm } from '@/components/forms/enquiry-form'

export const metadata: Metadata = {
  title: 'Bespoke Furniture Commissions',
  description:
    'Commission handcrafted solid wood furniture designed around your space. For private residences, architects, interior designers and hospitality projects.',
  alternates: { canonical: '/bespoke' },
}

const steps = [
  {
    title: 'Consultation',
    body: 'We begin by listening: to your rooms, the way you live and the feeling you want a piece to bring. Plans, photographs and references are all welcome.',
  },
  {
    title: 'Design development',
    body: 'Our studio develops sketches and drawings, resolving proportion, structure, timber and finish with you until the piece feels inevitable.',
  },
  {
    title: 'Making',
    body: 'Your piece is shaped by hand in our workshop. We share progress along the way so you can follow it taking form.',
  },
  {
    title: 'Delivery & placement',
    body: 'Finished pieces are carefully wrapped, delivered and placed, ready to begin their long life in your home or project.',
  },
]

const clients = [
  { title: 'Private residences', body: 'Single statement pieces or complete rooms, made for the homes of discerning clients.' },
  { title: 'Architects & interior designers', body: 'Collaborations resolved to your drawings, specifications and project schedule.' },
  { title: 'Hospitality & lodges', body: 'Durable, characterful furniture for hotels, lodges and restaurants that want a sense of place.' },
]

export default function BespokePage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke"
        title="Furniture made around your space."
        intro="Commissions begin with a conversation and end with a piece that could exist nowhere else."
        image={{
          src: '/images/workshop-hands.png',
          alt: "A craftsman's hands shaping a curved walnut component at a workbench",
        }}
        crumbs={[{ label: 'Bespoke', href: '/bespoke' }]}
      />

      <section className="py-24 md:py-36">
        <Container>
          <SectionIntro eyebrow="The process" title="Four considered stages." />
          <ol className="mt-16 grid gap-px bg-foreground/10 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="bg-background p-8 md:p-10">
                <span className="font-serif text-6xl font-light text-sand">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 font-serif text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-walnut py-24 text-limestone md:py-36">
        <Container className="grid gap-14 md:grid-cols-12 md:items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Image
              src="/images/chair-sculpted-oak.jpg"
              alt="Dark oak dining chair with a curved back rail against a terracotta backdrop"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-sand">
                <span aria-hidden className="h-px w-8 bg-sand" />
                Who we make for
              </p>
              <h2 className="display mt-8 text-5xl md:text-6xl">For homes and projects with a point of view.</h2>
            </Reveal>
            <ul className="mt-12 divide-y divide-limestone/15 border-y border-limestone/15">
              {clients.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 100} className="py-6">
                  <h3 className="font-serif text-2xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-limestone/70">{c.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="enquire" className="scroll-mt-24 py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Commission enquiry</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-6xl">Tell us about your space.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Share as much or as little as you know. Our studio will respond personally to arrange a consultation.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="bespoke" />
          </div>
        </Container>
      </section>
    </>
  )
}
