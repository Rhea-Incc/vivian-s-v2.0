import { HomeHero } from '@/components/home/hero'
import { BespokeFeature, CollectionsShowcase, CraftStrip, HeritageIntro, JournalPreview } from '@/components/home/sections'
import { EnquiryBand } from '@/components/site/enquiry-band'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HeritageIntro />
      <CollectionsShowcase />
      <CraftStrip />
      <BespokeFeature />
      <JournalPreview />
      <EnquiryBand />
    </>
  )
}
