import type { MetadataRoute } from 'next'
import { collections } from '@/lib/content/collections'
import { products } from '@/lib/content/products'
import { articles } from '@/lib/content/journal'
import { site } from '@/lib/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/collections',
    '/bespoke',
    '/our-story',
    '/the-craft',
    '/projects',
    '/journal',
    '/contact',
    ...collections.map((c) => `/collections/${c.slug}`),
    ...products.map((p) => `/collections/${p.collection}/${p.slug}`),
    ...articles.map((a) => `/journal/${a.slug}`),
  ]
  return paths.map((p) => ({ url: `${site.url}${p}` }))
}
