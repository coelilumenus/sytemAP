<template>
  <div class="h-full bg-gray-100 flex flex-col p-4" :class="{ 'w-20': !isSidebarWidest, 'w-32': isSidebarWidest }">
    <router-link to="/">Главная</router-link>
    <router-link to="/finance">Финансы</router-link>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarWidest: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
