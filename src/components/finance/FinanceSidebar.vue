<template>
  <div
    class="h-full flex flex-col p-2 border-r-2 border-blue-100"
    :class="{ 'w-14': !localSidebarLarge, 'w-36': localSidebarLarge }"
  >
    <router-link
      :to="{name: 'financeOperations'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-200 min-w-10 h-10 text-gray-500 font-medium"
    >
      <IconOperations class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Операции </span>
    </router-link>

    <router-link
      :to="{name: 'financeReport'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-200 min-w-10 h-10 text-gray-500 font-medium"
    >
      <IconReport class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Отчёт </span>
    </router-link>

    <router-link
      :to="{name: 'financeCategories'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-200 min-w-10 h-10 text-gray-500 font-medium"
    >
      <IconCategory class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Категории </span>
    </router-link>

    <s-button
      class="flex justify-center items-center mt-auto w-10 h-10"
      @click="handleChangeLarge"
    >
      <IconMenu class="fill-current text-gray-500 font-medium" />
    </s-button>
  </div>
</template>

<script>
import IconMenu from "@/assets/icons/menu.svg";
import IconOperations from "@/assets/icons/currencyExchange.svg";
import IconReport from "@/assets/icons/monitoring.svg";
import IconCategory from "@/assets/icons/category.svg";

export default {
  components: {
    IconMenu,
    IconOperations,
    IconReport,
    IconCategory
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
    };
  },

  methods: {
    handleChangeLarge() {
      this.localSidebarLarge = !this.localSidebarLarge;
    },
  },
};
</script>
