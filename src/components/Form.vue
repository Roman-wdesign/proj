<template>
  <div class="form">
    <form
        id="app"
        @submit.prevent="submitForm()"
    >
      <div class="prod-form">

        <div class="prod-form__block">

          <div class="prod-form__label-block">

            <label class="label">Наименование товара</label>
            <div class="circle"></div>
          </div>


          <input
              :class="{error_input: isUserNameError}"
              type="text" v-model="username"
              placeholder=" Введите наименование товара"
              class="input">
          <p
              :class="{error_mess: isUserNameError}"
              v-if="isUserNameError">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Описание товара</label>
            <div class="circle"></div>
          </div>

          <textarea
              :class="{error_input: isTextareaError}"
              class=textarea
              v-model="textarea"
              placeholder=" Введите описание товара"></textarea>
          <p
              :class="{error_mess: isTextareaError}"
              v-if="isTextareaError">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Ссылка на изображение товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="{error_input: isUrlError}"
              type="url"
              v-model="url"
              placeholder="Введите ссылку"
              class="input">
          <p
              :class="{error_mess: isUrlError}"
              v-if="isUrlError">
            Поле является обязательным
          </p>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Цена товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="{error_input: isNumberError}"
              :type="indicatorChange ? 'number' : 'text'"
              v-model="modelNumber"
              step="1" min="1" max="100000000"
              placeholder=" Введите цену"
              @focus="indicatorChange = true"
              @blur="indicatorChange = false"
              class="input"
          >
          <p
              :class="{error_mess: isNumberError}"
              v-if="isNumberError">
            Поле является обязательным
          </p>
        </div>

        <button
            :disabled="!submitForm"
            class="btn_form"
            type="submit"
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
      if (this.isUserNameError || this.isTextareaError || this.isUrlError || this.isNumberError) {
        return this.error.push('Поле является обязательным');
      } else {
        return alert("Форма отправлена");
      }

    },
  },
  computed: {
    isUserNameError() {
      return !this.username
    },
    isTextareaError() {
      return !this.textarea
    },
    isUrlError() {
      return !this.url
    },
    isNumberError() {
      return !this.modelNumber
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