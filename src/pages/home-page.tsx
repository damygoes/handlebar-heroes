import BlogSection from '@/components/homepage/blog-section/BlogSection'
import HeroSection from '@/components/homepage/hero-section/HeroSection'
import NewsletterSubscriptionSection from '@/components/homepage/newsletter-subscription-section/NewsletterSubscriptionSection'
import RideGroups from '@/components/homepage/ride-groups/RideGroups'
import TeamSection from '@/components/homepage/team-section/TeamSection'
import MaxWidthWrapper from '@/components/layouts/MaxWidthWrapper'
import PageLayout from '@/components/layouts/PageLayout'
import SponsorSection from '@/components/sponsor-section/SponsorSection'

const HomePage = () => {
  return (
    <PageLayout showFooter>
      <MaxWidthWrapper className='flex flex-col gap-24'>
        <HeroSection />
        <RideGroups />
        <SponsorSection />
        <TeamSection />
        <BlogSection />
        <NewsletterSubscriptionSection />
      </MaxWidthWrapper>
    </PageLayout>
  )
}

export default HomePage
