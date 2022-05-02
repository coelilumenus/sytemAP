<template>
  <div class="bg-gray-200 w-full h-20 flex p-4">
    <div>
      <button
        class="w-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-300 active:bg-gray-400"
        @click="$emit('changeSidebarWide')"
      >
        <menu-icon class="text-gray-600 fill-current" />
      </button>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/assets/icons/menu.svg"

export default {
  components: {
    MenuIcon,
  },
}
</script>
