import type { ReactNode } from 'react'
import { Container, PlaceholderNote } from './primitives'
import { Breadcrumbs } from './breadcrumbs'

export function LegalPage({ title, href, children }: { title: string; href: string; children: ReactNode }) {
  return (
    <section className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container className="max-w-3xl">
        <Breadcrumbs className="mb-10" items={[{ label: title, href }]} />
        <h1 className="display text-5xl md:text-7xl">{title}</h1>
        <PlaceholderNote className="mt-10">
          This is a structural draft for layout only and is not legal advice. Final wording must be reviewed by counsel
          before launch.
        </PlaceholderNote>
        <div className="prose-editorial mt-12">{children}</div>
      </Container>
    </section>
  )
}
