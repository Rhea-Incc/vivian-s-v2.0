import type { Collection, CollectionSlug } from './types'

export const collections: Collection[] = [
  {
    slug: 'dining-and-entertaining',
    title: 'Dining & Entertaining',
    shortTitle: 'Dining',
    room: 'Dining room',
    summary: 'Tables shaped to gather around, made to host generations of conversation.',
    introduction: [
      'The table is where a household tells its stories. Our dining pieces are conceived as architecture for the gathering: generous surfaces, grounded bases and forms that reward a second look.',
      'Each piece is shaped in solid timber, its proportions considered for the rooms it will hold and the occasions it will witness.',
    ],
    image: {
      src: '/images/dining-sculptural-table.jpg',
      alt: 'Oval solid wood dining table on a sculptural interlocking base, set in a sunlit room with arched windows',
    },
  },
  {
    slug: 'living-and-lounge',
    title: 'Living & Lounge',
    shortTitle: 'Living',
    room: 'Living room',
    summary: 'Seating and surfaces composed for slow afternoons and considered rooms.',
    introduction: [
      'Living spaces ask for furniture with presence and restraint in equal measure. These pieces pair the warmth of timber with tactile upholstery and quiet, sculptural lines.',
      'They are designed to be lived with daily, and to look more beautiful for it.',
    ],
    image: {
      src: '/images/interior-barn-lounge.jpg',
      alt: 'Two textured lounge chairs beside a hand-carved timber sideboard and a marble coffee table in a timber-clad hall',
    },
  },
  {
    slug: 'bedroom',
    title: 'Bedroom Collections',
    shortTitle: 'Bedroom',
    room: 'Bedroom',
    summary: 'Calm, grounded forms for the most private rooms of the home.',
    introduction: [
      'The bedroom is a room of retreat. Our bedroom pieces favour low silhouettes, softened edges and timber left to speak for itself.',
      'Beds, side tables and storage are composed as a family, so a room can be furnished with a single, coherent voice.',
    ],
    image: {
      src: '/images/bedroom-walnut.png',
      alt: 'Low walnut bed with a curved headboard in a limestone bedroom washed in afternoon light',
    },
  },
  {
    slug: 'occasional',
    title: 'Occasional Furniture',
    shortTitle: 'Occasional',
    room: 'Throughout the home',
    summary: 'Stools, side tables and seats that punctuate a room with character.',
    introduction: [
      'Occasional pieces are the punctuation of an interior. They move between rooms, gather in corners and offer a place to pause.',
      'Small in scale, they carry the same structural rigour and finish as our largest commissions.',
    ],
    image: {
      src: '/images/occasional-stools.jpg',
      alt: 'A group of sculptural timber stools and chairs arranged on a pale wood floor before tall windows',
    },
  },
  {
    slug: 'statement-pieces',
    title: 'Statement Pieces',
    shortTitle: 'Statement',
    room: 'Entrance & gallery spaces',
    summary: 'Sculptural works in timber that anchor a space and define its character.',
    introduction: [
      'Some pieces are made to be the first thing a guest remembers. Our statement works move closer to sculpture, drawing on organic geometry and the expressive possibilities of solid wood.',
      'They are made in limited numbers, each shaped by hand to its final form.',
    ],
    image: {
      src: '/images/statement-console.jpg',
      alt: 'Sculptural walnut console table with a flowing S-shaped base beneath arched windows and mountain views',
    },
  },
  {
    slug: 'bespoke-creations',
    title: 'Bespoke Creations',
    shortTitle: 'Bespoke',
    room: 'Made for your space',
    summary: 'Furniture commissioned around your rooms, your proportions and your vision.',
    introduction: [
      'Bespoke work begins with a conversation and ends with a piece that could exist nowhere else. Dimensions, timbers, finishes and details are resolved together with our studio.',
      'The pieces shown here illustrate the language our commissions draw from.',
    ],
    image: {
      src: '/images/chair-sculpted-oak.jpg',
      alt: 'Dark oak dining chair with a curved back rail and upholstered seat against a terracotta backdrop',
    },
  },
]

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug)
}

export function getRelatedCollections(slug: CollectionSlug, count = 3) {
  const index = collections.findIndex((c) => c.slug === slug)
  return Array.from({ length: count }, (_, i) => collections[(index + i + 1) % collections.length])
}
