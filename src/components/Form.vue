<template>
  <form
    v-if="props"
    class="flex flex-col gap-3 mx-4"
    @submit.prevent="submit($event)"
  >
    <!-- TODO: Implementar Mascara -->
    <!-- TODO: Implementar Validação -->
    {{ console.log(props) }}
    <div v-for="data in props" :key="data.id">
      <div v-if="data.model === 'email'">
        <label :for="data.id">{{ data.name }}</label>
        <div
          class="flex border border-black dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
        >
          <input
            class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none"
            :id="data.id"
            v-model="email"
            :placeholder="data.placeholder"
          />
        </div>
      </div>

      <div v-if="data.model === 'nome'">
        <label :for="data.id">{{ data.name }}</label>
        <div
          class="flex border border-black dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
        >
          <input
            class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none"
            :id="data.id"
            v-model="nome"
            :placeholder="data.placeholder"
          />
        </div>
      </div>

      <div v-if="data.model === 'phone'">
        <label :for="data.id">{{ data.name }}</label>
        <div
          class="flex border border-black dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
        >
          <input
            class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none"
            :id="data.id"
            v-model="phone"
            :placeholder="data.placeholder"
          />
        </div>
      </div>

      <div v-if="data.model === 'gen'">
        <label :for="data.id">{{ data.name }}</label>
        <div
          class="flex bg-white text-black-900 border border-black dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
        >
          <select
            v-model="gen"
            id=""
            class="h-full w-full flex-1 placeholder:text-gray-400 outline-none"
          >
            <option value="">Selecione um Gênero</option>
            <option
              :value="gens.name"
              v-for="gens in data.generos"
              :key="gens.id"
            >
              {{ gens.name }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="data.salvarDados" class="flex gap-1 items-center">
        <input
          type="checkbox"
          name="gen"
          id="salve"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        />
        <label for="salve" class="cursor-pointer">Salvar Dados</label>
      </div>
    </div>
    <Button className="bg-black-600 py-2 rounded my-2">
      <template #text>Enviar</template>
    </Button>
  </form>
</template>
<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      email: "",
      nome: "",
      phone: "",
      gen: "",
    };
  },
  components: { Button },
  props: ["props"],
  methods: {
    submit(e) {
      // Implementar validação
    },
  },
};
</script>
