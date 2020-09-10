<template>
  <router-link :to="url" tag="div" class="tab-bar-item">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="{'color':isActive?color:''}"><slot name="item-name"></slot></div>
  </router-link>
</template>

<script>
export default {
  name: 'TabBarItem',
	props: {
		url: String,
    color: {
      type: String,
      default: 'red'
    }
	},
  computed: {
    isActive () {
      return this.url.indexOf(this.$route.path) === 0
    }
  }
}
</script>

<style>
.tab-bar-item {
  text-align: center;
  height: 49px;
  flex: 1;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: bottom;
}
</style>
