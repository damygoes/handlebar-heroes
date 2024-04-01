import NewsletterSubscriptionForm from '@/features/newsletter/NewsletterSubscriptionForm'
import { useTranslation } from 'react-i18next'

const NewsletterSubscriptionSection = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-background'>
      <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-2xl font-bold text-copy md:text-3xl'>
            {t(
              'home.newsletter-subscription-section.title',
              'Subscribe to our newsletter'
            )}
          </h2>

          <p className='hidden text-copy-light sm:mt-4 sm:block'>
            {t(
              'home.newsletter-subscription-section.content',
              'Stay up to date with the latest news and updates from our team.'
            )}
          </p>
        </div>

        <div className='mx-auto mt-8 max-w-xl'>
          <NewsletterSubscriptionForm />
        </div>
      </div>
    </section>
  )
}

export default NewsletterSubscriptionSection
