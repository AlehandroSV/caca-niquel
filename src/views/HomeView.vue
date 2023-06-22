<template>
  <h1>Home</h1>
  <Button @click="toggleGameOpen">
    <template #text>Game</template>
  </Button>

  <Button @click="toggleVideoOpen">
    <template #text>Video</template>
  </Button>

  <div v-for="data in jsonData" :key="data.title">
    <Popup :is-open="gameOpen" :on-close="toggleGameOpen">
      <template #children>
        <div class="m-2"></div>
      </template>
    </Popup>

    <Popup :is-open="videoOpen" :on-close="toggleVideoOpen">
      <template #children>
        <div class="flex flex-col m-2 items-center">
          <div class="mb-4 text-center">
            <h1 class="font-semibold text-2xl mb-2">{{ data.title }}</h1>
            <p class="max-w-4xl">
              {{ data.subtitle }}
            </p>
          </div>

          <div v-show="data.link_youtube" class="w-full h-full">
            <iframe
              :src="data.link_youtube"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="rounded-lg w-full h-80"
            ></iframe>
          </div>

          <div v-show="data.link" class="w-full h-full">
            <img :src="data.link" />
          </div>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Popup from "../components/Popup.vue";

import JsonData from "../json/db.json";

export default {
  components: { Button, Popup },
  data() {
    return {
      gameOpen: false,
      videoOpen: false,
      jsonData: JsonData,
    };
  },
  methods: {
    toggleGameOpen() {
      this.gameOpen = !this.gameOpen;
    },
    toggleVideoOpen() {
      this.videoOpen = !this.videoOpen;
      console.log(this.jsonData);
    },
  },
};
</script>
