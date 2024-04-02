import { Search, ShoppingCart } from 'lucide-react'
import LocaleSwitch from '../locale-switch/LocaleSwitch'
import ThemeToggle from '../theme-toggle/ThemeToggle'
import { Button } from '../ui/button'

const AppHeaderRightSection = () => {
  return (
    <div className='flex items-center justify-evenly gap-3'>
      <Button variant='outline' size='sm'>
        <Search className='h-5 w-5' />
      </Button>
      <Button variant='outline' size='sm'>
        <ShoppingCart className='h-5 w-5' />
      </Button>
      <ThemeToggle />
      <LocaleSwitch />
      <Button>Login</Button>
    </div>
  )
}

export default AppHeaderRightSection
