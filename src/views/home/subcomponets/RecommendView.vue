<template>
  <div id="home-recommend-view" ref="recommendView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  mounted () {
    let nums = this.$children.length
    let width = this.$refs.recommendView.clientWidth
    let picWidth = width/nums
    for (let item of this.$refs.recommendView.children) {
      item.style.width = picWidth + 'px'
    }
  }
}
</script>

<style>
#home-recommend-view {
  display: flex;
}
</style>
