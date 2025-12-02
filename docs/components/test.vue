<script setup lang="ts">
import { ref } from 'vue'

interface DownloadItem {
  title: string
  description: string
  tag: string
  button: string
  link?: string
  secondaryLink?: string
  secondaryText?: string
}

interface PageData {
  title: string
  description: string
}

interface MainItem extends DownloadItem {
  dots: string[]
}

const props = defineProps<{
  page_data: PageData
  main_Item: MainItem
  items: DownloadItem[]
}>()
</script>

<template>
<section class="download-hero">
  <div class="download-hero__head">
    <div class="download-hero__badge">
      <span class="dot"></span>
      <span>IX-Ray Platform • Download</span>
    </div>
    <div class="download-hero__branch">
      Stable · v2.2.8
    </div>
  </div>

  <div class="download-hero__title">
    <h1 v-html="page_data.title"></h1>
    <p v-html="page_data.description">
    </p>
  </div>

  <div class="download-hero__grid">
    <div class="download-card download-card--accent">
      <div class="download-card__head">
        <span class="pill pill--primary">{{main_Item.tag}}</span>
        <span class="tag">Production ready</span>
      </div>
      <h2>{{main_Item.title}}</h2>
      <p class="download-card__desc">{{main_Item.description}}</p>
      <ul class="download-card__meta">
		<li v-for="dotka in main_Item.dots">{{dotka}}</li>
      </ul>
      <div class="download-card__footer">
        <a :href="main_Item.link" class="btn-primary" target="_blank" rel="noopener noreferrer">{{main_Item.button}}</a>
        <span class="hash">sha256: пупипупиппупип</span>
      </div>
    </div>

    <div class="download-column">
	
	  <div v-for="item in items" :key="item.title" class="download-card">
		<div class="download-card__head">
          <span class="pill">{{ item.tag }}</span>
        </div>
		<h3>{{ item.title }}</h3>
        <p class="download-card__desc">{{item.description}}</p>
        <div class="download-card__buttons">
          <a v-if="item.link" :href="item.link" class="btn-ghost" target="_blank" rel="noopener noreferrer">{{item.button}}</a>
          <a v-else href="#" class="btn-ghost">{{item.button}}</a>
          <a v-if="item.secondaryLink" :href="item.secondaryLink" class="link-minor" target="_blank" rel="noopener noreferrer">
            {{item.secondaryText || 'Библиотеки'}}
          </a>
        </div>
	  </div>

    </div>
	
  </div>
  
</section>
</template>

<style scoped>
.download-hero {
  position: relative;
  padding: 24px 22px 26px;
  border-radius: 24px;
  background:
    radial-gradient(circle at 0 0, rgba(79, 70, 229, 0.28), transparent 55%),
    radial-gradient(circle at 100% 120%, rgba(56, 189, 248, 0.22), transparent 55%),
    rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.45);
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.85);
}

.download-hero__head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.download-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.5);
  font-size: 11px;
  color: #9ca3af;
  backdrop-filter: blur(14px);
}

.download-hero__badge .dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: radial-gradient(circle, #22c55e 0, #16a34a 60%, transparent 65%);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.3);
}

.download-hero__branch {
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px dashed rgba(148, 163, 184, 0.6);
  color: #9ca3af;
  background: rgba(15, 23, 42, 0.85);
}

.download-hero__title h1 {
  margin: 0 0 6px;
  font-size: 26px;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.download-hero__title h1 span {
  background: linear-gradient(to right, #e5e7eb, #c4b5fd);
  -webkit-background-clip: text;
  color: transparent;
}

.download-hero__title p {
  margin: 0 0 18px;
  font-size: 13px;
  color: #cbd5f5;
  max-width: 460px;
}

.download-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.4fr);
  gap: 18px;
}

@media (max-width: 900px) {
  .download-hero__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

.download-card {
  position: relative;
  padding: 16px 16px 15px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.45);
}

.download-card--accent {
  background:
    radial-gradient(circle at 0 0, rgba(79, 70, 229, 0.3), transparent 55%),
    rgba(15, 23, 42, 0.98);
  border-color: rgba(129, 140, 248, 0.8);
}

.download-card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 10px;
  color: #e5e7eb;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.65);
}

.pill--primary {
  background: linear-gradient(to right, #4f46e5, #22c55e);
  border: none;
}

.download-card__head .tag {
  font-size: 11px;
  color: #9ca3af;
}

.download-card h2,
.download-card h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.download-card__desc {
  margin: 0 0 12px;
  font-size: 12px;
  color: #cbd5f5;
}

.download-card__meta {
  margin: 0 0 12px;
  padding-left: 16px;
  font-size: 12px;
  color: #e5e7eb;
}

.download-card__meta li + li {
  margin-top: 3px;
}

.download-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 4px;
}

.download-card__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: #0b1120;
  background: linear-gradient(to right, #4f46e5, #22c55e);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 11px;
  border-radius: 999px;
  font-size: 12px;
  color: #e5e7eb;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.5);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: rgba(148, 163, 184, 0.8);
  background: rgba(30, 41, 59, 0.9);
}

.link-minor {
  display: inline-flex;
  font-size: 12px;
  color: #a5b4fc;
  text-decoration: none;
  transition: all 0.2s ease;
  align-items: center;
  padding: 6px 11px;
  border-radius: 999px;
  border: 1px solid transparent;
}

.link-minor:hover {
  color: #818cf8;
  text-decoration: underline;
  border-color: rgba(165, 180, 252, 0.3);
}

.hash {
  font-size: 11px;
  color: #9ca3af;
}

.download-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>