<template>
  <div class="base-info" v-if="Object.keys(goodInfo).length !== 0">
    <p id="base-info-title">{{goodInfo.title}}</p>
    <div>
      <span id="base-info-price">{{goodInfo.currentPrice | moneyPrefix}}</span>
      <span v-if="isFavorable" id="base-info-origin-price">{{goodInfo.originPrice | moneyPrefix}}</span>
      <div v-if="isFavorable" id="base-info-favorable" :style="{'background-color':goodInfo.bgColor}">{{goodInfo.favourable}}</div>
    </div>
    <div class="base-info-bar">
      <div class="base-info-bar-item item-left">{{goodInfo.collect | salesFormatter}}</div>
      <div class="base-info-bar-item item-middle">{{goodInfo.salesVol | collectFormatter}}</div>
      <div class="base-info-bar-item item-right">{{goodInfo.policy}}</div>
    </div>
    <div class="base-info-safeguards">
      <div class="base-info-safeguards-item" v-for="item in goodInfo.safeguards" :key="item.uuid">
        <img src="~assets/icon/check_mark.svg" />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'BaseInfo',
  props: {
    goodInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    moneyPrefix(money){
      return '￥' + money
    },
    collectFormatter(collect){
      return '收藏 ' + collect + ' 人'
    },
    salesFormatter(sales){
      return '销量 ' + sales
    }
  },
  computed: {
    isFavorable () {
      return this.goodInfo.currentPrice < this.goodInfo.originPrice
    }
  }
}
</script>

<style>
.base-info{

}

#base-info-title{
  font-size: 20px;
  margin: 10px 0px;
}

#base-info-price{
  font-size: 16px;
  color: var(--main-color,'pink');
}

#base-info-origin-price{
  font-size: 6px;
  color: gainsboro;
  text-decoration: line-through;
}

#base-info-favorable{
  display: inline-block;
  /* background-color: var(--main-color,'pink'); */
  color: white;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  border-radius: 5px;
  width: 44px;
  height: 1.125rem;
  position: relative;
  bottom: 5px;
  left: 2px;
}

.base-info-bar{
  display: flex;
  padding: 6px 0px;
  box-shadow: 0 1px 1px gainsboro;
}

.base-info-bar-item{
  flex: 1;
  font-size: 10px;
  color: gainsboro;
}

.item-right{
  text-align: right;
}

.item-middle{
  text-align: center;
}

.item-left{
  text-align: left;
}

.base-info-safeguards{
  display: flex;
  padding: 6px 0px;
  font-size: 16px;
  justify-content: space-between;
  line-height: 18px;
}

.base-info-safeguards-item img{
  vertical-align: middle;
  width: 14px;
}

.base-info-safeguards-item span{
  vertical-align: middle;
  font-size: 14px;
}
</style>
