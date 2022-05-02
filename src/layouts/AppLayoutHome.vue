<template>
  <div>
    <header class="bg-green-500 h-10" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from "@/layouts/AppLayoutLinks.vue"
export default {
  name: "AppLayoutHome",
  
  components: {
    AppLayoutLinks,
  },
}
</script>
