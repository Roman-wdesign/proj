<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="prod-form">

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Наименование товара</label>
            <div class="circle"></div>
          </div>

          <input type="text" v-model="username" placeholder=" Введите наименование товара" class="input">
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Описание товара</label>
            <div class="circle"></div>
          </div>

          <textarea class=textarea v-model="textarea" placeholder=" Введите описание товара"></textarea>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Ссылка на изображение товара</label>
            <div class="circle"></div>
          </div>

          <input type="url" v-model="url" placeholder=" Введите ссылку" class="input">
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Цена товара</label>
            <div class="circle"></div>
          </div>

          <input type="number" v-model="number" step="1" min="1" max="100" placeholder=" Введите цену" class="input">
        </div>

        <button class="btn_form" type="submit">Добавить товар</button>
      </div>


    </form>
  </div>
</template>

<script>
export default {
  name: "McvForm",
  data: () => ({
    username: '',
    textarea: '',
    url: '',
    number: '',
  }),
  methods: {},
}
</script>

<style scoped>

</style>