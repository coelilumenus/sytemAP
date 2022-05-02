<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue"

export default {
  name: "App",
  components: { AppLayout },
}
</script>
