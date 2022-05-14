<template>
  <button
    class="rounded-md p-1 border-2 border-opacity-0"
    :class="buttonClass"
    :disabled="disabled"
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
      type: Boolean,
      default: false
    }
  },
  
  computed: {
    buttonClass() {
      if (this.disabled) {
        return 'bg-gray-200 text-gray-400 cursor-not-allowed'
      }
      
      switch(this.type) {
        case 'primary':
          return 'text-white bg-blue-400 active:bg-blue-500 hover:border-opacity-100 border-blue-200'
        
        default: 
          return 'text-gray-500 hover:border-opacity-100 border-blue-300 active:bg-blue-300'
      }
    }
  }
}
</script>
