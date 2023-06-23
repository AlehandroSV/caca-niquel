<template>
  <form @submit.prevent="submitForm">
    <div v-for="field in formProps" :key="field.id">
      <template v-if="field.generos">
        <label :for="field.id">{{ field.name }}</label>
        <select :id="field.id" v-model="field.value" class="text-black-900">
          <option value="">Selecione um gênero</option>
          <option
            v-for="option in field.generos"
            :value="option.name"
            :key="option.id"
          >
            {{ option.name }}
          </option>
        </select>
      </template>
      <template v-else>
        <label :for="field.id">{{ field.name }}</label>
        <input
          :id="field.id"
          :type="field.type"
          :placeholder="field.placeholder"
          v-model="field.value"
          :name="field.model"
          :mask="field.mask"
          v-if="field.type !== 'submit' && !field.salvarDados"
        />
      </template>
    </div>
    <div>
      <input id="saveData" type="checkbox" v-model="saveData" />
      <label for="saveData">Salvar Dados</label>
    </div>
    <button type="submit">Enviar</button>
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
