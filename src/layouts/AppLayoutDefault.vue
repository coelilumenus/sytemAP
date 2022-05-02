<template>
  <div class="w-full h-screen overflow-y-auto flex flex-col">
    <AppLayoutHeader />

    <div class="flex w-full h-screen">
      <AppLayoutSidebar />
      <slot class="flex 1" />
    </div>
  </div>
</template>

<script>
import AppLayoutLinks from "@/layouts/AppLayoutLinks.vue"
import AppLayoutHeader from "@/components/AppLayoutHeader.vue"
import AppLayoutSidebar from "@/components/AppLayoutSidebar.vue"

export default {
  name: "AppLayoutDefault",

  components: {
    AppLayoutLinks,
    AppLayoutHeader,
    AppLayoutSidebar,
  },
}
</script>
