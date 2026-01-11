import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { FeaturesSection } from "@/components/features-section"
import { AIConcierge } from "@/components/ai-concierge"
import { HotelsSection } from "@/components/hotels-section"
import { SponsoredOffers } from "@/components/sponsored-offers"
import { SocialShare } from "@/components/social-share"
import { ContinuousImprovement } from "@/components/continuous-improvement"
import { Web3Section } from "@/components/web3-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { ComplianceSection } from "@/components/compliance-section"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <AIConcierge />
      <HotelsSection />
      <SponsoredOffers />
      <PartnershipsSection />
      <SocialShare />
      <Web3Section />
      <ContinuousImprovement />
      <ComplianceSection />
      <BottomNav />
    </div>
  )
}
