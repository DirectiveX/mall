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

  background-color: lightgrey;
  box-shadow: 0px -3px 1px rgba(239, 239, 239, 0.8);
}
</style>
