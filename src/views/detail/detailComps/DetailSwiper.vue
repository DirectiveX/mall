<template>
	<div v-if="details.length !== 0">
		<swiper @loaded="changeStatus" ref="swiper">
			<swiper-item v-for="(item,index) in details" :key="index" >
				<img :src="item.image" alt=""/>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/SwiperUtil'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    details: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      status: false
    }
  },
  watch: {
    details (){
      if(this.status){
        this.$refs.swiper.refresh()
      }
    }
  },
  methods: {
    changeStatus () {
      this.status = true
      this.$emit('imgloadeds')
    }
  }
}
</script>

<style>
</style>
