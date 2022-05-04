<template>
  <div class="w-full h-screen overflow-y-auto flex flex-col">
    <LayoutHeader @changeSidebarWide="changeSidebarWide" />

    <div class="flex w-full h-screen">
      <LayoutSidebar :isSidebarWidest="isSidebarWidest" />

      <div class="flex-1 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutSidebar from "@/components/layout/LayoutSidebar.vue";

export default {
  name: "AppLayoutDefault",

  components: {
    LayoutHeader,
    LayoutSidebar,
  },

  data() {
    return {
      isSidebarWidest: false,
    };
  },

  methods: {
    changeSidebarWide() {
      this.isSidebarWidest = !this.isSidebarWidest;
    },
  },
};
</script>
