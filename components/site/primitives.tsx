import Link from 'next/link'
import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
}: {
  children: ReactNode
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'figure'
  className?: string
}) {
  return (
    <Tag data-reveal className={className} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1520px] px-5 md:px-10', className)} {...props} />
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-4 text-earth', className)}>
      <span aria-hidden className="h-px w-8 bg-bronze" />
      {children}
    </p>
  )
}

type CtaVariant = 'solid' | 'outline' | 'light' | 'outline-light' | 'text' | 'text-light'

const ctaStyles: Record<CtaVariant, string> = {
  solid: 'h-12 px-8 bg-walnut text-limestone hover:bg-earth',
  outline: 'h-12 px-8 border border-walnut/40 text-walnut hover:border-walnut hover:bg-walnut hover:text-limestone',
  light: 'h-12 px-8 bg-limestone text-walnut hover:bg-card',
  'outline-light': 'h-12 px-8 border border-limestone/50 text-limestone hover:border-limestone hover:bg-limestone hover:text-walnut',
  text: 'gap-3 text-walnut pb-1 border-b border-walnut/30 hover:border-walnut',
  'text-light': 'gap-3 text-limestone pb-1 border-b border-limestone/40 hover:border-limestone',
}

export function Cta({
  href,
  children,
  variant = 'solid',
  className,
  arrow,
  ...props
}: Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  variant?: CtaVariant
  arrow?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'eyebrow group inline-flex items-center justify-center transition-[background-color,color,border-color] duration-300 ease-[var(--ease-luxe)]',
        ctaStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="ml-1 size-3.5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.25}
        />
      )}
    </Link>
  )
}

export function PlaceholderNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-start gap-3 border border-dashed border-earth/40 bg-card/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground',
        className,
      )}
    >
      <span className="eyebrow shrink-0 text-[0.6rem] text-earth">Placeholder</span>
      <span>{children}</span>
    </p>
  )
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  className,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow className={cn('mb-6', align === 'center' && 'justify-center')}>{eyebrow}</Eyebrow>}
      <h2 className="display text-4xl md:text-6xl">{title}</h2>
      {children && <div className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">{children}</div>}
    </Reveal>
  )
}
