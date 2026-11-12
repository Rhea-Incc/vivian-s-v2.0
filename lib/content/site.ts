export const site = {
  name: "Vivian's Furniture",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://viviansfurniture.com',
  statement: 'Rooted in African Heritage. Crafted for Generations.',
  philosophy: 'Where heritage becomes timeless.',
  description:
    'Distinctive handcrafted solid wood furniture, inspired by African heritage and crafted for generations. Bespoke and collection pieces for residences, architects and hospitality.',
  logo: { src: '/images/logo.png', alt: "Vivian's Furniture monogram" },
}

export const mainNav = [
  { href: '/collections', label: 'Collections' },
  { href: '/bespoke', label: 'Bespoke' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/the-craft', label: 'The Craft' },
  { href: '/projects', label: 'Projects' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
] as const

/**
 * Verified contact details have not been supplied. Every value is null until
 * the studio confirms it; the UI renders an explicit "to be confirmed" state.
 */
export const contact = {
  showroom: null as string | null,
  workshop: null as string | null,
  telephone: null as string | null,
  email: null as string | null,
  whatsapp: null as string | null,
  hours: null as string | null,
  socials: [
    { label: 'Instagram', href: null as string | null },
    { label: 'Pinterest', href: null as string | null },
    { label: 'LinkedIn', href: null as string | null },
  ],
}

export function whatsappHref(message = "Hello Vivian's Furniture, I'd like to enquire about a piece.") {
  if (!contact.whatsapp) return '/contact#whatsapp'
  return `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}
