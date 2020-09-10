<template>
  <div id="back-to-top">
    <img src="~assets/icon/backToTop.svg"/>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
}
</script>

<style>
#back-to-top{
  position: fixed;
  right: 20px;
  bottom: 60px;
  z-index: 99999;
}

#back-to-top img{
  height: 24px;
  width: 24px;
}
</style>
