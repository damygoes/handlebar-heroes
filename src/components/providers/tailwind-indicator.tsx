import { cn } from '@/lib/utils'

function TailwindIndicator() {
  return (
    <div
      className={cn('h-screen w-screen antialiased', {
        'debug-screens': process.env.NODE_ENV === 'development'
      })}
    />
  )
}

export default TailwindIndicator
