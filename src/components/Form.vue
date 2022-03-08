<template>
  <div class="form">
    <form
        id="app"
        @submit.prevent="submitForm"
        novalidate
    >
      <div class="prod-form">

        <div class="prod-form__block">

          <div class="prod-form__label-block">

            <label class="label">Наименование товара</label>
            <div class="circle"></div>
          </div>


          <input
              :class="{error_input: !this.username}"
              type="text" v-model="username"
              placeholder=" Введите наименование товара"
              class="input">
          <p
              :class="{error_mess: error.length}"
              v-if="!this.username">
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
              placeholder=" Введите описание товара"

          ></textarea>
          <p
              :class="{error_mess: error.length}"
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

              required="true"
              :class="{error_input: !this.url}"
              type="url"
              v-model="url"
              placeholder="Введите ссылку"
              class="input">
          <p
              :class="{error_mess: error.length}"
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
              :class="{error_input: !modelNumber}"
              :type="indicatorChange ? 'number' : 'text'"
              v-model="modelNumber"
              step="1" min="1" max="100000000"
              placeholder=" Введите цену"
              @focus="indicatorChange = true"
              @blur="indicatorChange = false"
              class="input"
          >
          <p
              :class="{error_mess: error.length}"
              v-if="!modelNumber">
            Поле является обязательным
          </p>
        </div>

        <button
            class="btn_form"
            type="submit"
        >Добавить товар</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "McvForm",

  data: () => ({
    error: [],
    username: "",
    textarea: "",
    url: "https://google.com/image.jpg",
    number: "",
    realNumber: null,
    indicatorChange: false,
  }),

  methods: {
    submitForm() {

      this.error = [];
      if (!this.username) {
       return this.error.push('Поле является обязательным');

      }
      if (!this.textarea) {
        return this.error.push('Поле является обязательным');

      }
      if (!this.url) {
        return this.error.push('Поле является обязательным');

      }
      if (!this.number) {
        return this.error.push('Поле является обязательным');

      }
      if (!this.error.length) {
        return true
      }
    },
  },
  computed: {

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