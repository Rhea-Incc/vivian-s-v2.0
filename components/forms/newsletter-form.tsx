'use client'

import { useActionState } from 'react'
import { ArrowRight } from 'lucide-react'
import { subscribe, type FormState } from '@/app/actions'

const initial: FormState = { status: 'idle' }

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, initial)

  if (state.status === 'success') {
    return (
      <p role="status" className="mt-6 font-serif text-lg italic text-sand">
        {state.message}
      </p>
    )
  }

  const error = state.fieldErrors?.email
  return (
    <form action={action} className="mt-6" noValidate data-track="newsletter_subscribe">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-end border-b border-limestone/30 focus-within:border-limestone">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="h-12 flex-1 bg-transparent text-sm text-limestone placeholder:text-limestone/45 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex size-12 items-center justify-center text-limestone transition-opacity disabled:opacity-50"
        >
          <span className="sr-only">Subscribe</span>
          <ArrowRight className="size-4" strokeWidth={1.25} aria-hidden />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-xs text-sand">
          {error}
        </p>
      )}
      <p className="mt-3 text-[0.7rem] text-limestone/45">You can unsubscribe at any time. See our privacy policy.</p>
    </form>
  )
}
