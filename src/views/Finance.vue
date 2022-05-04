<template>
  <div class="flex h-full">
    <finance-sidebar />
    <div class="p-4">
      <router-view />
    </div>

  </div>
</template>

<script>
import FinanceSidebar from "../components/finance/FinanceSidebar.vue"

export default {
  name: 'Finance',

  components: {
    FinanceSidebar
  }
}
</script>