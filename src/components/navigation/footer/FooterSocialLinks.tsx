import { FooterSocialLinkItem } from '@/types/footer-menu-item'

const FooterSocialLinks = () => {
  const footerSocilaLinkItems: FooterSocialLinkItem[] = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100010462448195',
      icon: 'facebook'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/damy.goes/',
      icon: 'instagram'
    }
  ]

  return footerSocilaLinkItems
}

export default FooterSocialLinks
