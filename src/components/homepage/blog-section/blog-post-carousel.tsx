import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import useMeasure from 'react-use-measure'

const CARD_WIDTH = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024
}

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

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
    <section className='bg-neutral-100 py-8' ref={ref}>
      <div className='relative overflow-hidden p-4'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex items-center justify-between'>
            <h2 className='mb-4 text-4xl'>The Team Blog</h2>

            <div className='flex items-center gap-2'>
              <button
                className={`rounded-lg border-[1px] border-border bg-background p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <ArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-border bg-background p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <ArrowRight />
              </button>
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
        className='mb-3 h-[200px] w-full rounded-lg object-cover'
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
