<template>
  <li class="swiper-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style>
.swiper-item {
  list-style: none;
  z-index: -1;
  width: 100%;
  box-sizing: border-box;
  float: left;
}

.swiper-item img {
  height: var(--swiper-height,250px);
  width: 100%;
}
</style>
