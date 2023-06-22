<template>
  <button @click="$emit('click')" :class="`teste ${className}`">
    <slot name="iconLeft"></slot>
    <slot name="text"></slot>
    <slot name="iconRight"></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    className: String,
  },
  emits: ["click"],
};
</script>
