import { defineConfig } from 'vitepress'
import { enLocale } from './locales/en.mts'
import { ruLocale } from './locales/ru.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IX-Ray Platform", //Название в шапке
  description: "Описание 234",

  srcDir: "../docs",
  outDir: '../public',
  lastUpdated: true,
  ignoreDeadLinks: true,
  rewrites: {
    'ru/:rest*': ':rest*',
  },

  locales: {
    root: ruLocale,
    en: enLocale,
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ixray-team/ixray-1.6-stcop' },
      { icon: 'discord', link: 'https://discord.gg/hWTbHxaYWz' },
      { icon: 'telegram', link: 'https://t.me/ixray_platform' },
    ]
  }
})
