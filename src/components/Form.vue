<template>
  <div class="form">
    <form
        id="app"
        @submit.prevent="isDisabled"
    >
      <div class="prod-form">

        <div class="prod-form__block">

          <div class="prod-form__label-block">

            <label class="label">Наименование товара</label>
            <div class="circle"></div>
          </div>


          <input
              :class="{error_input: !username}"
              type="text" v-model="username"
              placeholder=" Введите наименование товара"
              class="input">
          <p
              :class="{error_mess: !username}"
              v-if="!username">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Описание товара</label>
            <div class="circle"></div>
          </div>

          <textarea
              :class="{error_input: !this.textarea}"
              class=textarea
              v-model="textarea"
              placeholder=" Введите описание товара"></textarea>
          <p
              :class="{error_mess: !this.textarea}"
              v-if="!this.textarea">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Ссылка на изображение товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="{error_input: !this.url}"
              type="url"
              v-model="url"
              placeholder="Введите ссылку"
              class="input">
          <p
              :class="{error_mess: !this.url}"
              v-if="!this.url">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Цена товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="{error_input: !this.modelNumber}"
              :type="indicatorChange ? 'number' : 'text'"
              v-model="modelNumber"
              step="1" min="1" max="100000000"
              placeholder=" Введите цену"
              @focus="indicatorChange = true"
              @blur="indicatorChange = false"
              class="input"
          >
          <p
              :class="{error_mess: !this.modelNumber}"
              v-if="!this.modelNumber">
            Поле является обязательным
          </p>
        </div>

        <button
            :class="(isDisabled) ? '' : 'btn_accepted'"
            :disabled='isDisabled'
            class="btn_form"
            type="submit"
            v-on:click="submitForm()"
        >Добавить товар
        </button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "McvForm",

  data: () => ({

    error: [],
    username: null,
    textarea: null,
    url: "https://google.com/image.jpg",
    number: null,
    realNumber: null,
    indicatorChange: false,
  }),

  methods: {
    submitForm() {

      this.error = [];
      if (!this.isDisabled ) {

        return alert("Форма отправлена");
      }
    },
  },
  computed: {
    isDisabled: function() {
      return this.username === null
      ||this.textarea===null
      ||this.url===null
      ||!this.modelNumber

    },


    modelNumber: {
      get() {
        return this.indicatorChange ? this.realNumber : this.realNumber.toLocaleString()
      },
      set(value) {
        this.realNumber = +value.replace(/\s/g, "")
        this.$emit('input', this.realNumber)
      },
    },
  },
  created() {
    this.realNumber = this.value || ""
  },

}
</script>

<style scoped>

</style>