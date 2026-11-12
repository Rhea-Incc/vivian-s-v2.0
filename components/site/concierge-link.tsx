import { MessageCircle } from 'lucide-react'
import { whatsappHref, contact } from '@/lib/content/site'

export function ConciergeLink() {
  const external = Boolean(contact.whatsapp)
  return (
    <a
      href={whatsappHref()}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-track="whatsapp_click"
      className="eyebrow fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-3 bg-walnut px-5 text-[0.625rem] text-limestone shadow-[0_10px_30px_-12px_rgba(57,39,31,0.6)] transition-colors duration-300 hover:bg-earth md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-4" strokeWidth={1.25} aria-hidden />
      <span className="hidden sm:inline">Speak with the studio</span>
      <span className="sr-only sm:hidden">Speak with the studio on WhatsApp</span>
    </a>
  )
}
