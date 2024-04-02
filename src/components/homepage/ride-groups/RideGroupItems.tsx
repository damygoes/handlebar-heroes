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
      image:
        'https://images.unsplash.com/photo-1605050825077-289f85b6cf43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYWQlMjBjeWNsaW5nfGVufDB8fDB8fHwy',
      icon: 'bike'
    },
    {
      title: 'Express',
      description: `${t('home.ride-groups.express.description')}`,
      image:
        'https://images.unsplash.com/photo-1510766528597-60f9f1c154b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJvYWQlMjBjeWNsaW5nfGVufDB8fDB8fHwy',
      icon: 'bike'
    },
    {
      title: 'Spirit of Gravel',
      description: `${t('home.ride-groups.gravel.description')}`,
      image:
        'https://images.unsplash.com/photo-1598288032243-aa818ce05b57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyYXZlbCUyMGJpa2V8ZW58MHx8MHx8fDI%3D',
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
      image:
        'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9hZCUyMGN5Y2xpbmd8ZW58MHx8MHx8fDI%3D',
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
