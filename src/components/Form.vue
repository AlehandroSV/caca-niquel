<template>
  <form @submit.prevent="submitForm" class="mb-5">
    <div v-for="field in formProps" :key="field.id" class="mx-4 flex flex-col">
      <template v-if="field.generos">
        <div class="my-2">
          <label :for="field.id">{{ field.name }}</label>
          <div
            class="flex border border-black bg-white dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
          >
            <select
              :id="field.id"
              v-model="field.value"
              class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none text-black-900 cursor-pointer"
            >
              <option value="">Selecione um gênero</option>
              <option
                v-for="option in field.generos"
                :value="option.name"
                :key="option.id"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
      </template>
      <template v-else-if="!field.salvarDados">
        <div class="my-2">
          <label :for="field.id">{{ field.name }}</label>
          <div
            class="flex border border-black dark:border-white items-center gap-3 py-3 px-3 w-full rounded-md focus-within:border-primary focus-within:ring-1 ring-secondary"
            v-if="field.type !== 'submit' && !field.salvarDados"
          >
            <input
              :id="field.id"
              :type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              :name="field.model"
              :mask="field.mask"
              class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
      </template>
      <template v-else-if="field.salvarDados">
        <div class="flex items-center gap-2">
          <input
            id="saveData"
            type="checkbox"
            v-model="saveData"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label for="saveData" class="cursor-pointer">Salvar dados</label>
        </div>
      </template>
    </div>

    <div class="flex w-full items-center justify-center">
      <button
        type="submit"
        class="transition-all text-black-900 bg-yellow-400 py-2 px-4 rounded mt-4 disabled:opacity-50 duration-700 font-semibold"
      >
        Enviar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    props: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formProps: [],
      saveData: false,
    };
  },
  mounted() {
    this.formProps = this.props;
  },
  methods: {
    submitForm() {
      console.log(this.formProps);
      console.log("Salvar Dados:", this.saveData);
    },
  },
};
</script>
