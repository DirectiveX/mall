<template>
  <div id="good-info">
    <div class="left-info">
      <img class="check-img" v-if="good.checked" @click="unChooseItem" src="~assets/icon/goodcheckmark_active.svg"/>
      <img class="check-img" v-else @click="chooseItem" src="~assets/icon/goodcheckmark.svg"/>
      <img @load="imgloaded" class="good-img" :src="good.image"/>
    </div>
    <div class="right-info">
      <h3>{{good.title}}</h3>
      <h5>{{good.desc}}</h5>
      <span class="right-info-currency">{{good.originPrice | formatCurrency}}</span>
      <span class="right-info-number">{{good.count  | formatCount}}</span>
    </div>
  </div>
</template>

<script>
import {CHOOSE_ITEM,UN_CHOOSE_ITEM} from 'common/const.js'
export default {
  name: 'GoodInfo',
  props: {
    good : {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    formatCurrency (value) {
      return '￥' + value.toFixed(2)
    },
    formatCount (value) {
      return 'x' + value
    }
  },
  methods: {
    imgloaded () {
      this.$emit('imgloaded')
    },
    chooseItem () {
      this.$store.commit(CHOOSE_ITEM,this.good)
    },
    unChooseItem () {
      this.$store.commit(UN_CHOOSE_ITEM,this.good)
    }
  }
}
</script>

<style>
#good-info {
  height: 120px;
  position: relative;
  border-bottom: 1px solid gainsboro;
}

.check-img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}

.good-img {
  height: 100px;
  width: 80px;
  border-radius: 10px;
  vertical-align: middle;
  margin-left: 5px;
}

.left-info {
  float: left;
  line-height: 120px;
}

.right-info {
  float: left;
  margin-left: 5px;
}

.right-info > h3 {
  margin: 10px 0px;
}

.right-info > h5 {
  margin: 10px 0px;
  color: gainsboro;
  font-weight: normal;
}

.right-info-currency {
  position: absolute;
  bottom: 10px;
  color: orange;
}

.right-info-number {
  position: absolute;
  right: 20px;
  bottom: 10px;
}
</style>
