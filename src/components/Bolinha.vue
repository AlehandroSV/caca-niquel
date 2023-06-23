<template>
  <span class="relative flex h-4 w-4">
    <span
      :class="`rounded-full bg-yellow-500 absolute inline-flex h-full w-full opacity-75 ${
        isSpinning ? 'animate-ping' : null
      } `"
    ></span>
    <span
      class="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    isSpinning: Boolean,
  },
};
</script>
