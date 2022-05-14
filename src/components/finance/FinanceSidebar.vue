<template>
  <div
    class="h-full flex flex-col p-2 border-r-2 border-blue-100 text-gray-500 font-medium"
    :class="{ 'w-14': !localSidebarLarge, 'w-36': localSidebarLarge }"
  >
    <router-link
      :to="{name: 'financeDashboard'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10"
    >
      <IconDashboard class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Главная </span>
    </router-link>

    <router-link
      :to="{name: 'financeOperations'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10"
    >
      <IconOperations class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Операции </span>
    </router-link>

    <router-link
      :to="{name: 'financeReport'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10"
    >
      <IconReport class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Отчёт </span>
    </router-link>

    <router-link
      :to="{name: 'financeCategories'}"
      class="flex items-center pl-2 rounded-md hover:text-blue-400 active:bg-blue-50 min-w-10 h-10"
    >
      <IconCategory class="fill-current" />
      <span v-show="localSidebarLarge" class="ml-1"> Категории </span>
    </router-link>

    <s-button
      class="flex justify-center items-center mt-auto w-10 h-10"
      @click="handleChangeLarge"
    >
      <IconMenu class="fill-current font-medium" />
    </s-button>
  </div>
</template>

<script>
import IconMenu from "@/assets/icons/menu.svg";
import IconOperations from "@/assets/icons/balance.svg";
import IconReport from "@/assets/icons/monitoring.svg";
import IconCategory from "@/assets/icons/category.svg";
import IconDashboard from "@/assets/icons/dashboard.svg";


export default {
  components: {
    IconMenu,
    IconOperations,
    IconReport,
    IconCategory,
    IconDashboard
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
