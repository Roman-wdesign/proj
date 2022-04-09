<template>
  <div>
    <div class="aselect">
      <div class="selector box" @click="toggle()">

        <div class="label box">
          <span class="box">
            {{ selected }}
          </span>
        </div>

        <div class="arrow box"
             :class="{ expanded : visible }"
        ></div>

        <div
            v-if="visible">
          <ul>
            <li

                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"

            >
              {{ option.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


export default {
  name: "McvDropdown",
  data: () => ({
    visible: false,
    //value: 'default'
  }),
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected:{
      type: String,
      default: ''
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    selectOption(option) {
      // this.value = option.name;
      this.$emit('select', option)
    },
    handleClick(e) {
      //close by clicking outside  dropdown
      const classname = e.target.className;
      if (this.visible && !classname.includes("box")) {
        this.visible = false;
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClick);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleClick);
  }

}
</script>
<style scoped></style>