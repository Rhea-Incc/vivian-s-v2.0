import Link from 'next/link'
import { collections } from '@/lib/content/collections'
import { contact, mainNav, site } from '@/lib/content/site'
import { Logo } from './logo'
import { NewsletterForm } from '@/components/forms/newsletter-form'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-walnut text-limestone">
      <div className="mx-auto max-w-[1520px] px-5 pt-20 pb-10 md:px-10 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-10 max-w-md font-serif text-3xl font-light leading-tight text-balance md:text-4xl">
              {site.statement}
            </p>
            <div className="mt-12 max-w-md">
              <h2 className="eyebrow text-sand">The Journal, by letter</h2>
              <p className="mt-3 text-sm leading-relaxed text-limestone/70">
                Occasional notes on new pieces, craft and African design. No more than a few letters a year.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            <FooterList title="Explore" links={mainNav.map((n) => ({ href: n.href, label: n.label }))} />
            <FooterList
              title="Collections"
              links={collections.map((c) => ({ href: `/collections/${c.slug}`, label: c.shortTitle }))}
            />
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow text-sand">Visit & Contact</h2>
              <dl className="mt-6 space-y-5 text-sm text-limestone/75">
                <ContactLine label="Showroom" value={contact.showroom} />
                <ContactLine label="Telephone" value={contact.telephone} />
                <ContactLine label="Email" value={contact.email} />
              </dl>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {contact.socials.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-sand">
                        {s.label}
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="text-limestone/50" title="Profile link to be supplied">
                      {s.label}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-limestone/15 pt-8 text-xs text-limestone/60 md:flex-row md:items-center md:justify-between">
          <p>
            {'© '}
            {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-limestone">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-limestone">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="eyebrow text-sand">{title}</h2>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-limestone/80 transition-colors hover:text-limestone">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactLine({ label, value }: { label: string; value: string | null }) {
  return (
    <div>
      <dt className="eyebrow text-[0.6rem] text-limestone/50">{label}</dt>
      <dd className="mt-1">{value ?? <span className="italic text-limestone/50">To be confirmed</span>}</dd>
    </div>
  )
}
