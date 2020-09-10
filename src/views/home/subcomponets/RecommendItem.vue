<template>
  <div class="home-recommend-item" ref="recommendItem">
    <a :href="link">
      <div><img :src="src"/></div>
      <div>{{title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RecommendItem',
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
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
.home-recommend-item {
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 10px solid #EEEEEE;
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.home-recommend-item img{
  width: 80%;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
}
</style>
