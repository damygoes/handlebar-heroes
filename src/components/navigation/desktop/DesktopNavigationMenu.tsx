import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuItemLink
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import DesktopNavigationMenuItems from './DesktopNavigationMenuItems'

const DesktopNavigationMenu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn('fixed inset-x-0 top-1 z-10 mx-auto max-w-md', className)}
    >
      <Menu setActive={setActive}>
        {DesktopNavigationMenuItems().map(menu => {
          if (
            menu.children &&
            menu.href === null &&
            menu.children.length !== 0
          ) {
            return (
              <MenuItem
                setActive={setActive}
                active={active}
                item={menu.title}
                key={menu.title}
              >
                <div className='grid grid-cols-2 gap-10 p-4 text-sm'>
                  {menu.children.map(child => {
                    return (
                      <MenuItemLink
                        key={child.title}
                        title={child.title}
                        href={child.href}
                        src={child.src || ''}
                        description={child.description || ''}
                      />
                    )
                  })}
                </div>
              </MenuItem>
            )
          }
          return (
            <HoveredLink key={menu.title} item={menu.title} href={menu.href}>
              {menu.title}
            </HoveredLink>
          )
        })}
      </Menu>
    </div>
  )
}

export default DesktopNavigationMenu
