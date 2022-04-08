<template>
  <div>
    <div class="aselect" :data-value="value" :data-list="options">
      <div class="selector box" @click="toggle()">
        <div class="label box">
          <span class="box">{{ value }}</span>
        </div>
        <div class="arrow box" :class="{ expanded : visible }"></div>
        <div :class="{ hidden : !visible, visible }">
          <ul>
            <li :class="{ current : option === value }" :key="index" v-for="(option, index) in options"
                @click="selectOption(option)">{{ option.name }}
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
    value: 'default'
  }),
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    selectOption(option) {
      this.value = option.name;
    },
    handleClick(e){
      //close by clicking outside  dropdown
      const classname = e.target.className;
      if(this.visible && !classname.includes("box")){
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