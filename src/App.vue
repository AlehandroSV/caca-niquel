<template>
  <Header logo="/imgs/caca-niquel.png" alt="Logo" />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  setup() {},
  components: { Header },
};
</script>
