<template>
  <form @submit.prevent="submitForm" v-if="formularioEnviado == false">
    <div v-for="field in formProps" :key="field.id" class="mx-4 flex flex-col">
      <template v-if="field.generos">
        <div class="my-1 flex flex-col">
          <div
            class="flex border border-black bg-transparent dark:border-white items-center py-2 px-2 text-sm w-full rounded-full focus-within:border-primary focus-within:ring-1 ring-secondary"
          >
            <select
              :id="field.id"
              v-model="field.value"
              class="bg-[#4B5563] text-white text-sm block w-full outline-none cursor-pointer"
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
        <div class="my-1 flex flex-col">
          <div
            class="flex border border-black dark:border-white items-center gap-3 py-2 px-2 w-full text-sm rounded-full focus-within:border-primary focus-within:ring-1 ring-secondary"
            v-if="field.type !== 'submit' && !field.salvarDados"
          >
            <input
              :id="field.id"
              :type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              :name="field.model"
              v-if="field.mask"
              v-mask="field.mask"
              class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              :id="field.id"
              :type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              :name="field.model"
              v-else
              class="bg-transparent h-full w-full flex-1 placeholder:text-gray-400 outline-none cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
      </template>
      <template v-else-if="field.salvarDados">
        <div class="flex items-center gap-1 ml-2 text-sm">
          <input
            id="saveData"
            type="checkbox"
            v-model="saveData"
            class="w-3 h-3 text-white bg-transparent focus:ring-blue-500 focus:ring-1"
          />
          <label for="saveData" class="cursor-pointer select-none"
            >Salvar dados</label
          >
        </div>
      </template>
    </div>

    <div class="flex w-full items-center justify-center">
      <button
        type="submit"
        class="transition-all text-black-900 w-full bg-yellow-400 py-1 px-2 mx-4 rounded-full mt-2 disabled:opacity-50 duration-700 font-semibold"
      >
        Enviar
      </button>
    </div>
  </form>

  <div v-else>Formulário enviado com sucesso!</div>
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
      formularioEnviado: false,
    };
  },
  mounted() {
    this.formProps = this.props;
  },
  methods: {
    submitForm() {
      console.log(this.formProps);
      console.log("Salvar Dados:", this.saveData);
      this.formularioEnviado = true;
    },
  },
};
</script>
