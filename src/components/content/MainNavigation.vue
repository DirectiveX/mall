<template>
  <div id="main-navigation">
    <navigation>
      <template v-slot:middle>
        <h2>{{title}}</h2>
      </template>
    </navigation>
  </div>
</template>

<script>
import Navigation from 'components/common/navigationbar/Navigation'

export default {
  name: 'HomeNavigation',
  components: {
    Navigation
  },
	props: {
		title: String
	}
}
</script>

<style>
#main-navigation {
  box-shadow: 0px 3px 1px var(--main-color-rgba);
  background-color: var(--main-color);
  color: white;
}

#main-navigation h2 {
  margin: 0 auto;
}
</style>
