import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../docs",

  rewrites: {
    'ru/:rest*': ':rest*',
  },
  
  title: "IX-Ray Engine 1.6 (STCoP)", //Название в шапке
  description: "Описание 234",
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      dir: 'ltr',
      themeConfig:
      {
        outline: { label: 'Содержание страницы' },

        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },

        notFound: {
          title: 'СТРАНИЦА НЕ НАЙДЕНА',
          quote:
              'Но если ты не изменишь направление и продолжишь искать, ты можешь оказаться там, куда направляешься.',
          linkLabel: 'перейти на главную',
          linkText: 'Отведи меня домой'
        },

        editLink: {
          pattern: 'https://github.com/ixray-team/ixray-1.6-stcop/edit/main/docs/:path',
          text: 'Редактировать страницу'
        },

        lastUpdated: {
          text: 'Обновлено'
        },

        footer: {
          message: 'Опубликовано под лицензией MIT.',
          copyright: '© 2025 ixray-team / IX-Ray Engine 1.6 (STCoP)'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        skipToContentLabel: 'Перейти к содержимому',

        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Документация', link: '/main/getting-started' },
        ],

        sidebar: [
          {
            text: 'Основное',
            collapsed: false,
            items: [
              { text: 'Установка', link: '/main/getting-started' },
              { text: 'Интеграции', link: 'getting-started' },
              { text: 'Ключи запуска', link: 'getting-started' },
              { text: 'Консольные команды', link: 'getting-started' },
              { text: 'Система игнорирования файлов', link: 'getting-started' },
              { text: 'Конфигурация расширений движка', link: 'getting-started' },
              { text: 'Как скачать IX‐Ray (стабильную и rolling версии)', link: 'getting-started' },
            ]
          },
          {
            text: 'Конфиги',
            collapsed: false,
            items: [
              { text: 'DLTX', link: 'getting-started' },
              { text: 'XMLOverride', link: 'getting-started' },
              { text: 'Локализация игры', link: 'getting-started' },
              { text: 'Кодировка файлов', link: 'getting-started' },
              { text: 'Групповое подключение файлов через маски', link: 'getting-started' },
              { text: 'Предустановленные пользовательские параметры', link: 'getting-started' },
            ]
          },
          {
            text: 'Геймплей',
            collapsed: false,
            items: [
              {
                text: 'Общее',
                items: [
                  { text: 'Диалоги', link: 'getting-started' },
                  { text: 'Мутанты', link: 'getting-started' },
                  { text: 'Транспорт', link: 'getting-started' },
                  { text: 'Персонажи', link: 'getting-started' },
                  { text: 'Вид от 3 лица', link: 'getting-started' },
                  { text: 'Ноги от 1 лица', link: 'getting-started' },
                  { text: 'Симуляция жизни', link: 'getting-started' },
                  { text: 'Используемые предметы', link: 'getting-started' },
                  { text: 'Зоны (Костры, аномалии...)', link: 'getting-started' },
                ]
              },
              {
                text: 'Снаряжение',
                items: [
                  { text: 'Общие сведения', link: 'getting-started' },
                  { text: 'Апгрейды предметов', link: 'getting-started' },
                ]
              }
            ]
          },
          {
            text: 'Оружейная система',
            collapsed: false,
            items: [
              { text: 'Оружейные классы', link: 'getting-started' },
            ]
          },
          {
            text: 'Анимационная система',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
              { text: 'Система анимаций от 1 лица (Hud Animator)', link: 'getting-started' },
              { text: 'Коллбеки к кадрам анимаций (Anim Notify)', link: 'getting-started' },
            ]
          },
          {
            text: 'Динамические модели',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
              { text: 'Регулировка отсечения моделей', link: 'getting-started' },
            ]
          },
          {
            text: 'Интерфейс',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
              { text: 'Параметры предметов', link: 'getting-started' },
              { text: 'Инвентарные слоты', link: 'getting-started' },
              { text: 'Индивидуальные атласы иконок', link: 'getting-started' },
              { text: 'Шрифты', link: 'getting-started' },
              { text: 'XML Expression', link: 'getting-started' },
            ]
          },
          {
            text: 'Скриптинг',
            collapsed: false,
            items: [
              { text: 'Базовое пространство имён', link: 'getting-started' },
              { text: 'Экспортированные enum\'ы', link: 'getting-started' },
              { text: 'Lua: Callbacks', link: 'getting-started' },
              { text: 'Новые функции', link: 'getting-started' },
              { text: 'Система скриптовых коллбэков', link: 'getting-started' },
              { text: 'Сохранения скриптовых данных (luamarshal)', link: 'getting-started' },
              { text: 'Погодный менеджер', link: 'getting-started' },
            ]
          },
          {
            text: 'Графика',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
              { text: 'Физические корректный рендеринг (PBR)', link: 'getting-started' },
              { text: 'Динамические валлмарки (Dynamic Wallmark)', link: 'getting-started' },
              { text: 'Шейдерные константы', link: 'getting-started' },
              { text: 'Погода', link: 'getting-started' },
              {
                items: [
                  { text: 'Заснеживание', link: 'getting-started' },
                  { text: 'Намокание', link: 'getting-started' },
                ]
              },
              { text: 'Шейдерные опции', link: 'getting-started' },
              { text: 'XML Blends', link: 'getting-started' },
            ]
          },
          {
            text: 'Звуки',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
              { text: 'Звуковые слои (Sound Layers)', link: 'getting-started' },
              { text: 'Звуковые зоны (Sound Env)', link: 'getting-started' },
              { text: 'Эффекты снаряжения', link: 'getting-started' },
            ]
          },
          {
            text: 'Редакторы',
            collapsed: false,
            items: [
              { text: 'IXR SDK', link: 'getting-started' },
              {
                items: [
                  { text: 'Plugins', link: 'getting-started' },
                  { text: 'Dialog Editor', link: 'getting-started' },
                ]
              },
            ]
          },
          {
            text: 'Утилиты',
            collapsed: false,
            items: [
              { text: 'Компиляторы', link: 'getting-started' },
              { text: 'Компрессор', link: 'getting-started' },
            ]
          },
          {
            text: 'Система аддонов',
            collapsed: false,
            items: [
              { text: 'Общие сведения', link: 'getting-started' },
            ]
          },
          {
            text: 'Платформы',
            collapsed: false,
            items: [
              {
                text: 'Clear Sky',
                items: [
                  { text: 'Технические особенности', link: 'getting-started' },
                ]
              },
              {
                text: 'Мультиплеер',
                items: [
                  { text: 'Общие сведения', link: 'getting-started' },
                  { text: 'Dedicated Server', link: 'getting-started' },
                ]
              }
            ]
          },
          {
            text: 'Руководства и вклад',
            collapsed: false,
            items: [
              { text: 'Правила оформления документации в GitHub Wiki', link: 'getting-started' },
            ]
          },
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      dir: 'ltr',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documentation', link: '/en/getting-started' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Installation', link: '/en/getting-started' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: 'github', link: 'https://github.com/ixray-team/ixray-1.6-stcop' },
      { icon: 'discord', link: 'https://discord.gg/hWTbHxaYWz' },
      { icon: 'telegram', link: 'https://t.me/ixray_platform' },
      //{ icon: 'vk', link: 'https://t.me/ixray_platform' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ]
  }
})
