<template>
  <button
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    }
  },
  
  computed: {
    buttonClass() {
      switch(this.type) {
        default: 
          return 'rounded-md hover:border-2 border-blue-300 active:bg-blue-300'
      }
    }
  }
}
</script>
