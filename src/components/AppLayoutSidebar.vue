<template>
  <div class="h-full bg-gray-100 flex flex-col" :class="{ 'w-20': !isSidebarWidest, 'w-52': isSidebarWidest }"></div>
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
