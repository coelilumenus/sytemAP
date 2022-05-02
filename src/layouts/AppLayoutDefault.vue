<template>
  <div class="w-full h-screen overflow-y-auto flex flex-col">
    <AppLayoutHeader @changeSidebarWide="changeSidebarWide" />

    <div class="flex w-full h-screen">
      <AppLayoutSidebar :isSidebarWidest="isSidebarWidest" />

      <div class="flex-1 p-4">
        <slot />
      </div>
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

  data() {
    return {
      isSidebarWidest: false,
    }
  },
  
  methods: {
    changeSidebarWide() {
      this.isSidebarWidest = !this.isSidebarWidest
    }
  },
}
</script>
