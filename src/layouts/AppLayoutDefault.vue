<template>
  <div>
    <header class="bg-red-500 h-10" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from "@/layouts/AppLayoutLinks.vue"
export default {
  name: "AppLayoutDefault",
  
  components: {
    AppLayoutLinks,
  },
}
</script>
