<template>
  <div id="main-show-module">
    <item-show :item="item" v-for="(item,index) in goods" :key="index"/>
  </div>
</template>

<script>
import ItemShow from './ItemShow'

export default {
  name: 'ItemShowList',
  props: {
    goods: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    ItemShow
  }
}
</script>

<style>
#main-show-module{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
