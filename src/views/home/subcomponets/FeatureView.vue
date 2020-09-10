<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/feature.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    src: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.feature img{
  width: 100%;
}
</style>
