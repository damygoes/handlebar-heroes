import { MobileNavMenuItem } from '@/types/nav-menu-item'
import { useTranslation } from 'react-i18next'

const MobileNavigationMenuItems = () => {
  const { t } = useTranslation()
  const mobileNavigationMenuItems: MobileNavMenuItem[] = [
    { title: `${t('navigation.home', 'Home')}`, href: '/' },
    { title: `${t('navigation.blog', 'Blog')}`, href: '/blog' },
    { title: `${t('navigation.shop', 'Shop')}`, href: '/shop' },
    {
      title: `${t('navigation.tools-bmi.title', 'BMI Calculator')}`,
      href: '/tools/bmi-calculator'
    },
    {
      title: `${t('navigation.tools-calorie.title', 'Calorie Calculator')}`,
      href: '/tools/calorie-calculator'
    },
    {
      title: `${t('navigation.tools-climb-explore.title', 'Climb Explorer')}`,
      href: '/tools/climb-explorer'
    },
    {
      title: `${t('navigation.tools-segment-calculator.title', 'Segment Time Calculator')}`,
      href: '/tools/segment-time-calculator'
    }
  ]

  return mobileNavigationMenuItems
}

export default MobileNavigationMenuItems
