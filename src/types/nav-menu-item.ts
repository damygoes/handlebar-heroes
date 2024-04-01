export type DesktopNavMenuItem = {
  title: string
  href: string | null
  children?: {
    title: string
    href: string
    description?: string
    src?: string
  }[]
}

export type MobileNavMenuItem = {
  title: string
  href: string | null
}
