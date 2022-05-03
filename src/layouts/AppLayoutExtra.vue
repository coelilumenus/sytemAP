<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutExtraDefault from './AppLayoutExtraDefault.vue'

export default {
  name: 'AppLayoutExtra',
  
  data: () => ({
    layout: AppLayoutExtraDefault
  }),
  
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`./${route.meta.extraLayout}.vue`)
          this.layout = component?.default || AppLayoutExtraDefault
        } catch (error) {
          this.layout = AppLayoutExtraDefault
        }
      }
    }
  }
}
</script>