import type { Article, ArticleCategory } from './types'

export const articleCategories: { value: ArticleCategory; label: string }[] = [
  { value: 'heritage', label: 'Design Heritage' },
  { value: 'material', label: 'Material' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'interiors', label: 'Interiors' },
  { value: 'craft', label: 'Craft' },
]

export const articles: Article[] = [
  {
    slug: 'form-memory-and-the-carved-line',
    title: 'Form, Memory and the Carved Line',
    category: 'heritage',
    excerpt:
      'African carving has always understood that form carries meaning. A reflection on how that understanding shapes contemporary furniture.',
    image: {
      src: '/images/heritage-sculpture-chair.jpg',
      alt: 'Carved wooden sculpture beside a solid timber lounge chair',
    },
    body: [
      {
        type: 'p',
        text: 'Across the continent, carvers have long treated wood not as raw material but as a medium with intention. Proportion, rhythm and surface were never merely decorative; they carried identity, memory and belonging.',
      },
      {
        type: 'p',
        text: 'Contemporary furniture can learn from this. When a line is carved with purpose, it does more than resolve a structure. It gives an object a voice, and a reason to be kept.',
      },
      { type: 'h2', text: 'Restraint as respect' },
      {
        type: 'p',
        text: 'Honouring heritage does not mean reproducing motifs. It means understanding the principles behind them: balance, confident volume, the beauty of a hand-worked surface. These are the qualities we look for in every piece.',
      },
      { type: 'quote', text: 'Heritage is not a pattern applied to a surface. It is a way of seeing form.' },
      {
        type: 'p',
        text: 'The result, we hope, is furniture that feels at home in an international interior while remaining unmistakably rooted.',
      },
    ],
  },
  {
    slug: 'the-character-of-solid-wood',
    title: 'The Character of Solid Wood',
    category: 'material',
    excerpt:
      'Why solid timber ages with grace, and what to look for in the grain, weight and finish of a lasting piece.',
    image: {
      src: '/images/detail-armrest.jpg',
      alt: 'Close-up of a polished solid wood armrest showing figured grain',
    },
    body: [
      {
        type: 'p',
        text: 'Solid wood is a living material. It responds to light, to touch and to the seasons. Over years, its surface deepens and softens, recording the life of a household in a patina no factory finish can imitate.',
      },
      { type: 'h2', text: 'Reading the grain' },
      {
        type: 'p',
        text: 'Grain tells you how a board was cut and how it will behave. Straight grain is calm and stable; figured grain is expressive and demands skill to work. Matching boards so the grain flows across a surface is one of the quiet signatures of fine furniture.',
      },
      {
        type: 'p',
        text: 'Weight matters too. A solid piece feels grounded in a way veneered board cannot, and it can be repaired and refinished across generations.',
      },
      { type: 'quote', text: 'A solid wood piece is never finished. It continues to mature with the people who live with it.' },
    ],
  },
  {
    slug: 'furniture-as-architecture',
    title: 'Furniture as Architecture',
    category: 'architecture',
    excerpt: 'How proportion, structure and light connect a single piece of furniture to the room that surrounds it.',
    image: {
      src: '/images/dining-sculptural-table.jpg',
      alt: 'Sculptural dining table set beneath tall arched windows',
    },
    body: [
      {
        type: 'p',
        text: 'The best interiors read as a single composition. Walls, openings and light set the stage; furniture completes the architecture at the scale of the human body.',
      },
      { type: 'h2', text: 'Proportion first' },
      {
        type: 'p',
        text: 'A table that suits its room is one whose length, height and visual weight answer the space around it. This is why bespoke dimensions matter so much in considered interiors.',
      },
      {
        type: 'p',
        text: 'We work closely with architects and interior designers for exactly this reason: a piece conceived alongside the building it inhabits will always feel more inevitable.',
      },
    ],
  },
  {
    slug: 'composing-a-calm-room',
    title: 'Composing a Calm Room',
    category: 'interiors',
    excerpt: 'Notes on restraint, texture and the space between objects in a warm, modern interior.',
    image: {
      src: '/images/hero-living.jpg',
      alt: 'Calm living room with a curved cream sofa, walnut sideboard and abstract artwork',
    },
    body: [
      {
        type: 'p',
        text: 'Calm is rarely the result of emptiness. It comes from a few well-chosen things given room to breathe, and from materials that reward closer attention.',
      },
      { type: 'h2', text: 'Texture over colour' },
      {
        type: 'p',
        text: 'In a restrained palette, texture does the work colour often does elsewhere. Bouclé against figured walnut, limewash against polished stone: contrast becomes tactile rather than loud.',
      },
      {
        type: 'p',
        text: 'Leave negative space around your most significant piece. It allows the eye to rest and gives the object the presence it deserves.',
      },
    ],
  },
  {
    slug: 'the-quiet-discipline-of-joinery',
    title: 'The Quiet Discipline of Joinery',
    category: 'craft',
    excerpt: 'Dovetails, mortises and carefully resolved corners: the details that hold a piece together for a lifetime.',
    image: {
      src: '/images/detail-dovetail.jpg',
      alt: 'Close-up of hand-cut dovetail joinery in figured timber',
    },
    body: [
      {
        type: 'p',
        text: 'Good joinery is mostly invisible. It is the reason a drawer still runs true decades later, and why a chair can be sat on daily without loosening.',
      },
      { type: 'h2', text: 'Honest construction' },
      {
        type: 'p',
        text: 'Where joinery is exposed, it becomes ornament earned through structure. A well-cut dovetail is both a mechanical solution and a record of the hand that made it.',
      },
      { type: 'quote', text: 'The strongest details are the ones that never ask to be noticed.' },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function readingMinutes(article: Article) {
  const words = article.body.reduce((sum, block) => sum + block.text.split(/\s+/).length, 0)
  return Math.max(1, Math.round(words / 220))
}

export function articleCategoryLabel(value: ArticleCategory) {
  return articleCategories.find((c) => c.value === value)?.label ?? value
}
