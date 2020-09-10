<template>
  <div class="better-scroll-wrapper" ref="betterScroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    needPullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bs:"",
      scrollY: 0
    }
  },
  computed: {
  },
  mounted () {
    this.initBS()
  },
  methods: {
    initBS () {
      this.bs = new BScroll(this.$refs.betterScroll,{probeType:this.probeType,pullUpLoad:this.needPullUpLoad,click:true})
      if (this.needPullUpLoad){
        this.bs.on('pullingUp',this.pullUpLoad)
      }
      if (this.probeType != 0){
        this.bs.on('scroll',this.emitCoordinate)
      }
    },
    pullUpLoad () {
      this.$emit('pullUp')
    },
    finishPullUp () {
      this.bs.finishPullUp()
    },
    refresh () {
      this.bs.refresh()
    },
    scrollTo( x, y, time) {
      this.bs.scrollTo(x,y,time)
    },
    emitCoordinate () {
      this.scrollY = this.bs.y;
      this.$emit('scrollCoordinate',this.bs.x,this.bs.y)
    }
  }
}
</script>

<style>
.better-scroll-wrapper{
  overflow: hidden;
}
</style>
