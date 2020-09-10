<template>
  <div id='tab-control'>
    <div v-for="(item,index) in items" :key="index" id='tab-control-item' @click="changeIndex(index,$event)" :class="{'item-active':currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex (index) {
      this.currentIndex = index;
      this.$emit('switchTab',index);
    }
  }
}
</script>

<style>
#tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
}

#tab-control-item{
  color: black;
  flex: 1;
}

.item-active span{
  color: var(--main-color,red) !important;
  border-bottom: 3px solid var(--main-color,red);
  padding: 4px;
}
</style>
