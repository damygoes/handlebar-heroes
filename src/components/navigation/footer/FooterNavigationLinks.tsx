import { FooterMenuItem } from '@/types/footer-menu-item'
import { useTranslation } from 'react-i18next'

const FooterNavigationLinks = () => {
  const { t } = useTranslation()
  const footerNavigationLinkItems: FooterMenuItem[] = [
    {
      title: `${t('footer.links.about', 'About')}`,
      href: '/about'
    },
    {
      title: `${t('footer.links.contact', 'Contact')}`,
      href: '/contact'
    },
    {
      title: `${t('footer.links.membership', 'Join Us')}`,
      href: '/membership'
    },
    {
      title: `${t('footer.links.terms', 'Terms & Conditions')}`,
      href: '/terms-and-conditions'
    }
  ]

  return footerNavigationLinkItems
}

export default FooterNavigationLinks
