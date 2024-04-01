type RideGroupItemHeaderProps = {
  url: string
}

const RideGroupItemHeader = ({ url }: RideGroupItemHeaderProps) => {
  return (
    <div className='flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-light/5 to-copy-light/20'>
      <img
        src={url}
        alt='Image'
        className='aspect-square h-full w-full rounded-xl object-cover'
      />
    </div>
  )
}

export default RideGroupItemHeader
