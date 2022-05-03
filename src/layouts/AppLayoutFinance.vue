<template>
    <LayoutSidebarFinance />
    <slot />
</template>

<script>
import LayoutSidebarFinance from "@/components/finance/LayoutSidebarFinance.vue"

export default {
  name: "AppLayoutFinance",

  components: {
      LayoutSidebarFinance
  }
}
</script>
