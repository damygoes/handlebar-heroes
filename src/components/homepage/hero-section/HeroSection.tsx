import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
      <div className='bg-gray-100 relative flex items-center'>
        <div className='p-8 sm:p-16 lg:p-24'>
          <h2 className='max-w-sm text-balance text-2xl font-bold uppercase text-copy sm:text-3xl'>
            {t('home.hero-section.title', 'Handlebar Heroes Cycling Club')}
          </h2>

          <p className='mt-4 text-balance text-copy-light'>
            {t(
              'home.hero-section.content',
              'Embark on thrilling adventures and forge lasting connections as you pedal alongside fellow enthusiasts in our dynamic cycling community.'
            )}
          </p>
        </div>
      </div>
      <div className='relative lg:py-16'>
        <div className='relative h-64 sm:h-80 lg:h-full'>
          <img
            alt='image'
            src='https://images.unsplash.com/photo-1471439330580-1493ebc92c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxyb2FkJTIwYmlrZXxlbnwwfHwwfHx8Mg%3D%3D'
            className='absolute inset-0 h-full w-full rounded-xl object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
