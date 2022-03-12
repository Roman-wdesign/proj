<template>
  <div>
    <div class="aselect" :data-value="value" :data-list="list">
      <div class="selector box" @click="toggle()">
        <div class="label box">
          <span class="box">{{ value }}</span>
        </div>
        <div class="arrow box" :class="{ expanded : visible }"></div>
        <div :class="{ hidden : !visible, visible }">
          <ul>
            <li :class="{ current : item === value }" :key="item" v-for="item in list" @click="select(item)">{{ item }}</li>
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
    list: ['Action', 'Action_1', 'Action_2'],
    visible: false,
    value:'По умолчанию',

  }),
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
    handleClick(e){
      const classname = e.target.className;
      if(this.visible && !classname.includes("box")){
        this.visible = false;
      }
    }
  },
  created () {
    window.addEventListener('click', this.handleClick);
  },
  destroyed () {
    window.removeEventListener('click', this.handleClick);
  },
}
</script>
<style scoped></style>