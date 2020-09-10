<template>
  <div id="detail-footer">
    <div>
      <div>
        <img src="~assets/icon/custom_service.svg"/>
        <span class="block">客服</span>
      </div>
      <div>
        <img src="~assets/icon/store.svg"/>
        <span class="block">店铺</span>
      </div>
      <div>
        <img src="~assets/icon/check_mark.svg"/>
        <span class="block">收藏</span>
      </div>
    </div>
    <div id="right-control">
      <div id="cart" @click="addToCart">
        <span>加入购物车</span>
      </div>
      <div id="buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFooter",
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped="scoped">
#detail-footer {
  height: 49px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
}

#detail-footer > div{
  flex: 1;
  display: flex;
  text-align: center;
}

#detail-footer > div >  div{
  flex: 1;
}

#right-control {
  padding: 5px 10px;
}

#detail-footer img{
  height: 1.5rem;
  width: 1.5rem;
  margin-top: 2px;
}

.block {
  display: block;
}

#cart span,#buy span{
  line-height: 39px;
	font-size: 15px;
}

#cart{
  background-color: yellow;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

#buy{
  background-color: var(--main-color,'pink');
  color: #FFFFFF;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>
