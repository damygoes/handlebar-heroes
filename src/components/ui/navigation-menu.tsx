import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

const MenuItem = ({
  setActive,
  active,
  item,
  children
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className='relative cursor-pointer text-copy hover:opacity-[0.9]'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.7rem)] -translate-x-1/2 transform'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='-translate-x-20 overflow-hidden rounded-lg border border-border bg-background shadow-lg backdrop-blur-sm'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

const Menu = ({
  setActive,
  children
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='border-transparent relative flex justify-center space-x-4 rounded-full border bg-border px-8 py-6 shadow-input '
    >
      {children}
    </nav>
  )
}

const MenuItemLink = ({
  title,
  description,
  href,
  src
}: {
  title: string
  href: string
  description?: string
  src?: string
}) => {
  return (
    <Link to={href} className='flex space-x-2 rounded-lg p-3 hover:bg-border'>
      {src && src !== ' ' && (
        <img
          src={src}
          alt={title}
          className='aspect-square h-24 w-24 flex-shrink-0 rounded-md object-cover shadow-2xl'
        />
      )}
      <div>
        <h4 className='mb-1 text-base font-medium text-copy'>{title}</h4>
        {description && description !== ' ' && (
          <p className='max-w-[10rem] text-sm text-copy-light'>{description}</p>
        )}
      </div>
    </Link>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HoveredLink = ({ children, href, ...rest }: any) => {
  return (
    <Link to={href} {...rest} className='text-copy hover:text-primary-dark'>
      {children}
    </Link>
  )
}

export { HoveredLink, Menu, MenuItem, MenuItemLink }
