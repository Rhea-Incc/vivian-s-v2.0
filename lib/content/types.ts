export type ImageAsset = {
  src: string
  alt: string
}

export type CollectionSlug =
  | 'dining-and-entertaining'
  | 'living-and-lounge'
  | 'bedroom'
  | 'occasional'
  | 'statement-pieces'
  | 'bespoke-creations'

export type Collection = {
  slug: CollectionSlug
  title: string
  shortTitle: string
  summary: string
  introduction: string[]
  image: ImageAsset
  room: string
}

/**
 * Product model prepared for Phase 2.0 commerce.
 * Optional fields stay undefined until verified data is supplied; the UI renders
 * "on request" states rather than inventing values.
 */
export type Product = {
  slug: string
  name: string
  isWorkingTitle: boolean
  collection: CollectionSlug
  mode: 'standard' | 'bespoke'
  summary: string
  inspiration: string
  images: ImageAsset[]
  materials?: string[]
  dimensions?: { width?: number; depth?: number; height?: number; unit: 'cm' }
  finishes?: string[]
  craftsmanship?: string[]
  leadTime?: string
  commerce?: {
    sku?: string
    price?: { amount: number; currency: 'KES' | 'USD' }
    purchasable: boolean
  }
}

export type ProjectCategory = 'residential' | 'hospitality' | 'commercial' | 'architectural'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  verified: boolean
  summary: string
  image: ImageAsset
  gallery: ImageAsset[]
  location?: string
  collaborators?: string[]
  pieces?: string[]
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }

export type ArticleCategory = 'heritage' | 'material' | 'architecture' | 'interiors' | 'craft'

export type Article = {
  slug: string
  title: string
  category: ArticleCategory
  excerpt: string
  image: ImageAsset
  body: ArticleBlock[]
}
