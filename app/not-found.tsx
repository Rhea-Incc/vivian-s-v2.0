import { Container, Cta, Eyebrow } from '@/components/site/primitives'

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-28">
      <Container>
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">This room is still being furnished.</h1>
        <div className="mt-10 flex flex-wrap gap-4">
          <Cta href="/">Return Home</Cta>
          <Cta href="/collections" variant="outline">
            Explore Collections
          </Cta>
        </div>
      </Container>
    </section>
  )
}
