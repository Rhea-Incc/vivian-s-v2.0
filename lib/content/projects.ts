import type { Project, ProjectCategory } from './types'

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: 'residential', label: 'Residential' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'architectural', label: 'Architectural Collaborations' },
]

/**
 * No verified projects have been supplied. Each entry is an editorial placeholder
 * (verified: false) that renders with a clear notice until real details replace it.
 */
export const projects: Project[] = [
  {
    slug: 'residential-placeholder',
    title: 'A Private Residence',
    category: 'residential',
    verified: false,
    summary: 'Reserved for a verified residential commission.',
    image: {
      src: '/images/hero-living.jpg',
      alt: 'Editorial placeholder: living room with a curved cream sofa and walnut furniture',
    },
    gallery: [
      { src: '/images/hero-living.jpg', alt: 'Editorial placeholder living room' },
      { src: '/images/bedroom-walnut.png', alt: 'Editorial placeholder bedroom' },
    ],
  },
  {
    slug: 'hospitality-placeholder',
    title: 'A Lodge Interior',
    category: 'hospitality',
    verified: false,
    summary: 'Reserved for a verified hospitality or lodge project.',
    image: {
      src: '/images/hospitality-lodge.jpg',
      alt: 'Editorial placeholder: lodge lounge with a stone fireplace and carved timber chairs',
    },
    gallery: [{ src: '/images/hospitality-lodge.jpg', alt: 'Editorial placeholder lodge lounge' }],
  },
  {
    slug: 'commercial-placeholder',
    title: 'A Gallery Space',
    category: 'commercial',
    verified: false,
    summary: 'Reserved for a verified commercial environment.',
    image: {
      src: '/images/interior-barn-lounge.jpg',
      alt: 'Editorial placeholder: timber hall furnished with lounge chairs and a carved sideboard',
    },
    gallery: [{ src: '/images/interior-barn-lounge.jpg', alt: 'Editorial placeholder hall' }],
  },
  {
    slug: 'architectural-placeholder',
    title: 'An Architectural Collaboration',
    category: 'architectural',
    verified: false,
    summary: 'Reserved for a verified collaboration with an architect or designer.',
    image: {
      src: '/images/dining-sculptural-table.jpg',
      alt: 'Editorial placeholder: sculptural dining table in an arched room',
    },
    gallery: [{ src: '/images/dining-sculptural-table.jpg', alt: 'Editorial placeholder dining room' }],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function categoryLabel(value: ProjectCategory) {
  return projectCategories.find((c) => c.value === value)?.label ?? value
}
