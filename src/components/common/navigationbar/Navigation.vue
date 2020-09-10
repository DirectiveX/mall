<template>
  <div class="navigation">
    <div position="left"><slot name="left"></slot></div>
    <div position="middle"><slot name="middle"></slot></div>
    <div position="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
.navigation {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.navigation div[position="left"],div[position="right"] {
  width: 60px;
}

.navigation div[position="middle"] {
  flex: 1;
}
</style>
