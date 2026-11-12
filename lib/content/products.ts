import type { Product } from './types'

/**
 * Presentation pieces drawn from the supplied imagery. Names are working titles
 * and specifications are intentionally left undefined until verified by the studio.
 */
export const products: Product[] = [
  {
    slug: 'sculptural-oval-dining-table',
    name: 'Sculptural Oval Dining Table',
    isWorkingTitle: true,
    collection: 'dining-and-entertaining',
    mode: 'standard',
    summary: 'An oval solid wood top carried on an interlocking, organic base.',
    inspiration:
      'The base reads like roots meeting beneath the ground: separate forms that find one another and hold the surface aloft.',
    images: [
      {
        src: '/images/dining-sculptural-table.jpg',
        alt: 'Sculptural oval dining table with interlocking organic legs in a bright room',
      },
      {
        src: '/images/detail-leg-joint.jpg',
        alt: 'Close detail of a shaped solid walnut leg flowing into the tabletop',
      },
    ],
  },
  {
    slug: 'curved-rail-dining-chair',
    name: 'Curved Rail Dining Chair',
    isWorkingTitle: true,
    collection: 'dining-and-entertaining',
    mode: 'standard',
    summary: 'A dining chair defined by a continuous curved back rail and tapering legs.',
    inspiration: 'Drawn as a single gesture, the back rail embraces the sitter while the frame stays light.',
    images: [
      {
        src: '/images/chair-sculpted-oak.jpg',
        alt: 'Dark oak dining chair with a curved back rail and upholstered seat',
      },
    ],
  },
  {
    slug: 'carved-oval-sideboard',
    name: 'Carved Oval Sideboard',
    isWorkingTitle: true,
    collection: 'living-and-lounge',
    mode: 'standard',
    summary: 'A rounded sideboard with a hand-carved, faceted timber façade.',
    inspiration: 'The faceted surface recalls adze-worked timber, catching light differently through the day.',
    images: [
      {
        src: '/images/interior-barn-lounge.jpg',
        alt: 'Hand-carved oval sideboard between two lounge chairs in a timber-clad hall',
      },
    ],
  },
  {
    slug: 'bolster-bench',
    name: 'Bolster Bench',
    isWorkingTitle: true,
    collection: 'living-and-lounge',
    mode: 'standard',
    summary: 'Upholstered bolsters resting on two half-round solid walnut supports.',
    inspiration: 'A study in balance: soft cylindrical forms cradled by grounded timber arcs.',
    images: [
      {
        src: '/images/bench-bolster.jpg',
        alt: 'Upholstered bolster bench on two half-moon walnut supports',
      },
    ],
  },
  {
    slug: 'low-walnut-bed',
    name: 'Low Walnut Bed',
    isWorkingTitle: true,
    collection: 'bedroom',
    mode: 'standard',
    summary: 'A low platform bed with a softly curved solid walnut headboard.',
    inspiration: 'Close to the ground and quiet in form, made for rest.',
    images: [
      {
        src: '/images/bedroom-walnut.png',
        alt: 'Low walnut bed with a curved headboard in a calm limestone bedroom',
      },
    ],
  },
  {
    slug: 'sculptural-stool-family',
    name: 'Sculptural Stool Family',
    isWorkingTitle: true,
    collection: 'occasional',
    mode: 'standard',
    summary: 'A group of occasional stools exploring triangle, ring and stacked forms.',
    inspiration: 'Elemental geometry, each stool a variation on how timber can carry weight.',
    images: [
      {
        src: '/images/occasional-stools.jpg',
        alt: 'Group of sculptural timber stools and chairs on a pale floor',
      },
    ],
  },
  {
    slug: 'flowing-console',
    name: 'Flowing Console',
    isWorkingTitle: true,
    collection: 'statement-pieces',
    mode: 'standard',
    summary: 'A console whose base rises in a single continuous curve to meet the top.',
    inspiration: 'Inspired by the movement of rivers across a landscape, carved into a single fluid line.',
    images: [
      {
        src: '/images/statement-console.jpg',
        alt: 'Sculptural walnut console with flowing S-shaped base',
      },
    ],
  },
  {
    slug: 'crescent-sculpture',
    name: 'Crescent Sculpture',
    isWorkingTitle: true,
    collection: 'statement-pieces',
    mode: 'standard',
    summary: 'A carved timber crescent mounted on a pale stone-like plinth.',
    inspiration: 'A small object of contemplation, made from offcuts too beautiful to set aside.',
    images: [
      {
        src: '/images/sculpture-crescent.jpg',
        alt: 'Carved walnut crescent sculpture on a white plinth',
      },
    ],
  },
  {
    slug: 'commissioned-lounge-chair',
    name: 'Commissioned Lounge Chair',
    isWorkingTitle: true,
    collection: 'bespoke-creations',
    mode: 'bespoke',
    summary: 'A generous solid timber lounge chair, shaped and upholstered to commission.',
    inspiration:
      'Shown beside carved heritage sculpture, the chair takes cues from the bold planes and confident volumes of traditional carving.',
    images: [
      {
        src: '/images/heritage-sculpture-chair.jpg',
        alt: 'Solid wood lounge chair with cream cushions beside a large carved sculpture',
      },
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCollection(collection: string) {
  return products.filter((p) => p.collection === collection)
}

export function getRelatedProducts(product: Product, count = 3) {
  const same = products.filter((p) => p.collection === product.collection && p.slug !== product.slug)
  const others = products.filter((p) => p.collection !== product.collection)
  return [...same, ...others].slice(0, count)
}
