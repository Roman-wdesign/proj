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
              maxlength="50"
              :class="[{error_input: !this.username}, {success:this.username}]"
              type="text" v-model.trim="username"
              placeholder=" Введите наименование товара"
              class="input">
          <transition name="fade">
            <p
                :class="{error_mess: !this.username}"
                v-if="!this.username">
              Поле является обязательным
            </p>
          </transition>

        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Описание товара</label>
            <div class="circle"></div>
          </div>

          <textarea
              maxlength="200"
              :class="[{error_input: !this.textarea}, {success:this.textarea}]"
              class=textarea
              v-model="textarea"
              placeholder=" Введите описание товара"
          ></textarea>
          <transition name="fade">
            <p
                :class="{error_mess: !this.textarea}"
                v-if="!this.textarea">
              Поле является обязательным
            </p>
          </transition>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Ссылка на изображение товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="[{error_input: !this.isValidUrl}, {success:this.isValidUrl}]"
              type="url"
              v-model="url"
              placeholder="Введите ссылку"
              class="input">
          <transition name="fade">
            <p
                :class="{error_mess: !this.isValidUrl}"
                v-if="!this.isValidUrl">
              Поле является обязательным
            </p>
          </transition>
        </div>

        <div class="prod-form__block">

          <div class="prod-form__label-block">
            <label class="label">Цена товара</label>
            <div class="circle"></div>
          </div>

          <input
              :class="[{error_input: !this.modelNumber}, {success:this.modelNumber}]"
              :type="indicatorChange ? 'number' : 'text'"
              v-model.trim="modelNumber"
              step="1" min="2" max="100000000"
              placeholder="Введите цену"
              @focus="indicatorChange = true"
              @blur="indicatorChange = false"
              class="input"
          >
          <transition name="fade">
            <p
                :class="{error_mess: !this.modelNumber}"
                v-if="!this.modelNumber">
              Поле является обязательным
            </p>
          </transition>

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
import validationForm from "@/components/mixins/validationForm";
export default {
  name: "McvForm",
  mixins:[validationForm]
}
</script>
<style scoped></style>