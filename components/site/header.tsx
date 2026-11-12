'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Heart, Menu, ShoppingBag, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/lib/content/site'
import { Logo } from './logo'

const immersivePaths = new Set(['/'])

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const transparent = immersivePaths.has(pathname) && !scrolled && !open
  const light = transparent

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-[var(--ease-luxe)]',
        transparent
          ? 'border-b border-transparent bg-transparent py-5 md:py-7'
          : 'border-b border-foreground/10 bg-limestone/95 py-3 backdrop-blur-sm md:py-4',
      )}
    >
      <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-6 px-5 md:px-10">
        <Logo tone={light ? 'light' : 'dark'} priority />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {mainNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'eyebrow relative py-2 transition-colors duration-300',
                      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-400 hover:after:scale-x-100',
                      active && 'after:scale-x-100',
                      light ? 'text-limestone/90 hover:text-limestone' : 'text-walnut/80 hover:text-walnut',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={cn('flex items-center gap-1', light ? 'text-limestone' : 'text-walnut')}>
          <FutureIcon label="Wishlist" icon={Heart} />
          <FutureIcon label="Account" icon={User} className="hidden sm:inline-flex" />
          <FutureIcon label="Shopping bag" icon={ShoppingBag} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="ml-2 inline-flex size-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-5" strokeWidth={1.25} /> : <Menu className="size-5" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-limestone px-6 pt-10 pb-16 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            <li>
              <Link href="/" className="block border-b border-foreground/10 py-4 font-serif text-4xl font-light">
                Home
              </Link>
            </li>
            {mainNav.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${80 + i * 50}ms` }}>
                <Link
                  href={item.href}
                  aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                  className="block border-b border-foreground/10 py-4 font-serif text-4xl font-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-12 font-serif text-xl italic text-muted-foreground">
          Rooted in African Heritage. Crafted for Generations.
        </p>
        <Link
          href="/bespoke#enquire"
          className="eyebrow mt-8 inline-flex h-12 items-center bg-walnut px-7 text-limestone"
        >
          Begin a Commission
        </Link>
      </div>
    </header>
  )
}

function FutureIcon({
  label,
  icon: Icon,
  className,
}: {
  label: string
  icon: typeof Heart
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={`${label} (coming soon)`}
      title={`${label} — coming soon`}
      className={cn('inline-flex size-10 cursor-default items-center justify-center opacity-70', className)}
    >
      <Icon className="size-[18px]" strokeWidth={1.25} aria-hidden />
    </span>
  )
}
