<template>
  <h1>Home</h1>
  <Button @click="closePopup">
    <template #text>Teste</template>
  </Button>

  <Popup :is-open="isOpen" :on-close="closePopup">
    <template #children>
      <div class="m-2">
        <h1>Video Super Bacana</h1>
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
      isOpen: false,
    };
  },
  methods: {
    closePopup() {
      this.isOpen = !this.isOpen;
    },
  },
  created() {
    console.log(JsonData);
  },
};
</script>
