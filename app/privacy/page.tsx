import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Privacy Policy', robots: { index: false } }

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" href="/privacy">
      <h2>Information we collect</h2>
      <p>When you send an enquiry or subscribe to our letters, we collect the details you choose to share, such as your name, email, telephone and project information.</p>
      <h2>How we use it</h2>
      <p>We use your information only to respond to your enquiry, manage commissions and, where you have asked, send occasional news. We do not sell your information.</p>
      <h2>Your choices</h2>
      <p>You may ask us to access, correct or delete your information, or unsubscribe at any time.</p>
      <h2>Contact</h2>
      <p>Privacy contact details will be confirmed before launch.</p>
    </LegalPage>
  )
}
