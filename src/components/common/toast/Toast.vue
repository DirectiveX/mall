<template>
  <div id="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    showMessage (message = '默认显示', time = 2000) {
      this.message = message
      this.isShow = true
      setTimeout(()=> {
        this.isShow = false
      },time)
    }
  }
}
</script>

<style>
#toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  background-color: rgba(0,0,0,0.6);
  color: #FFFFFF;
  border-radius: 3px;
  padding: 10px 10px;
}
</style>
