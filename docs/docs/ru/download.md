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

//не всё прокинул, но пока и этого норм!

const page_data = {
	title: 'Скачивание платформы <span>IX-Ray</span>',
	description: 'Ласт Кристмас, ай гив ю май харт<br>Бет ласт ёр ю гив ит эвэй',
}

const main_Item = {
	title: 'Release Engine', 
	description: "Описание хуё-моё!!", 
	tag: "Рекомендуется", 
	button:"Скачать ЭНЖИН РЕЛИЗ",
	dots: [
		'Поддержка DX12',
		'Поддержка DX7',
		'Поддержка DXnullptr',
	]
}

const items = [
  { title: 'Developer Build', description: "Это описание!", tag: "Разработчикам", button:"Скачать"},
  { title: 'SDK', description: "Это описание!", tag: "Разработчикам", button:"Скачать"},
  { title: 'Ютилс', description: "Это описание!", tag: "Разработчикам", button:"Скачать"},
]

</script>


<DownloadComponent :main_Item="main_Item" :page_data="page_data"  :items="items"/>

