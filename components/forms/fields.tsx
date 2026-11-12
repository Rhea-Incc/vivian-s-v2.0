import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const control =
  'w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-walnut placeholder:text-muted-foreground/60 transition-colors duration-300 focus:border-walnut focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-destructive'

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
  className,
}: {
  id: string
  label: string
  optional?: boolean
  error?: string
  hint?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="eyebrow flex items-baseline justify-between text-[0.625rem] text-muted-foreground">
        {label}
        {optional && <span className="normal-case tracking-normal text-muted-foreground/70">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

type Common = { label: string; optional?: boolean; error?: string; hint?: string; wrapperClassName?: string }

function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined
}

export function TextField({ id, label, optional, error, hint, wrapperClassName, className, ...props }: Common & ComponentProps<'input'> & { id: string }) {
  return (
    <Field id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        required={!optional}
        className={cn(control, 'h-12', className)}
        {...props}
      />
    </Field>
  )
}

export function TextArea({ id, label, optional, error, hint, wrapperClassName, className, ...props }: Common & ComponentProps<'textarea'> & { id: string }) {
  return (
    <Field id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <textarea
        id={id}
        rows={4}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        required={!optional}
        className={cn(control, 'resize-y', className)}
        {...props}
      />
    </Field>
  )
}

export function SelectField({
  id,
  label,
  optional,
  error,
  hint,
  wrapperClassName,
  options,
  className,
  ...props
}: Common & ComponentProps<'select'> & { id: string; options: string[] }) {
  return (
    <Field id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(control, 'h-12 appearance-none bg-[length:10px] bg-[right_4px_center] bg-no-repeat', className)}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%2339271F' stroke-width='1'/%3E%3C/svg%3E\")",
        }}
        defaultValue=""
        {...props}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  )
}
