<template>
  <div>
    <tab-bar>
      <tab-bar-item url="/home">
        <template v-slot:item-icon><img src="~assets/icon/home.svg" alt=""/></template>
        <template v-slot:item-icon-active><img alt="" src="~assets/icon/home_active.svg"/></template>
        <template v-slot:item-name><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item url="/category">
        <template v-slot:item-icon><img src="~assets/icon/category.svg" alt=""/></template>
        <template v-slot:item-icon-active><img alt="" src="~assets/icon/category_active.svg"/></template>
        <template v-slot:item-name><div>类别</div></template>
      </tab-bar-item>
      <tab-bar-item url="/cart">
        <template v-slot:item-icon><img src="~assets/icon/cart.svg" alt=""/></template>
        <template v-slot:item-icon-active><img alt="" src="~assets/icon/cart_active.svg"/></template>
        <template v-slot:item-name><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item url="/profile">
        <template v-slot:item-icon><img src="~assets/icon/profile.svg" alt=""/></template>
        <template v-slot:item-icon-active><img alt="" src="~assets/icon/profile_active.svg"/></template>
        <template v-slot:item-name><div>用户</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'TabBarDetails',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
