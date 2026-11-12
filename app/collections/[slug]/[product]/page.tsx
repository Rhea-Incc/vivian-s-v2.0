import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCollection } from '@/lib/content/collections'
import { getProduct, getRelatedProducts, products } from '@/lib/content/products'
import { site } from '@/lib/content/site'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { ProductCard } from '@/components/site/cards'
import { Container, Cta, Eyebrow, PlaceholderNote, Reveal } from '@/components/site/primitives'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { JsonLd } from '@/components/site/json-ld'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.collection, product: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/collections/[slug]/[product]'>): Promise<Metadata> {
  const { product: slug } = await params
  const p = getProduct(slug)
  if (!p) return {}
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/collections/${p.collection}/${p.slug}` },
    openGraph: { images: [{ url: p.images[0].src, alt: p.images[0].alt }] },
  }
}

export default async function ProductPage({ params }: PageProps<'/collections/[slug]/[product]'>) {
  const { slug, product: productSlug } = await params
  const product = getProduct(productSlug)
  if (!product || product.collection !== slug) notFound()
  const collection = getCollection(product.collection)!
  const related = getRelatedProducts(product)
  const [primary, ...gallery] = product.images

  const specs: { label: string; value?: string }[] = [
    { label: 'Materials', value: product.materials?.join(', ') },
    {
      label: 'Dimensions',
      value: product.dimensions
        ? [product.dimensions.width, product.dimensions.depth, product.dimensions.height]
            .map((v) => v ?? '—')
            .join(' × ') + ` ${product.dimensions.unit}`
        : undefined,
    },
    { label: 'Finishes', value: product.finishes?.join(', ') },
    { label: 'Lead time', value: product.leadTime },
  ]

  return (
    <>
      <section className="pt-28 md:pt-36">
        <Container>
          <Breadcrumbs
            className="mb-10"
            items={[
              { label: 'Collections', href: '/collections' },
              { label: collection.title, href: `/collections/${collection.slug}` },
              { label: product.name, href: `/collections/${collection.slug}/${product.slug}` },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="animate-settle object-cover"
                />
              </div>
              {gallery.map((img) => (
                <Reveal key={img.src} className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Eyebrow className="animate-rise">{collection.title}</Eyebrow>
                <h1 className="display animate-rise mt-6 text-5xl [animation-delay:120ms] md:text-6xl">{product.name}</h1>
                {product.isWorkingTitle && (
                  <p className="mt-3 text-xs italic text-muted-foreground">Working title</p>
                )}
                <p className="mt-8 font-serif text-2xl font-light leading-snug">{product.summary}</p>
                <p className="mt-6 leading-relaxed text-muted-foreground">{product.inspiration}</p>

                <dl className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
                  {specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-3 gap-4 py-4 text-sm">
                      <dt className="eyebrow text-[0.6rem] text-muted-foreground">{s.label}</dt>
                      <dd className="col-span-2">{s.value ?? <span className="text-muted-foreground">Confirmed on enquiry</span>}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-4 py-4 text-sm">
                    <dt className="eyebrow text-[0.6rem] text-muted-foreground">Availability</dt>
                    <dd className="col-span-2">
                      {product.mode === 'bespoke' ? 'Made to commission' : 'Price and availability on request'}
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Cta href="#enquire" data-track="product_enquiry_cta">
                    Enquire About This Piece
                  </Cta>
                  <Cta href="/bespoke#enquire" variant="outline" data-track="bespoke_cta">
                    Commission a Variation
                  </Cta>
                </div>
                <PlaceholderNote className="mt-8">
                  Specifications, pricing and online purchase will appear here once verified by the studio.
                </PlaceholderNote>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="enquire" className="mt-24 scroll-mt-24 border-t border-foreground/10 bg-card py-20 md:mt-32 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Enquire</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-5xl">Ask our studio about the {product.name}.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="product" subject={product.name} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-3xl font-light md:text-4xl">You may also consider</h2>
          <ul className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.summary,
          image: product.images.map((i) => `${site.url}${i.src}`),
          brand: { '@type': 'Brand', name: site.name },
          category: collection.title,
        }}
      />
    </>
  )
}
