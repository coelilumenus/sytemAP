<template>
  <div class="w-full h-screen overflow-y-auto flex flex-col">
    <LayoutHeader />

    <div class="flex w-full h-screen">
      <LayoutSidebar />

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

  data() {},

  methods: {},
};
</script>
