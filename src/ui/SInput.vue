<template>
  <input :type="type" class="px-2 py-1 border-2 border-blue-200 rounded-md focus:border-blue-300 focus-visible:outline-none">
</template>

<script>
export default {
  name: 'SInput',
  
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>