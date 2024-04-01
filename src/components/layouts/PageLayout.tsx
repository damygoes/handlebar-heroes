import { ReactNode, useState } from 'react'
import AppHeader from '../app-header/AppHeader'
import Footer from '../navigation/footer/Footer'

type PageLayoutProps = {
  children: ReactNode
  leftContent?: ReactNode
  rightContent?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

function PageLayout({
  children,
  leftContent,
  rightContent,
  showFooter = false,
  showHeader = true
}: PageLayoutProps): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const handleLayoutScroll = () => {
    const AppLayoutContainer = document.getElementById('page-layout')
    if (AppLayoutContainer) {
      if (AppLayoutContainer.scrollTop > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }

  return (
    <div
      id='page-layout'
      className='flex h-screen flex-col overflow-y-auto overflow-x-hidden'
      onScroll={handleLayoutScroll}
    >
      {showHeader && <AppHeader scrolled={scrolled} />}
      <div className='flex flex-1 flex-row'>
        <main className='flex-1'>{children}</main>
        {leftContent && (
          <nav className='order-first w-32 p-4'>{leftContent}</nav>
        )}
        {rightContent && <aside className='w-32 p-4'>{rightContent}</aside>}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export default PageLayout
