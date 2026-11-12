import { Container, Cta, Reveal } from './primitives'

export function EnquiryBand({
  title = 'Begin a conversation with our studio.',
  body = 'Whether you are furnishing a single room or an entire residence, we would be honoured to hear about your space.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className="display text-4xl md:col-span-7 md:text-6xl">{title}</h2>
          <div className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-muted-foreground">{body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="/bespoke#enquire" data-track="bespoke_cta">
                Begin a Commission
              </Cta>
              <Cta href="/contact" variant="outline">
                Contact Us
              </Cta>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
