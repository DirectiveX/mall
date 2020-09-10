<template>
  <div>
    <main-navigation :title="$store.state.goodList.length | titleFilter"></main-navigation>
    <scroll ref="scroll" class="better-scroll-wrap">
      <good-info @imgloaded="imgloaded" v-for="item in $store.state.goodList" :key="item.id" :good="item"></good-info>
    </scroll>
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import MainNavigation from 'components/content/MainNavigation'
import Scroll from 'components/common/scroll/Scroll'

import GoodInfo from './subcomponents/GoodInfo'
import CartFooter from './subcomponents/CartFooter'

export default {
  name: 'Cart',
  components: {
    MainNavigation,
    GoodInfo,
    Scroll,
    CartFooter
  },
  data () {
    return {
      imgloadednum: 0
    }
  },
  methods: {
    imgloaded () {
      this.imgloadednum ++;
      if (this.imgloadednum === this.$store.state.goodList.length){
        this.$refs.scroll.refresh()
      }
    }
  },
  filters: {
    titleFilter (value) {
      return "购物车" + (value === 0?"":"("+value+")" )
    }
  }
}
</script>

<style>
.better-scroll-wrap{
  height: calc(100vh  - 44px - 49px - 38px);
}
</style>
