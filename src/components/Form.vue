<template>
  <div class="form">
    <form
        id="app"
        @submit.prevent="addToList; isDisabled"
        novalidate
    >
      <div class="prod-form">

        <div class="prod-form__block">

          <div class="prod-form__label-block">

            <label class="label">Наименование товара</label>
            <div class="circle"></div>
          </div>


          <input
              :class="{error_input: !username}"
              type="text" v-model.lazy.trim="username"
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
              :class="{error_input: !this.isValidUrl}"
              type="url"
              v-model="url"
              placeholder="Введите ссылку"
              class="input">
          <p
              :class="{error_mess: !this.isValidUrl}"
              v-if="!this.isValidUrl">
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
              v-model.trim="modelNumber"
              step="1" min="2" max="100000000"
              placeholder="Введите цену"
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
            @click="addToList(); resetForm()"
        >Добавить товар
        </button>
      </div>
    </form>
  </div>
</template>

<script>

// const regexSome = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const regexUrl = new RegExp(regex);
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "McvForm",

  data: () => ({
    username: null,
    textarea: null,
    url: null,
    number: null,
    realNumber: null,
    indicatorChange: false
  }),


  methods: {
    ...mapMutations([
      'ADD_TO_LIST'
    ]),
    addToList(product) {
      console.log('%c form submitted ', 'color: #D7953FFF;')
      this.ADD_TO_LIST(product);
    },
    resetForm() {
      // this.$emit('ADD_TO_LIST', this.product_data);
      this.username = null;
      this.textarea = null;
      this.url = null;
      this.number = null;
      this.realNumber = null;
      this.indicatorChange = true;

      return alert("Товар был добавлен в список");
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    isDisabled() {
      return this.username === null
          || this.textarea === null
          || !this.isValidUrl
          || !this.modelNumber

    },

    isValidUrl() {
      if (this.url) {
        return this.url.match(regexUrl)
      } else {
        return false
      }
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
<style scoped></style>