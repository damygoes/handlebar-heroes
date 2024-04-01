import { Icons } from '@/components/icons/Icons'

export type FooterMenuItem = {
  title: string
  href?: string | null
}

export type FooterSocialLinkItem = {
  name: string
  link: string
  icon: keyof typeof Icons
}
