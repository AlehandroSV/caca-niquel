<template>
  <h1>Home</h1>
  <Button @click="toggleGameOpen">
    <template #text>Game</template>
  </Button>

  <Button @click="toggleVideoOpen">
    <template #text>Video</template>
  </Button>

  <Popup :is-open="gameOpen" :on-close="toggleGameOpen">
    <template #children>
      <div class="m-2">
        <h1>{{ jsonData[0].game[0].subtitle }}</h1>
      </div>
    </template>
  </Popup>

  <Popup :is-open="videoOpen" :on-close="toggleVideoOpen">
    <template #children>
      <div class="m-2">
        <h1>{{ jsonData[0].video[0].subtitle }}</h1>
      </div>
    </template>
  </Popup>
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
    },
  },
};
</script>
