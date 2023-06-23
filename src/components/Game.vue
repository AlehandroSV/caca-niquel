<template>
  <div class="flex flex-col justify-center items-center my-8">
    <div
      class="flex items-center justify-between mx-auto p-4 rounded mb-4 gap-3 bg-yellow-500 text-black-900"
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

    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-black-900"
      @click="spin"
      @keyup.enter="spin"
      :disabled="isSpinning"
    >
      Puxar alavanca
    </button>

    <audio ref="audioElement" src="/spin.mp3" />
  </div>
</template>

<script>
export default {
  setup() {},
  name: "GameItem",
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
            console.log("Ganhou");
          }
          this.isSpinning = false;
        }
      }, 50);
    },
  },
};
</script>
