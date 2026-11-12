'use client'

import { useActionState, useState } from 'react'
import { submitEnquiry, type FormState } from '@/app/actions'
import { SelectField, TextArea, TextField } from './fields'

const initial: FormState = { status: 'idle' }

export function EnquiryForm({
  kind,
  subject,
}: {
  kind: 'bespoke' | 'contact' | 'product'
  subject?: string
}) {
  const [state, action, pending] = useActionState(submitEnquiry, initial)
  const [fileNames, setFileNames] = useState<string[]>([])
  const e = state.fieldErrors ?? {}

  if (state.status === 'success') {
    return (
      <div role="status" className="border-t border-walnut/20 pt-10">
        <p className="display text-4xl md:text-5xl">{state.message}</p>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          A member of our studio will respond personally once enquiries are connected at launch.
        </p>
        <p className="mt-4 text-xs text-muted-foreground/80">
          Preview build: enquiry delivery to the studio inbox is not yet connected.
        </p>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="grid gap-x-10 gap-y-9 md:grid-cols-2" data-track={`${kind}_enquiry_submit`}>
      <input type="hidden" name="kind" value={kind} />
      {subject && <input type="hidden" name="subject" value={subject} />}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor={`${kind}-website`}>Leave this field empty</label>
        <input id={`${kind}-website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="text-sm text-destructive md:col-span-2">
          {state.message}
        </p>
      )}

      <TextField id={`${kind}-name`} name="name" label="Full name" autoComplete="name" error={e.name} />
      <TextField id={`${kind}-email`} name="email" type="email" label="Email" autoComplete="email" error={e.email} />
      <TextField
        id={`${kind}-telephone`}
        name="telephone"
        type="tel"
        label="Telephone"
        autoComplete="tel"
        optional
        error={e.telephone}
      />

      {kind === 'bespoke' ? (
        <>
          <SelectField
            id="bespoke-type"
            name="projectType"
            label="Project type"
            optional
            options={['Private residence', 'Interior design project', 'Architectural project', 'Hospitality', 'Commercial', 'Other']}
          />
          <TextArea
            id="bespoke-requirements"
            name="requirements"
            label="Furniture requirements"
            wrapperClassName="md:col-span-2"
            placeholder="The pieces you have in mind and the rooms they are for"
            error={e.requirements}
          />
          <TextField
            id="bespoke-dimensions"
            name="dimensions"
            label="Preferred dimensions"
            optional
            placeholder="e.g. a table to seat ten"
          />
          <TextField
            id="bespoke-materials"
            name="materials"
            label="Material or finish preferences"
            optional
          />
          <TextArea
            id="bespoke-message"
            name="message"
            label="Additional project details"
            optional
            rows={3}
            wrapperClassName="md:col-span-2"
            placeholder="Timelines, location, how you heard of us"
          />
          <div className="md:col-span-2">
            <span className="eyebrow block text-[0.625rem] text-muted-foreground" id="references-label">
              Reference images <span className="normal-case tracking-normal text-muted-foreground/70">· Optional</span>
            </span>
            <label
              htmlFor="bespoke-references"
              className="mt-3 flex cursor-pointer flex-col items-start gap-2 border border-dashed border-input px-6 py-8 transition-colors hover:border-walnut focus-within:border-walnut"
            >
              <span className="font-serif text-xl">
                {fileNames.length ? `${fileNames.length} file${fileNames.length > 1 ? 's' : ''} selected` : 'Add sketches, plans or inspiration'}
              </span>
              <span className="text-xs text-muted-foreground">
                {fileNames.length ? fileNames.join(', ') : 'Up to 5 images or PDFs, 10 MB each'}
              </span>
              <input
                id="bespoke-references"
                name="references"
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp,image/heic,application/pdf"
                aria-describedby={e.references ? 'references-error' : undefined}
                className="sr-only"
                onChange={(ev) => setFileNames(Array.from(ev.target.files ?? []).map((f) => f.name))}
              />
            </label>
            {e.references && (
              <p id="references-error" className="mt-2 text-xs text-destructive">
                {e.references}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <SelectField
            id={`${kind}-topic`}
            name="topic"
            label="Nature of enquiry"
            optional
            options={['A collection piece', 'A bespoke commission', 'Trade & design professionals', 'Hospitality', 'Visiting the showroom', 'Press', 'Other']}
          />
          <TextArea
            id={`${kind}-message`}
            name="message"
            label="Message"
            wrapperClassName="md:col-span-2"
            defaultValue={subject ? `I would like to learn more about the ${subject}.` : undefined}
            error={e.message}
          />
        </>
      )}

      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
          We use your details only to respond to this enquiry. See our privacy policy.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="eyebrow inline-flex h-12 items-center justify-center bg-walnut px-10 text-limestone transition-colors duration-300 hover:bg-earth disabled:opacity-60"
        >
          {pending ? 'Sending' : kind === 'bespoke' ? 'Submit Commission Enquiry' : 'Send Enquiry'}
        </button>
      </div>
    </form>
  )
}
