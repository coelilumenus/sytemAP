<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </div>
</template>

<script>
export default {
  name: "AppLayoutLinks",
}
</script>
