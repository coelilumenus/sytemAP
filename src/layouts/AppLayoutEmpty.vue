<template>
  <div>
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from "@/layouts/AppLayoutLinks.vue"
export default {
  name: "AppLayoutEmpty",
  
  components: {
    AppLayoutLinks,
  },
}
</script>
