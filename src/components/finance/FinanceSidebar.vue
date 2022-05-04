<template>
  <div
    class="flex flex-col bg-blue-50 p-4 items-center"
    :class="{ 'w-20': !isSidebarWidest, 'w-32': isSidebarWidest }"
  >
    <div class="flex flex-col">
      <router-link to="/finance/operations">Операции</router-link>
      <router-link to="/finance">Отчёт</router-link>
      <router-link to="/finance">Категории</router-link>
    </div>

    <button
      class="mt-auto w-10 h-10 rounded-md hover:bg-gray-300 active:bg-gray-400"
      @click="changeSidebarWide"
    >
      {{ isSidebarWidest ? "<=" : "=>" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarWidest: false,
    };
  },

  methods: {
    changeSidebarWide() {
      this.isSidebarWidest = !this.isSidebarWidest;
    },
  },
};
</script>
