import Link from 'next/link'
import { cn } from '@/lib/utils'
import { site } from '@/lib/content/site'
import { JsonLd } from './json-ld'

export type Crumb = { label: string; href: string }

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const all = [{ label: 'Home', href: '/' }, ...items]
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn('animate-rise', className)}>
        <ol className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.625rem] text-muted-foreground">
          {all.map((c, i) => {
            const last = i === all.length - 1
            return (
              <li key={c.href} className="flex items-center gap-3">
                {last ? (
                  <span aria-current="page" className="text-walnut">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="transition-colors hover:text-walnut">
                      {c.label}
                    </Link>
                    <span aria-hidden className="h-px w-4 bg-bronze/60" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href}`,
          })),
        }}
      />
    </>
  )
}
