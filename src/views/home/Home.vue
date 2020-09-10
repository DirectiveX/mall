<template>
  <div>
    <div id="home-nav">
      <main-navigation title="首页"></main-navigation>
    </div>
    <div v-show="isSticky" :class="{'tab-control-sticky':isSticky}"  style="position:absolute;width:100%;">
      <tab-control ref="tabControl" :items="tabNames" @switchTab='switchTab'/>
    </div>
    <div class="content-body">
      <scroll @pullUp="pullUp" ref="scroll" @scrollCoordinate="showBackTop" :probe-type="3" :needPullUpLoad='true'>
        <home-swiper :banners="banners" ref="homeSwiper"></home-swiper>

        <div v-if="recommend.length !== 0">
          <recommend-view>
            <recommend-item v-for="item in recommend" :src="item.image" :link="item.link" :title="item.title" :key="item.sort"/>
          </recommend-view>
        </div>

        <feature-view/>

        <tab-control ref="tabControl2" :items="tabNames" @switchTab='switchTab'/>
        <item-show-list :goods="currentList"/>
      </scroll>
      <back-to-top @click.native="backTop" v-show="showTopBtn"/>
    </div>
  </div>
</template>

<script>
import MainNavigation from 'components/content/MainNavigation'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/TabControl'
import ItemShowList from 'components/content/item/ItemShowList'

import HomeSwiper from './subcomponets/HomeSwiper'
import RecommendItem from './subcomponets/RecommendItem'
import RecommendView from './subcomponets/RecommendView'
import FeatureView from './subcomponets/FeatureView'
import * as network from 'network/home'

import {debounce} from '@/common/commonUtils.js'
import {backTop} from '@/common/mixin.js'

export default {
  name: 'Home',
  data () {
    return {
      recommend: [],
      banners: [],
      tabNames: ["流行","新款","精选"],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'news': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      type: ['pop','news','sell'],
      currentIndex: 0,
      hasPulled: true
    }
  },
  components: {
    MainNavigation,
    HomeSwiper,
    RecommendItem,
    RecommendView,
    FeatureView,
    TabControl,
    ItemShowList,
    Scroll
  },
  mixins:[backTop],
  created () {
    //bar data
    this.getMutitdata()
    //init data
    this.getTabData(0)
    this.getTabData(1)
    this.getTabData(2)
  },
  activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scrollY
  },
  methods: {
    getTabData (index) {
      let item = this.goods[this.type[index]]
      network.getHomeData(this.type[index],item.page + 1).then(res => {
        if (res.length !== 0){
          item.page ++;
          this.goods[this.type[index]].list.push(...res);
        }
        this.$refs.scroll.finishPullUp()
      })
    },
    getMutitdata () {
      network.getMutitdata().then(res => {
        this.recommend = res.data.recommend.list;
        this.banners = res.data.banner.list;
      })
    },
    switchTab (index) {
      this.currentIndex = index
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    pullUp () {
      this.getTabData (this.currentIndex)
    },
    bannersLoaded () {
      this.stickyHeight = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    currentList () {
      return this.goods[this.type[this.currentIndex]].list
    }
  },
  mounted () {
    // 1.跨域 src资源方式
    // const s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'http://localhost:8092/js/callback.js?callback=sayhello&type=pop&pageNo=1';
    // document.body.appendChild(s);
    // window.sayhello = this.sayhello;
    //2.cros 服务器开启
    //listen imgloaded event,在这挂载防止组件未加载
    let func = debounce(this.$refs.scroll.refresh,100,false)
    this.$bus.$on('imgloaded', () => {
      func();
    })
    this.$refs.homeSwiper.$on('bannersLoaded',this.bannersLoaded)
    this.switchTab (0)
  }
}
</script>

<style scoped="scoped">
.content-body{
  position: relative;
  margin-bottom: 49px;
}

.better-scroll-wrapper{
  height: calc(100vh  - 44px - 49px);
}

.tab-control-sticky{
  position: sticky;
  top: 44px;
  background-color: #FFFFFF;
  z-index: 8;
}
</style>
