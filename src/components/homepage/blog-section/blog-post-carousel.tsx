import { Button } from '@/components/ui/button'
import { ScreenSizeMap } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

const CARD_WIDTH = 300
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER =
    width > ScreenSizeMap.lg ? 3 : width > ScreenSizeMap.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset(pv => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset(pv => (pv -= CARD_SIZE))
  }

  return (
    <section className='rounded-lg bg-foreground py-8' ref={ref}>
      <div className='relative overflow-hidden p-4'>
        <div className='mx-auto max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
          <div className='mb-8 flex items-center justify-between'>
            <h2 className='text-4xl text-copy'>The Team Blog</h2>

            <div className='flex items-center gap-2'>
              <Button
                size='icon'
                variant='outline'
                className={cn('transition-opacity', {
                  'opacity-90': CAN_SHIFT_LEFT
                })}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <ArrowLeft />
              </Button>
              <Button
                size='icon'
                variant='outline'
                className={cn('transition-opacity', {
                  'opacity-90': CAN_SHIFT_RIGHT
                })}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset
            }}
            transition={{
              ease: 'easeInOut'
            }}
            className='flex'
          >
            {posts.map(post => {
              return <Post key={post.id} {...post} />
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className='relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1'
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN
      }}
    >
      <img
        src={imgUrl}
        className='mb-3 h-52 w-full rounded-lg object-cover'
        alt={`An image for a fake blog post titled ${title}`}
      />
      <span className='rounded-md border-[1px] border-border px-1.5 py-1 text-xs uppercase text-copy'>
        {author}
      </span>
      <p className='mt-1.5 text-lg font-medium'>{title}</p>
      <p className='text-sm text-copy-light'>{description}</p>
    </div>
  )
}

export default BlogPostCarousel

type PostType = {
  id: number
  imgUrl: string
  author: string
  title: string
  description: string
}

const posts: PostType[] = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'John Anderson',
    title: 'We built an AI chess bot with ChatGPT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Kyle Parsons',
    title: 'How to grow your personal brand as a web designer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Andrea Bates',
    title: 'Calm down, monoliths are totally fine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Jess Drum',
    title: 'A quick guide to Framer Motion (for dummies)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Phil White',
    title: "You probably don't need kubernetes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 6,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Karen Peabody',
    title: 'State of JavaScript in 2024',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  },
  {
    id: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBpbWFnZXxlbnwwfHwwfHx8Mg%3D%3D',
    author: 'Dante Gordon',
    title: "What's new in Python?",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.'
  }
]
