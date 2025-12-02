import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en/' },
  { text: 'Download', link: '/en/download' },
  { text: 'Documentation', link: '/en/main/getting-started' },
]

const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Основное',
    collapsed: false,
    items: [
      { text: 'Installation', link: '/en/main/getting-started' },
    ]
  },
]

export const enLocale = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  dir: 'ltr',
  themeConfig: {
    nav,
    sidebar,
  },
}
