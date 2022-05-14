<template>
  <div
    class="h-full flex flex-col p-2 border-r-2 border-blue-100 text-gray-500"
    :class="{ 'w-14': !localSidebarLarge, 'w-32': localSidebarLarge }"
  >
    <router-link
      to="/"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10 font-medium"
    >
      <IconHome class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Главная </span>
    </router-link>

    <router-link
      to="/finance"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10 font-medium"
    >
      <IconFinance class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Финансы </span>
    </router-link>

    <s-button class="flex justify-center items-center mt-auto w-10 h-10" @click="handleChangeLarge">
      <IconMenu class="fill-current font-medium" />
    </s-button>
  </div>
</template>

<script>
import IconMenu from "@/assets/icons/menu.svg"
import IconHome from "@/assets/icons/home.svg"
import IconFinance from "@/assets/icons/paid.svg"

export default {
  components: {
    IconMenu,
    IconHome,
    IconFinance,
  },

  props: {
    isSidebarLarge: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localSidebarLarge: this.isSidebarLarge,
    }
  },

  methods: {
    handleChangeLarge() {
      this.localSidebarLarge = !this.localSidebarLarge
    },
  },
}
</script>
