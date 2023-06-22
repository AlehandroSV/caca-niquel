<template>
  <div
    v-show="isOpen"
    class="flex flex-col w-screen h-screen absolute top-0 left-0 justify-center items-center text-white"
  >
    <div
      class="absolute bg-black-900 opacity-75 w-screen h-screen"
      @click="onClose"
    />

    <div class="relative bg-gray-600 rounded-lg p-4 z-10">
      <Button
        @click="onClose"
        className="text-white absolute top-2 right-2 hover:text-gray-300"
      >
        <template #text>
          <PhX :size="20" />
        </template>
      </Button>

      <slot name="children"></slot>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { PhX } from "@phosphor-icons/vue";

export default {
  name: "PopUp",
  data() {
    return {};
  },
  methods: {},
  props: ["isOpen", "onClose"],
  components: { Button, PhX },
};
</script>
