<template>
  <div
    class="flex justify-center items-center h-full gap-6 flex-wrap overflow-y-auto scrollbar-thin scrollbar-thumb-black-600"
  >
    <Card
      title="Caça-Níquel"
      description="Bem-vindo ao mundo dos caça-níqueis! Prepare-se para girar, vencer e se divertir com gráficos impressionantes, recursos especiais e prêmios épicos. Descubra a emoção dos jogos de sorte e entre nessa incrível aventura de diversão!"
      img="imgs/caca-niquel.png"
    >
      <template #button>
        <Button
          @click="toggleGameOpen"
          className="font-bold bg-black-600 text-white text-2xl rounded py-2 px-4 transition-all
      drop-shadow-lg border border-white
      hover:bg-orange-300 hover:text-black-900 hover:scale-105
      "
        >
          <template #text>Caça-Níquel</template>
        </Button>
      </template>
    </Card>

    <Card
      title="Video de Introdução"
      description="Bem-vindo à jornada emocionante dos caça-níqueis! Prepare-se para girar, vencer e se divertir em um universo de prêmios e adrenalina. Está pronto? A sorte está lançada! Vamos começar essa aventura dos caça-níqueis!"
      img="imgs/caca-niquel.png"
    >
      <template #button>
        <Button
          @click="toggleVideoOpen"
          className="font-bold bg-black-600 text-white text-2xl rounded py-2 px-4 transition-all
      drop-shadow-lg border border-white
      hover:bg-orange-300 hover:text-black-900 hover:scale-105
      "
        >
          <template #text>Video</template>
        </Button>
      </template>
    </Card>
  </div>

  <div v-for="data in jsonData" :key="data.title">
    <Popup :is-open="gameOpen" :on-close="toggleGameOpen">
      <template #children>
        <div class="flex flex-col m-2 items-center">
          <div class="mb-4 text-center">
            <h1 class="font-semibold text-2xl mb-2">{{ data.game.title }}</h1>
            <p class="max-w-4xl">
              {{ data.game.subtitle }}
            </p>
          </div>
          <div class="m-2">
            <Game @win="toggleWin" />
          </div>
        </div>

        <Form :props="data.game.formulario" />
      </template>
    </Popup>

    <Popup :is-open="videoOpen" :on-close="toggleVideoOpen">
      <template #children>
        <div class="flex flex-col m-2 items-center">
          <div class="mb-4 text-center">
            <h1 class="font-semibold text-2xl mb-2">{{ data.video.title }}</h1>
            <p class="max-w-4xl">
              {{ data.video.subtitle }}
            </p>
          </div>

          <div v-if="data.video.link_youtube" class="w-full h-full">
            <iframe
              :src="data.video.link_youtube"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="rounded-lg w-full h-80"
            ></iframe>
          </div>

          <div v-else class="w-full h-full">
            <img :src="data.video.link" />
          </div>
        </div>

        <Form :props="data.video.formulario" />
      </template>
    </Popup>
  </div>

  <img
    src="/confete.gif"
    alt="win"
    :class="`${
      win ? 'block' : 'hidden'
    } w-screen h-screen absolute left-0 top-0 -z-10`"
  />
</template>

<script>
import Button from "../components/Button.vue";
import Popup from "../components/Popup.vue";
import Form from "../components/Form.vue";
import Game from "../components/Game.vue";

import JsonData from "../json/db.json";
import Card from "../components/Card.vue";

export default {
  components: { Button, Popup, Form, Game, Card },
  data() {
    return {
      gameOpen: false,
      videoOpen: false,
      jsonData: JsonData,
      win: false,
    };
  },
  methods: {
    toggleGameOpen() {
      this.gameOpen = !this.gameOpen;
    },
    toggleVideoOpen() {
      this.videoOpen = !this.videoOpen;
    },
    toggleWin() {
      this.win = !this.win;
    },
  },
};
</script>
