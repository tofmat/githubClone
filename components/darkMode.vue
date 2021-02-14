<template>
  <div>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round" @click="invert()"></span>
      </label>
  </div>
</template>

<script>
export default {
  data() {
    return{
      theme: '',
      darkMode: false,
    }
  },
  methods: {
    invert () {
      // this.darkMode = !this.darkMode
      this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme); // stores theme value on local storage
    }
  },
  computed: {

  
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--checkedCursor);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--checkedCursor);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>