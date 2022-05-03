<template>
  <div class="w-full h-screen overflow-y-auto flex flex-col">
    <LayoutHeader @changeSidebarWide="changeSidebarWide" />

    <div class="flex w-full h-screen">
      <LayoutSidebar :isSidebarWidest="isSidebarWidest" />

      <AppLayoutExtra>
        <div class="flex-1 p-4">
          <slot />
        </div>
      </AppLayoutExtra>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue"
import LayoutSidebar from "@/components/LayoutSidebar.vue"
import AppLayoutExtra from "@/layouts/AppLayoutExtra.vue"

export default {
  name: "AppLayoutDefault",

  components: {
    LayoutHeader,
    LayoutSidebar,
    AppLayoutExtra
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
