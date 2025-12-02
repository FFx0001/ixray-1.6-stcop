<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import mediumZoom from 'medium-zoom'

const { Layout } = DefaultTheme
const router = useRouter()

let zoom: ReturnType<typeof mediumZoom> | null = null

const setupMediumZoom = () => {
  zoom?.detach()
  zoom = mediumZoom('[data-zoomable]', {
    background: 'transparent',
    margin: 24,
  })
}

onMounted(() => {
  setupMediumZoom()
  router.onAfterRouteChange = setupMediumZoom
})
</script>

<template>
  <Layout />
</template>
