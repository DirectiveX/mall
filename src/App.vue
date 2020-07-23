<template>
  <div id="app">
    <router-view></router-view>
		<TabBarDetails></TabBarDetails>
  </div>
</template>

<script>
import TabBarDetails from 'components/content/TabBarDetails'

export default {
  name: 'App',
  components: {
		TabBarDetails
  }
}
</script>

<style>
@import url("assets/css/normalize.css");
@import url("assets/css/base.css");
</style>
