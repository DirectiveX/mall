<template>
  <div class="paramsList">
    <div v-for="(item,index) in list" :key="index" @click="choose(index)" :class="{'param-choosed':currentIndex === index}">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParamsList',
  props: {
    list: {
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
    choose (index) {
      this.currentIndex = index
			this.$bus.$emit('chooseSection',index)
    },
    changeIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
.paramsList{
  display: flex;
  text-align: center;
}

.paramsList div{
  font-size: 14px;
  flex: 1;
}

.param-choosed{
  color: var(--main-color,red) !important;
}
</style>
