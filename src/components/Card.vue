<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center bg-black-600 text-white"
  >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center">{{ title }}</div>
      <p class="text-gray-300 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-2 pb-4">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    img: String,
  },
};
</script>
