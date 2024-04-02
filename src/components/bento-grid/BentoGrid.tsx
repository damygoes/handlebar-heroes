import { cn } from '@/lib/utils'

const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
        className
      )}
    >
      {children}
    </div>
  )
}

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-border p-4 shadow-input transition duration-200 hover:shadow-sm dark:shadow-none',
        className
      )}
    >
      {header ?? <BentoGridItemSkeleton />}
      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        {icon}
        <div className='mb-2 mt-2 font-sans font-bold text-copy'>{title}</div>
        <div className='font-sans text-xs font-normal text-copy-light'>
          {description}
        </div>
      </div>
    </div>
  )
}

const BentoGridItemSkeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-foreground/20 to-foreground' />
)

export { BentoGrid, BentoGridItem, BentoGridItemSkeleton }
