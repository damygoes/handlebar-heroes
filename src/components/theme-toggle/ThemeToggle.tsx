import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'

type ThemeToggleProps = {
  className?: string
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      variant='outline'
      size='sm'
      className={cn(className)}
    >
      {theme === 'light' ? (
        <Moon className='h-5 w-5' />
      ) : (
        <Sun className='h-5 w-5' />
      )}
    </Button>
  )
}

export default ThemeToggle
