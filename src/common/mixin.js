import {debounce} from '@/common/commonUtils.js'
import BackToTop from 'components/content/BackToTop'

export const mixin = {
  data () {
    return {
      itemFunc : null
    }
  },
  mounted () {
    let func = debounce(this.$refs.scroll.refresh,100,false)
    this.itemFunc = () => {func()}
    this.$bus.$on('imgloaded', this.itemFunc)
  }
}

export const backTop = {
  components: {
    BackToTop
  },
  data () {
    return {
      scrollY: 0,
      showTopBtn: false,
      isSticky: false,
      stickyHeight: 0
    }
  },
  methods: {
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 600)
    },
    showBackTop (x , y) {
      if ( y < -500) this.showTopBtn = true;
      else this.showTopBtn = false;

      if (y <= -this.stickyHeight) {
        this.isSticky = true
      }else {
        this.isSticky = false
      }
    }
  }
}
