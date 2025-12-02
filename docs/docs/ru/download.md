---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IX-Ray Platform"
  
<!--features:
  - title: Developer Build (Модмейкерам)
    details: SOON
  - title: Game Build (Игрокам)
    details: SOON
  - title: SDK
    details: SOON
  - title: Utils
    details: SOON-->
---
<script setup>
import DownloadComponent from '../../components/test.vue'

const page_data = {
	title: 'Скачивание платформы <span>IX-Ray 1.2.3</span>',
	description: 'Modernized X-Ray based on X-Ray 1.6.02<br>Последний релиз: Сентябрь 2025',
}

const main_Item = {
	title: 'Game Build',
	description: "Полная сборка для игроков, включающая движок и все ресурсы", 
	tag: "Рекомендуется",
	button: "Скачать Game Build",
	dots: [
		'Windows x64 система',
		'Release конфигурация',
		'Включает движок и ресурсы',
		'Готово к запуску игр'
	],
	link: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-engine-x64-game.zip"
}

const items = [
  { 
    title: 'Developer Build',
    description: "Сборка для разработчиков с отладочной информацией и дополнительным инструментарием, упрощающим отладку и разработку модификаций",
    tag: "Разработчикам",
    button: "Скачать",
    link: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-engine-x64-develop.zip"
  },
  { 
    title: 'Utilities',
    description: "Утилиты для работы с движком: компиляторы уровней, сетевые утилиты и паковщик/распаковщик игровых архивов",
    tag: "Разработчикам",
    button: "Скачать",
    link: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-utilities-x64-release-bin.zip",
    secondaryLink: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-utilities-x64-release-lib.zip",
    secondaryText: "Библиотеки"
  },
  { 
    title: 'Server',
    description: "Серверная часть для многопользовательских игр, включающая игровой билд и выделенный сервер",
    tag: "Сервер",
    button: "Скачать",
    link: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-server-x64-release-bin.zip",
    secondaryLink: "https://github.com/ixray-team/ixray-1.6-stcop/releases/download/r1.2.3/ixray-1.6-r1.2.3-server-x64-release-lib.zip",
    secondaryText: "Библиотеки"
  }
]

// Дополнительная информация о релизе
const releaseInfo = {
  version: "1.2.3",
  date: "Сентябрь 2025",
  base: "X-Ray 1.6.02",
  platform: "Windows x64",
  changelog: "https://github.com/ixray-team/ixray-1.6-stcop/blob/default/.github/CHANGELOG.md#release-123-september-2025",
  commits: "https://github.com/ixray-team/ixray-1.6-stcop/compare/r1.2.2...r1.2.3"
}

</script>

<DownloadComponent 
  :main_Item="main_Item" 
  :page_data="page_data"  
  :items="items"
/>
