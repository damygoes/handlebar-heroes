import { buttonVariants } from '@/components/ui/button'
import {
  MobileNavLink,
  linkWrapperVariants,
  navVariants
} from '@/components/ui/mobile-navigation-menu'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import MobileNavigationMenuItems from './MobileNavigationMenuItems'

const MobileNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ rotate: '180deg' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'hover:bg-transparent rounded-full p-4 text-3xl transition-colors hover:text-primary'
        )}
      >
        <Menu />
      </motion.button>

      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

const Nav = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <motion.nav
      className='fixed bottom-0 left-0 right-0 top-0 backdrop-blur-2xl'
      animate={isOpen ? 'open' : 'closed'}
      variants={navVariants}
      initial='closed'
    >
      <motion.button
        className='absolute right-8 top-8 rounded-full bg-primary p-4 text-3xl text-primary-foreground transition-colors'
        whileHover={{ rotate: '180deg' }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <X />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className='absolute bottom-20 left-10 flex flex-col gap-4'
      >
        {MobileNavigationMenuItems().map((navItem, index) => {
          return (
            <MobileNavLink
              key={index}
              text={navItem.title}
              href={navItem.href || ''}
              setIsOpen={setIsOpen}
            />
          )
        })}
      </motion.div>
    </motion.nav>
  )
}

export default MobileNavigationMenu
