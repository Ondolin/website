<template>
  <div class="group flex justify-start items-center cursor-pointer relative" :class="hasClipboard ? 'select-none' : true" @click="copyToClipboard">
    <span class="ml-2 group-hover:text-gray-300">{{ text }}</span>
    <div class="hidden group-hover:inline ml-2 text-gray-500">
      <font-awesome-icon size="1x" :icon="['fas', 'clipboard']" class="mr-2"/>
    </div>
    <div class="absolute flex justify-center w-full top-10" :class="copied ? 'inline' : 'hidden'">
      <div class="px-3 py-2 bg-primary-light rounded z-10 relative flex justify-center">
        <div class="absolute bg-primary-light w-4 h-4 -top-2 transform rotate-45 z-20"></div>
        Copied
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      copied: false,
      hasClipboard: false,
    };
  },
  created() {
    this.hasClipboard = !!navigator.clipboard
  },
  methods: {
    copyToClipboard() {
      if (this.hasClipboard) {
        navigator.clipboard.writeText(this.text);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>

</style>
