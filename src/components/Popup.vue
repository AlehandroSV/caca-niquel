<template>
  <div
    v-if="isOpen"
    class="flex flex-col w-screen h-screen absolute top-0 left-0 justify-center items-center text-white"
  >
    <div
      class="absolute bg-black-900 opacity-75 w-screen h-screen"
      @click="onClose"
    />

    <div
      class="relative bg-gray-600 rounded-lg p-0 mx-4 md:mx-12 md:p-4 z-10 max-h-[99vh] overflow-y-hidden"
    >
      <Button
        @click="onClose"
        className="text-white absolute top-2 right-2 hover:text-gray-300"
      >
        <template #text>
          <PhXCircle :size="32" />
        </template>
      </Button>

      <slot name="children"></slot>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { PhXCircle } from "@phosphor-icons/vue";

export default {
  name: "PopUp",
  data() {
    return {};
  },
  methods: {},
  props: ["isOpen", "onClose"],
  components: { Button, PhXCircle },
};
</script>
