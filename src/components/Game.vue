<template>
  <div class="flex flex-col justify-center items-center my-8 select-none">
    <div class="flex items-center">
      <div>
        <div class="bg-red-600 p-2 flex gap-1 rounded-t-lg">
          <Bolinha :isSpinning="isSpinning" v-for="index in 15" :key="index" />
        </div>
        <div class="flex justify-between w-full">
          <div class="bg-red-600 px-2 gap-2 flex flex-col">
            <Bolinha :isSpinning="isSpinning" v-for="index in 5" :key="index" />
          </div>
          <div class="bg-black-900 flex items-center justify-center w-full">
            <div
              class="flex items-center justify-center p-2 rounded gap-3 bg-yellow-500 text-black-900"
            >
              <div
                class="flex items-center justify-center w-16 h-16 font-bold border-2 border-black-900 rounded-md text-4xl bg-white"
              >
                {{ value1 }}
              </div>
              <div
                class="flex items-center justify-center w-16 h-16 font-bold border-2 border-black-900 rounded-md text-4xl bg-white"
              >
                {{ value2 }}
              </div>
              <div
                class="flex items-center justify-center w-16 h-16 font-bold border-2 border-black-900 rounded-md text-4xl bg-white"
              >
                {{ value3 }}
              </div>
            </div>
          </div>
          <div class="bg-red-600 px-2 gap-2 flex flex-col">
            <Bolinha :isSpinning="isSpinning" v-for="index in 5" :key="index" />
          </div>
        </div>
        <div class="bg-red-600 p-2 gap-1 flex rounded-b-lg">
          <Bolinha :isSpinning="isSpinning" v-for="index in 15" :key="index" />
        </div>
      </div>

      <div class="flex items-end">
        <div class="bg-black-900 h-4 w-2"></div>
        <button @click="spin" :disabled="isSpinning">
          <div class="w-4 h-4 bg-red-600 rounded-t-lg" />
          <div
            class="bg-black-900 h-20 w-4 rounded-ee-lg"
            :class="{ 'animate-lever': isSpinning }"
          ></div>
        </button>
      </div>
    </div>

    <button
      @click="spin"
      :disabled="isSpinning"
      class="transition-all text-black-900 bg-yellow-400 py-2 px-4 rounded mt-4 disabled:opacity-50 duration-700 font-semibold"
    >
      Pressione
    </button>
  </div>

  <audio ref="audioElement" src="/spin.mp3" />
</template>

<script>
import Bolinha from "./Bolinha.vue";

export default {
  name: "GameItem",
  components: { Bolinha },
  data() {
    return {
      value1: 7,
      value2: 7,
      value3: 7,
      spinInterval: null,
      spinCount: 0,
      maxSpinCount: 100,
      isSpinning: false,
    };
  },
  methods: {
    spin() {
      this.spinCount = 0;
      this.isSpinning = true;
      this.$refs.audioElement.play();

      this.spinInterval = setInterval(() => {
        this.value1 = Math.floor(Math.random() * 7) + 1;
        this.value2 = Math.floor(Math.random() * 7) + 1;
        this.value3 = Math.floor(Math.random() * 7) + 1;

        this.spinCount++;

        if (this.spinCount >= this.maxSpinCount) {
          clearInterval(this.spinInterval);

          if (this.value1 === this.value2 && this.value1 === this.value3) {
            this.$emit("win");

            setTimeout(() => {
              this.$emit("win");
              this.isSpinning = false;
            }, 1000);
          }

          this.isSpinning = false;
        }
      }, 50);
    },
  },
  emits: ["win"],
};
</script>
