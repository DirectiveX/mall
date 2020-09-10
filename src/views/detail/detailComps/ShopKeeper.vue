<template>
  <div class="shop-keeper">
    <div class="shop-keeper-header">
      <img :src="shopInfo.headSculpture"/>
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-keeper-middle">
      <div class="shop-keeper-middle-left">
        <div class="shop-keeper-sales">
          <div>{{shopInfo.totalSales | salesfilter}}</div>
          <div>总销量</div>
        </div>
        <div class="shop-keeper-goods">
          <div>{{shopInfo.totalGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-keeper-middle-right">
        <table class="score-table">
          <tr>
            <td><span>描述相符</span></td>
            <td><span class="score" :class="{'over-score':isBetter(betterScore.describeScore,shopInfo.describeScore)}">{{shopInfo.describeScore}}</span></td>
            <td><span class="better" :class="{'over-better':isBetter(betterScore.describeScore,shopInfo.describeScore)}">{{isBetter(betterScore.describeScore,shopInfo.describeScore)?'高':'低'}}</span></td>
          </tr>
          <tr>
            <td><span>价格合理</span></td>
            <td><span class="score" :class="{'over-score':isBetter(betterScore.priceScore,shopInfo.priceScore)}">{{shopInfo.priceScore}}</span></td>
            <td><span class="better" :class="{'over-better':isBetter(betterScore.priceScore,shopInfo.priceScore)}">{{isBetter(betterScore.priceScore,shopInfo.priceScore)?'高':'低'}}</span></td>
          </tr>
          <tr>
            <td><span>质量满意</span></td>
            <td><span class="score" :class="{'over-score':isBetter(betterScore.quantityScore,shopInfo.quantityScore)}">{{shopInfo.quantityScore}}</span></td>
            <td><span class="better" :class="{'over-better':isBetter(betterScore.quantityScore,shopInfo.quantityScore)}">{{isBetter(betterScore.quantityScore,shopInfo.quantityScore)?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-keeper-footer">
      <div class="shop-keeper-bottom">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopKeeper',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      betterScore: {
        describeScore: 4.1,
        priceScore: 4.2,
        quantityScore: 4
      }
    }
  },
  filters: {
    salesfilter (val) {
      return (val/10000).toFixed(1) + "万"
    }
  },
  methods: {
    isBetter (base,current) {
      return current > base
    }
  }
}
</script>

<style>
.shop-keeper {
  height: 200px;
  border-bottom: 3px solid #D3D3D3;
  border-top: 3px solid #D3D3D3;
  padding: 0.3125rem;
}

.shop-keeper-header img{
  vertical-align: middle;
  width: 2.5rem;
  height: 40px;
  border-radius: 100%;
  border: 2px solid #D3D3D3;
}

.shop-keeper-header span{
  vertical-align: middle;
  margin-left: 5px;
  font-size: 18px;
}
.shop-keeper-middle{
  overflow: hidden;
}
.shop-keeper-middle-left,.shop-keeper-middle-right{
  float: left;
  width: 50%;
  height: 100px;
  display: flex;
}

.shop-keeper-sales,.shop-keeper-goods{
  flex: 1;
  text-align: center;
  margin: auto 0px;
}

.shop-keeper-sales div,.shop-keeper-goods div{
  padding: 1px;
}

.shop-keeper-goods{
  border-right:1px solid #D3D3D3 ;
}

.score-table{
  margin: auto auto;
}

.score-table td{
  padding: 2px 5px;
}
.score{
  color: green;
}

.better{
  color: white;
  background-color: #008000;
}

.over-score{
  color: red !important;
}

.over-better{
  background-color: red !important;
}

.shop-keeper-footer{
  display: flex;
  align-items: center;
  height: 56px;
}

.shop-keeper-bottom{
  margin: 0 auto;
  background-color: gainsboro;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}
</style>
