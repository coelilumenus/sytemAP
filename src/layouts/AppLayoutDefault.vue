<template>
  <div>
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
