import Image from 'next/image'
import { collections } from '@/lib/content/collections'
import { articles } from '@/lib/content/journal'
import { ArticleCard, CollectionCard } from '@/components/site/cards'
import { Container, Cta, Eyebrow, Reveal, SectionIntro } from '@/components/site/primitives'

export function HeritageIntro() {
  return (
    <section className="py-24 md:py-40">
      <Container className="grid gap-16 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <Eyebrow className="mb-8">Our philosophy</Eyebrow>
          <h2 className="display text-5xl md:text-7xl">
            Where heritage becomes <em className="text-earth">timeless.</em>
          </h2>
          <div className="mt-10 max-w-md space-y-5 leading-relaxed text-muted-foreground md:text-lg">
            <p>
              We create furniture that carries the memory of African form: the confidence of carved volume, the rhythm of
              hand-worked surfaces, the quiet authority of solid wood.
            </p>
            <p>Each piece is made to be inherited, growing richer with every year it is lived with.</p>
          </div>
          <Cta href="/our-story" variant="text" arrow className="mt-10">
            Read Our Story
          </Cta>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 lg:col-span-6 lg:col-start-7">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/art-earth-city.jpg"
                alt="Abstract painting of an earthen city rendered in ochre, sand and umber tones"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-[0.6rem] text-muted-foreground">
              The earth tones of the continent inform every palette we choose.
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}

export function CollectionsShowcase() {
  const [first, second, ...rest] = collections
  return (
    <section className="border-t border-foreground/10 py-24 md:py-36">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="The collections" title="Furniture for every room of a considered home." />
          <Reveal>
            <Cta href="/collections" variant="text" arrow>
              View All Collections
            </Cta>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <CollectionCard collection={first} index={0} aspect="aspect-[4/3]" sizes="(min-width: 768px) 58vw, 100vw" />
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:mt-32">
            <CollectionCard collection={second} index={1} sizes="(min-width: 768px) 42vw, 100vw" />
          </Reveal>
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100} className="md:col-span-6 lg:col-span-3 [&:nth-child(4)]:lg:col-span-3">
              <CollectionCard collection={c} index={i + 2} aspect="aspect-[3/4]" sizes="(min-width: 1024px) 25vw, 50vw" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

const craftDetails = [
  { src: '/images/detail-armrest.jpg', alt: 'Polished figured armrest with a fine inlaid line', label: 'Figured grain' },
  { src: '/images/detail-dovetail.jpg', alt: 'Hand-cut dovetail corner joint', label: 'Honest joinery' },
  { src: '/images/detail-brass-corner.jpg', alt: 'Walnut cabinet corner with a brushed brass edge', label: 'Considered detail' },
  { src: '/images/detail-leg-joint.jpg', alt: 'Shaped walnut leg flowing into a tabletop', label: 'Sculpted form' },
]

export function CraftStrip() {
  return (
    <section className="bg-walnut py-24 text-limestone md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-6">
            <p className="eyebrow flex items-center gap-4 text-sand">
              <span aria-hidden className="h-px w-8 bg-sand" />
              The craft
            </p>
            <h2 className="display mt-8 text-5xl md:text-7xl">Made slowly, by hand, to last.</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-limestone/75">
              From the selection of each board to the final hand-rubbed finish, our process honours the timber and the
              time it took to grow.
            </p>
            <Cta href="/the-craft" variant="text-light" arrow className="mt-8">
              Discover The Craft
            </Cta>
          </Reveal>
        </div>
        <ul className="mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4 md:gap-6">
          {craftDetails.map((d, i) => (
            <Reveal as="li" key={d.src} delay={i * 90} className={i % 2 === 1 ? 'md:mt-16' : ''}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={d.src} alt={d.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
              <p className="eyebrow mt-4 text-[0.6rem] text-sand">{d.label}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export function BespokeFeature() {
  return (
    <section className="py-24 md:py-40">
      <Container className="grid gap-14 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/workshop-hands.png"
              alt="A craftsman's hands shaping a curved walnut component at a workbench"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-4 md:col-start-9">
          <Eyebrow className="mb-8">Bespoke</Eyebrow>
          <h2 className="display text-5xl md:text-6xl">A piece that could exist nowhere else.</h2>
          <p className="mt-8 leading-relaxed text-muted-foreground md:text-lg">
            For residences, architects and hospitality projects, we design and make furniture around your rooms, your
            proportions and the way you live.
          </p>
          <ol className="mt-10 space-y-4 border-t border-foreground/15 pt-8">
            {['Consultation', 'Design development', 'Making', 'Delivery'].map((step, i) => (
              <li key={step} className="flex items-baseline gap-5">
                <span className="eyebrow text-[0.6rem] text-bronze">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-xl">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href="/bespoke#enquire" data-track="bespoke_cta">
              Begin a Commission
            </Cta>
            <Cta href="/bespoke" variant="text" arrow>
              The Process
            </Cta>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export function JournalPreview() {
  const [lead, ...others] = articles
  return (
    <section className="border-t border-foreground/10 py-24 md:py-36">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="The journal" title="Notes on heritage, material and form." />
          <Reveal>
            <Cta href="/journal" variant="text" arrow>
              Read the Journal
            </Cta>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <ArticleCard article={lead} large />
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-6 md:gap-8">
            {others.slice(0, 2).map((a, i) => (
              <Reveal key={a.slug} delay={120 + i * 100}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
