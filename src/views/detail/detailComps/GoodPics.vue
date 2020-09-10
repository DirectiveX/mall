<template>
  <div id="good-pic">
    <div class="desc">{{goodDesc}}</div>
    <img class="img" v-for="item in goodPics" :key="item.id" :src="item.image" @load="tryEmitLoad"/>
  </div>
</template>

<script>
export default {
  name: 'GoodPics',
  props: {
    goodDesc: {
      type: String,
      default: ''
    },
    goodPics: {
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
    tryEmitLoad () {
      if(++this.currentIndex == this.goodPics.length){
        this.$emit("imgLoaded")
      }
    }
  }
}
</script>

<style scoped="scoped">
.desc{
  font-size: 14px;
}

.img{
  width: 100%;
}

#good-pic{
  border-bottom: 0.0625rem solid gainsboro;
}
</style>
