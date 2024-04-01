import { cn } from '@/lib/utils'

const Card = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-xl border-none bg-background p-4 group-hover:border-border',
        className
      )}
    >
      <div className='relative'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
const CardTitle = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-copy', className)}>
      {children}
    </h4>
  )
}
const CardDescription = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-copy-light',
        className
      )}
    >
      {children}
    </p>
  )
}

export { Card, CardDescription, CardTitle }
