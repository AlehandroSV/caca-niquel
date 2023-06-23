<template>
  <header
    class="flex items-center justify-between px-4 w-screen bg-black-600 text-white border-b border-b-yellow-50"
  >
    <div class="w-20">
      <router-link to="/">
        <img :src="logo" :alt="alt" />
      </router-link>
    </div>

    <ul class="flex gap-4">
      <li>
        <router-link to="/" class="border px-2 py-1 rounded"
          >Entrar</router-link
        >
      </li>
      <li>
        <router-link to="/" class="border px-2 py-1 rounded"
          >Cadastrar-se</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: ["logo", "alt"],
};
</script>
