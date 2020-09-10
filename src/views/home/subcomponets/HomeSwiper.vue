<template>
	<div v-if="banners.length !== 0">
		<swiper>
			<swiper-item v-for="(item,index) in banners" :key="index">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="imgLoaded"/>
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/SwiperUtil'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isload: false
    }
  },
  methods: {
    imgLoaded () {
      if(!this.isload){
        this.$emit('bannersLoaded')
        this.isload = true
      }
    }
  }
}
</script>

<style>
</style>
