<template>
  <div class="tab-bar-item" :to="url">
	<!-- <router-link :to="url" tag="div" class="tab-bar-item"> -->
		<slot v-if="true" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
    <slot name="item-name"></slot>
  <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
	props: {
		url: String
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
}

.tab-bar-item div {

}
</style>
