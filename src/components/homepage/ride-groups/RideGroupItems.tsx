import { Icons } from '@/components/icons/Icons'
import { useTranslation } from 'react-i18next'

const RideGroupItems = () => {
  const { t } = useTranslation()
  const rideGroupItemsList: {
    title: string
    description: string
    icon: keyof typeof Icons
    image?: string
  }[] = [
    {
      title: 'Fit',
      description: `${t('home.ride-groups.fit.description')}`,
      image:
        'https://images.unsplash.com/photo-1523740856324-f2ce89135981?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxmaXQlMjBiaWtlfGVufDB8fDB8fHwy',
      icon: 'bike'
    },
    {
      title: 'Sport',
      description: `${t('home.ride-groups.sport.description')}`,

      icon: 'bike'
    },
    {
      title: 'Express',
      description: `${t('home.ride-groups.express.description')}`,

      icon: 'bike'
    },
    {
      title: 'Spirit of Gravel',
      description: `${t('home.ride-groups.gravel.description')}`,

      icon: 'bike'
    },
    {
      title: 'Velo-Riders',
      description: `${t('home.ride-groups.velo-riders.description')}`,

      icon: 'bike'
    },
    {
      title: 'Ladies on Bike',
      description: `${t('home.ride-groups.ladies-on-bike.description')}`,

      icon: 'bike'
    },
    {
      title: 'Kids on Bike',
      description: `${t('home.ride-groups.kids-on-bike.description')}`,

      icon: 'bike'
    }
  ]

  return rideGroupItemsList
}

export default RideGroupItems
