import { DesktopNavMenuItem } from '@/types/nav-menu-item'
import { useTranslation } from 'react-i18next'

const DesktopNavigationMenuItems = () => {
  const { t } = useTranslation()
  const desktopNavigationMenuItems: DesktopNavMenuItem[] = [
    { title: `${t('navigation.home', 'Home')}`, href: '/' },
    { title: `${t('navigation.blog', 'Blog')}`, href: '/blog' },
    { title: `${t('navigation.shop', 'Shop')}`, href: '/shop' },
    {
      title: `${t('navigation.tools', 'Tools')}`,
      href: null,
      children: [
        {
          title: `${t('navigation.tools-bmi.title', 'BMI Calculator')}`,
          href: '/tools/bmi-calculator',
          description: `${t('navigation.tools-bmi.description', 'Calculate your BMI')}`
        },
        {
          title: `${t('navigation.tools-calorie.title', 'Calorie Calculator')}`,
          href: '/tools/calorie-calculator',
          description: `${t('navigation.tools-calorie.description', 'Calculate your daily calorie intake')}`
        },
        {
          title: `${t('navigation.tools-climb-explore.title', 'Climb Explorer')}`,
          href: '/tools/climb-explorer',
          description: `${t('navigation.tools-climb-explore.description', 'Explore climbs')}`
        },
        {
          title: `${t('navigation.tools-segment-calculator.title', 'Segment Time Calculator')}`,
          href: '/tools/segment-time-calculator',
          description: `${t('navigation.tools-segment-calculator.description', 'Calculate segment times')}`
        }
      ]
    }
  ]

  return desktopNavigationMenuItems
}

export default DesktopNavigationMenuItems
