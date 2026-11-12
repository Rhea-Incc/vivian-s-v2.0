'use server'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Record<string, string>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_FILES = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'])

function text(formData: FormData, key: string, max = 2000) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

/**
 * Validates enquiries server-side. Delivery (email/CRM) is a Phase 1 integration
 * point: connect a provider here once the studio's inbox or CRM is confirmed.
 */
export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  if (text(formData, 'company_website')) return { status: 'success', message: 'Thank you.' }

  const kind = text(formData, 'kind', 20)
  const name = text(formData, 'name', 120)
  const email = text(formData, 'email', 200)
  const telephone = text(formData, 'telephone', 40)
  const message = text(formData, 'message', 4000)

  const fieldErrors: Record<string, string> = {}
  if (name.length < 2) fieldErrors.name = 'Please share your name.'
  if (!EMAIL.test(email)) fieldErrors.email = 'Please enter a valid email address.'
  if (telephone && !/^[+\d\s()-]{6,}$/.test(telephone)) fieldErrors.telephone = 'Please check this number.'
  if (kind === 'bespoke' && !text(formData, 'requirements')) {
    fieldErrors.requirements = 'Tell us a little about the piece you have in mind.'
  }
  if (kind !== 'bespoke' && message.length < 10) fieldErrors.message = 'Please add a few words about your enquiry.'

  const files = formData.getAll('references').filter((f): f is File => f instanceof File && f.size > 0)
  if (files.length > MAX_FILES) fieldErrors.references = `Please attach up to ${MAX_FILES} files.`
  else if (files.some((f) => f.size > MAX_FILE_BYTES)) fieldErrors.references = 'Each file must be under 10 MB.'
  else if (files.some((f) => !ALLOWED_TYPES.has(f.type))) fieldErrors.references = 'Please attach images or PDFs only.'

  if (Object.keys(fieldErrors).length) {
    return { status: 'error', message: 'A few details need your attention.', fieldErrors }
  }

  return {
    status: 'success',
    message: `Thank you, ${name.split(' ')[0]}. Your enquiry is complete and ready for our studio.`,
  }
}

export async function subscribe(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = text(formData, 'email', 200)
  if (!EMAIL.test(email)) {
    return { status: 'error', fieldErrors: { email: 'Please enter a valid email address.' } }
  }
  return { status: 'success', message: 'Thank you. You will hear from us when there is something worth sharing.' }
}
