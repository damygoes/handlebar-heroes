import { Icons } from '@/components/icons/Icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import FooterNavigationLinks from './FooterNavigationLinks'
import FooterSocialLinks from './FooterSocialLinks'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='bg-background text-sm'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <div className='flex justify-center lg:justify-start'>LOGO</div>
            <p className='mx-auto mt-6 max-w-lg text-center text-base leading-relaxed text-copy lg:text-left'>
              {t(
                'footer.company-description',
                'Embark on thrilling adventures and forge lasting connections as you pedal alongside fellow enthusiasts in our dynamic cycling community.'
              )}
            </p>
            <div className='mt-6 flex justify-center gap-4 lg:justify-start'>
              {FooterSocialLinks().map(item => {
                const SocialIcon = Icons[item.icon]
                return (
                  <Link
                    to={item.link ?? ''}
                    className='text-gray-700 hover:text-gray-700/75 transition'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='sr-only'> {item.name} </span>
                    {SocialIcon && <SocialIcon className='h-6 w-6' />}
                  </Link>
                )
              })}
            </div>
          </div>

          <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12'>
            {FooterNavigationLinks().map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.href ?? ''}
                  className='text-copy transition hover:text-copy-lighter'
                >
                  {item.title}
                </Link>
              )
            })}
          </ul>
        </div>

        <p className='mt-12 text-center text-sm text-copy-light lg:text-right'>
          {t(
            'footer.copyright',
            'Handlebar Heroes © 2024. All rights reserved.'
          )}
        </p>
      </div>
    </footer>
  )
}

export default Footer
