import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemSkeleton
} from '@/components/bento-grid/BentoGrid'
import { Icons } from '@/components/icons/Icons'
import RideGroupItemHeader from './RideGroupItemHeader'
import RideGroupItems from './RideGroupItems'

const RideGroups = () => {
  return (
    <BentoGrid className='mx-auto max-w-4xl'>
      {RideGroupItems().map((item, i) => {
        const ComponentIcon = Icons[item.icon]

        return (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              item.image ? (
                <RideGroupItemHeader url={item.image} />
              ) : (
                <BentoGridItemSkeleton />
              )
            }
            icon={<ComponentIcon className='h-4 w-4 text-secondary-light' />}
            className={i === 1 || i === 2 ? 'md:col-span-2' : ''}
          />
        )
      })}
    </BentoGrid>
  )
}

export default RideGroups
