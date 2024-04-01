import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from './button'

type NavLinkProps = {
  text: string
  href: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNavLink = ({ text, href, setIsOpen }: NavLinkProps) => {
  return (
    <motion.span
      className={cn(
        buttonVariants({ variant: 'link' }),
        'transition-color z-10 inline-block w-fit text-4xl font-normal text-copy hover:font-semibold hover:text-primary'
      )}
      variants={navLinkVariants}
      transition={{
        type: 'spring',
        damping: 20
      }}
      whileHover={{
        y: -3,
        rotate: '-7.5deg'
      }}
      rel='nofollow'
      onClick={() => {
        setIsOpen(false)
      }}
    >
      <Link to={href}>{text}</Link>
    </motion.span>
  )
}

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0
  }
}

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 }
}

// eslint-disable-next-line react-refresh/only-export-components
export { MobileNavLink, linkWrapperVariants, navLinkVariants, navVariants }
