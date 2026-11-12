import type { Metadata } from 'next'
import { contact, whatsappHref } from '@/lib/content/site'
import { PageHero } from '@/components/site/page-hero'
import { Container, Eyebrow, PlaceholderNote, Reveal } from '@/components/site/primitives'
import { EnquiryForm } from '@/components/forms/enquiry-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Vivian’s Furniture studio about collection pieces, bespoke commissions and trade enquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const details = [
    { label: 'Showroom', value: contact.showroom },
    { label: 'Workshop', value: contact.workshop },
    { label: 'Telephone', value: contact.telephone },
    { label: 'Email', value: contact.email },
    { label: 'Opening hours', value: contact.hours },
  ]
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would be glad to hear from you."
        intro="For collection pieces, commissions, trade or press, write to our studio and we will respond personally."
        crumbs={[{ label: 'Contact', href: '/contact' }]}
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Visit & reach us</Eyebrow>
            <dl className="mt-8 divide-y divide-foreground/10 border-y border-foreground/10">
              {details.map((d) => (
                <div key={d.label} className="py-5">
                  <dt className="eyebrow text-[0.6rem] text-muted-foreground">{d.label}</dt>
                  <dd className="mt-2 font-serif text-xl">
                    {d.value ?? <span className="text-base italic text-muted-foreground">To be confirmed</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <div id="whatsapp" className="mt-10 scroll-mt-28">
              <h2 className="font-serif text-2xl">WhatsApp concierge</h2>
              {contact.whatsapp ? (
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  className="eyebrow mt-4 inline-flex h-12 items-center bg-walnut px-7 text-limestone hover:bg-earth"
                >
                  Message the Studio
                </a>
              ) : (
                <PlaceholderNote className="mt-4">
                  The studio WhatsApp number will be connected here once confirmed.
                </PlaceholderNote>
              )}
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="contact" />
          </div>
        </Container>
      </section>
    </>
  )
}
