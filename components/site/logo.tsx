import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { site } from '@/lib/content/site'

export function Logo({
  tone = 'dark',
  className,
  priority,
}: {
  tone?: 'dark' | 'light'
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label={`${site.name}, home`}
    >
      <Image
        src={site.logo.src}
        alt=""
        width={44}
        height={44}
        priority={priority}
        className="size-10 shrink-0 md:size-11"
      />
      <span
        className={cn(
          'font-serif text-[1.35rem] leading-none tracking-[0.01em] transition-colors duration-300',
          tone === 'light' ? 'text-limestone' : 'text-walnut',
        )}
      >
        {"Vivian's"}
        <span className="eyebrow mt-1 block text-[0.55rem] tracking-[0.42em] opacity-80">Furniture</span>
      </span>
    </Link>
  )
}
