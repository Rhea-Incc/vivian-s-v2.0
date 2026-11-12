import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Article, Collection, Product, Project } from '@/lib/content/types'
import { getCollection } from '@/lib/content/collections'
import { articleCategoryLabel, readingMinutes } from '@/lib/content/journal'
import { categoryLabel } from '@/lib/content/projects'

const imageHover = 'object-cover transition-transform duration-[1400ms] ease-[var(--ease-luxe)] group-hover:scale-[1.04]'

export function CollectionCard({
  collection,
  index,
  aspect = 'aspect-[4/5]',
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
}: {
  collection: Collection
  index?: number
  aspect?: string
  sizes?: string
}) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div className={cn('relative overflow-hidden bg-secondary', aspect)}>
        <Image src={collection.image.src} alt={collection.image.alt} fill sizes={sizes} className={imageHover} />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl font-light md:text-3xl">{collection.title}</h3>
        {index !== undefined && (
          <span className="eyebrow text-[0.6rem] text-bronze">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{collection.summary}</p>
    </Link>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const collection = getCollection(product.collection)
  const image = product.images[0]
  return (
    <Link href={`/collections/${product.collection}/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={imageHover}
        />
        {product.mode === 'bespoke' && (
          <span className="eyebrow absolute top-4 left-4 bg-limestone/90 px-3 py-1.5 text-[0.55rem] text-walnut">
            Made to commission
          </span>
        )}
      </div>
      <p className="eyebrow mt-5 text-[0.6rem] text-earth">{collection?.shortTitle}</p>
      <h3 className="mt-2 font-serif text-2xl font-light">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
    </Link>
  )
}

export function ArticleCard({ article, large }: { article: Article; large?: boolean }) {
  return (
    <Link href={`/journal/${article.slug}`} className="group block">
      <div className={cn('relative overflow-hidden bg-secondary', large ? 'aspect-[4/3]' : 'aspect-[3/2]')}>
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes={large ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className={imageHover}
        />
      </div>
      <p className="eyebrow mt-5 flex gap-3 text-[0.6rem] text-earth">
        <span>{articleCategoryLabel(article.category)}</span>
        <span aria-hidden className="text-bronze">·</span>
        <span className="text-muted-foreground">{readingMinutes(article)} min read</span>
      </p>
      <h3 className={cn('mt-3 font-serif font-light text-balance', large ? 'text-3xl md:text-4xl' : 'text-2xl')}>
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
    </Link>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={imageHover}
        />
        {!project.verified && (
          <span className="eyebrow absolute top-4 left-4 border border-dashed border-walnut/40 bg-limestone/90 px-3 py-1.5 text-[0.55rem] text-walnut">
            Awaiting verified project
          </span>
        )}
      </div>
      <p className="eyebrow mt-5 text-[0.6rem] text-earth">{categoryLabel(project.category)}</p>
      <h3 className="mt-2 font-serif text-2xl font-light md:text-3xl">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
    </Link>
  )
}
