import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { BrandStorySection } from "@/components/home/brand-story-section"
import { LearningPathsSection } from "@/components/home/learning-paths-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { ResultsSection } from "@/components/home/results-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FaqSection } from "@/components/home/faq-section"
import { SocialProofBanner } from "@/components/home/social-proof-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <SocialProofBanner />
        <BrandStorySection />
        <LearningPathsSection />
        <HowItWorksSection />
        <ResultsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
