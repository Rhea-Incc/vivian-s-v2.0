import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Terms & Conditions', robots: { index: false } }

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" href="/terms">
      <h2>Use of this website</h2>
      <p>Content on this website, including imagery and text, is provided for information and may not be reproduced without permission.</p>
      <h2>Enquiries and commissions</h2>
      <p>Enquiries do not form a contract. Commission terms, pricing, deposits and lead times are agreed in writing with our studio for each project.</p>
      <h2>Natural materials</h2>
      <p>Solid wood is a natural material. Variations in grain, colour and figure are inherent to each piece and are not defects.</p>
    </LegalPage>
  )
}
