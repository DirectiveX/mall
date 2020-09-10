<template>
  <div id="cart-footer">
    <img class="check-img" v-if="isChecked" @click="unChooseAll" src="~assets/icon/goodcheckmark_active.svg"/>
    <img class="check-img" v-else @click="chooseAll" src="~assets/icon/goodcheckmark.svg"/>
    <span id="choose-all">全选</span>
    <span>{{statement | statementFilter}}</span>
    <div id="go-to-count" @click="goToCount">{{checkedNum | countFilter}}</div>
  </div>
</template>

<script>
import {CHOOSE_ALL,UN_CHOOSE_ALL} from 'common/const.js'

export default {
  name: 'CartFooter',
  computed: {
    isChecked () {
      return this.checkedNum === this.$store.state.goodList.length
    },
    statement () {
      let items = this.$store.state.goodList.filter(item => item.checked)
      return items.length === 0?0:items.reduce((total,item) => total + item.originPrice * item.count,0)
    },
    checkedNum () {
      return this.$store.state.goodList.filter(item => item.checked).length
    }
  },
  methods: {
    chooseAll () {
      this.$store.commit(CHOOSE_ALL)
    },
    unChooseAll () {
      this.$store.commit(UN_CHOOSE_ALL)
    },
    goToCount () {
      if(this.checkedNum === 0){
        this.$toast.showMessage("请先添加物品")
      }
    }
  },
  filters: {
    statementFilter (value) {
      return "合计：￥" + value.toFixed(2)
    },
    countFilter (value) {
      return "去计算("+ value +")"
    }
  }
}
</script>

<style>
#cart-footer {
  background-color: gainsboro;
  line-height: 38px;
  height: 38px;
  font-size: 18px;
}

#choose-all {
  font-size: 15px;
  margin-right: 15px;
}

#go-to-count {
  float: right;
  background-color: orange;
  width: 100px;
  color: white;
  text-align: center;
}
</style>
