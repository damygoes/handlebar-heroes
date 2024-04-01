import useMediaQuery from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import LocaleSwitch from '../locale-switch/LocaleSwitch'
import DesktopNavigationMenu from '../navigation/desktop/DesktopNavigationMenu'
import MobileNavigationMenu from '../navigation/mobile/MobileNavigationMenu'
import ThemeToggle from '../theme-toggle/ThemeToggle'

type AppHeaderProps = {
  scrolled: boolean
}

const AppHeader = ({ scrolled }: AppHeaderProps) => {
  const screenSize = useMediaQuery()

  return (
    <header
      className={cn(
        'z-10 mb-5 flex h-fit w-full items-center justify-between px-8 py-2 transition-all ease-in-out',
        {
          'sticky top-0 bg-border bg-blend-overlay': scrolled
        }
      )}
    >
      <div>Logo</div>
      <div
        className={cn('flex', {
          hidden:
            screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md'
        })}
      >
        <DesktopNavigationMenu />
      </div>
      <div className='flex items-center justify-evenly gap-3'>
        <div>Search</div>
        <div>Cart</div>
        <ThemeToggle />
        <LocaleSwitch />
        <div>Login</div>
      </div>
      <div
        className={cn('flex items-center justify-center', {
          hidden: screenSize === 'lg' || screenSize === 'xl'
        })}
      >
        <MobileNavigationMenu />
      </div>
    </header>
  )
}

export default AppHeader
