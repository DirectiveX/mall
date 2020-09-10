<template>
  <div id="details">
    <detail-nav ref="detailNav"/>
    <scroll @scrollCoordinate="watchY" :probeType="3" ref="scroll" class="detail-scroll-content">
      <detail-swiper ref="detail" @imgloadeds="setTopYs" :details="detailPics"></detail-swiper>
      <base-info :goodInfo="goodInfo"></base-info>
      <shop-keeper :shopInfo="shopInfo"></shop-keeper>
      <good-pics @imgLoaded="refresh" :goodDesc="goodDesc" :goodPics="goodPics"></good-pics>
      <params ref="params" :info="paramInfo"></params>
      <user-comment ref="comment" :commentInfo="commentInfo"></user-comment>
      <item-show-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-footer @addToCart="addToCart"></detail-footer>
    <back-to-top @click.native="backTop" v-show="showTopBtn"/>
  </div>
</template>

<script>
import DetailNav from './detailComps/DetailNav'
import DetailSwiper from './detailComps/DetailSwiper'
import BaseInfo from './detailComps/BaseInfo'
import ShopKeeper from './detailComps/ShopKeeper'
import GoodPics from './detailComps/GoodPics'
import Params from './detailComps/ParamInfo'
import UserComment from './detailComps/UserComment'
import DetailFooter from './detailComps/DetailFooter'
import ItemShowList from 'components/content/item/ItemShowList'
import Scroll from 'components/common/scroll/Scroll'

import {getDetailData,ShopInfo,GoodInfo,ParamInfo} from 'network/detail.js'
import {getHomeData} from 'network/home.js'
import {debounce} from '@/common/commonUtils.js'
import {mixin,backTop} from '@/common/mixin.js'
import {ADD_TO_CART} from 'common/const.js'

export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo,
    ShopKeeper,
    GoodPics,
    Params,
    UserComment,
    ItemShowList,
    Scroll,
    DetailFooter
  },
  data () {
    return {
      id: '',
      detailPics: [],
      goodInfo: {},
      shopInfo: {},
      goodDesc: '',
      goodPics: [],
      paramInfo: {},
      recommends: [],
      commentInfo: {},
      topYs: [0],
      setTop: null,
      currentIndex: 0
    }
  },
  created () {
    this.preData()
  },
  destroyed() {
    this.$bus.$off('imgloaded',this.itemFunc)
  },
  mixins:[mixin,backTop],
  methods: {
    preData () {
      this.id = this.$route.params.id
      getDetailData(this.$route.params.id)
      .then(res => {
        this.detailPics = res.detailPics;
        this.shopInfo = new ShopInfo(res);
        this.goodInfo = new GoodInfo(res);
        this.goodDesc = res.description;
        this.goodPics = res.descriptionPics;
        this.paramInfo = new ParamInfo(res);
        let comments = res.comment;
        if(comments != undefined && comments.length != 0) this.commentInfo = comments[0]
      })
      getHomeData('pop','1').then(res => {
        if (res.length !== 0){
          this.recommends = res
        }
        this.$refs.scroll.finishPullUp()
      })

      this.setTop = debounce(() => {
          this.topYs = []
          this.topYs.push(0)
          this.topYs.push(this.$refs.params.$el.offsetTop - 44)
          this.topYs.push(this.$refs.comment.$el.offsetTop - 44)
          this.topYs.push(this.$refs.recommend.$el.offsetTop - 44)
      },100,false)
    },
    addToCart () {
      let goodInfo = {}
      goodInfo.originPrice = this.goodInfo.originPrice
      goodInfo.title = this.goodInfo.title
      goodInfo.desc = this.goodDesc
      goodInfo.id = this.id
      goodInfo.checked = false
      goodInfo.image = this.detailPics[0].image
      this.$store.dispatch(ADD_TO_CART,goodInfo).then(res => this.$toast.showMessage(res))
    },
    setTopYs () {
      this.setTop()
    },
    refresh () {
      this.$refs.scroll.refresh()
    },
    bindChooseScroll () {
      this.$bus.$on('chooseSection',(index) => {
        this.currentIndex = index
        this.$refs.scroll.scrollTo(0,-this.topYs[index],500)
      })
    },
    scrollToNum(index){
      this.$refs.detailNav.changeIndex(index)
    },
    watchY (x, y) {
      if(-y < this.topYs[1]){
        if(this.currentIndex != 0){
          this.currentIndex = 0;
          this.scrollToNum(0)
        }
      }
      else if(-y < this.topYs[2]){
        if(this.currentIndex != 1){
          this.currentIndex = 1;
          this.scrollToNum(1)
        }
      }
      else if(-y < this.topYs[3]){
        if(this.currentIndex != 2){
          this.currentIndex = 2;
          this.scrollToNum(2)
        }
      }
      else{
        if(this.currentIndex != 3){
          this.currentIndex = 3;
          this.scrollToNum(3)
        }
      }

      this.showBackTop(x, y);
    }
  },
  mounted () {
    this.bindChooseScroll()
  },
  watch: {
    $route (){
      this.preData()
      this.refresh()
      this.$refs.scroll.scrollTo(0,0,0)
    }
  }
}
</script>

<style>
#details{
  z-index: 99999;
  position: relative;
  background-color: #fff;
  height: 100vh;
}

.detail-scroll-content{
  height: calc(100% - (44px + 49px));
}
</style>
