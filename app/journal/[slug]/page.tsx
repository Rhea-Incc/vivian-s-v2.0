import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { articleCategoryLabel, articles, getArticle, readingMinutes } from '@/lib/content/journal'
import { site } from '@/lib/content/site'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { ArticleCard } from '@/components/site/cards'
import { Container, Eyebrow, Reveal } from '@/components/site/primitives'
import { JsonLd } from '@/components/site/json-ld'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps<'/journal/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: { type: 'article', images: [{ url: a.image.src, alt: a.image.alt }] },
  }
}

export default async function ArticlePage({ params }: PageProps<'/journal/[slug]'>) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <article>
      <header className="pt-28 md:pt-36">
        <Container className="max-w-4xl">
          <Breadcrumbs
            className="mb-10"
            items={[
              { label: 'Journal', href: '/journal' },
              { label: article.title, href: `/journal/${article.slug}` },
            ]}
          />
          <Eyebrow className="animate-rise">
            {articleCategoryLabel(article.category)} · {readingMinutes(article)} min read
          </Eyebrow>
          <h1 className="display animate-rise mt-6 text-5xl [animation-delay:120ms] md:text-7xl">{article.title}</h1>
          <p className="animate-rise mt-8 font-serif text-2xl font-light leading-snug text-muted-foreground [animation-delay:240ms]">
            {article.excerpt}
          </p>
        </Container>
        <div className="mx-auto mt-14 max-w-[1520px] md:px-10">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src={article.image.src} alt={article.image.alt} fill priority sizes="100vw" className="animate-settle object-cover" />
          </div>
        </div>
      </header>

      <Container className="prose-editorial max-w-2xl py-20 md:py-28">
        {article.body.map((block, i) =>
          block.type === 'h2' ? (
            <h2 key={i}>{block.text}</h2>
          ) : block.type === 'quote' ? (
            <blockquote key={i}>{block.text}</blockquote>
          ) : (
            <p key={i}>{block.text}</p>
          ),
        )}
      </Container>

      <section className="border-t border-foreground/10 py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-3xl font-light md:text-4xl">Further reading</h2>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-3">
            {more.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 100}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          image: `${site.url}${article.image.src}`,
          publisher: { '@type': 'Organization', name: site.name },
        }}
      />
    </article>
  )
}
