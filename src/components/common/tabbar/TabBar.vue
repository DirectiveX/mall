<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
}
</style>
