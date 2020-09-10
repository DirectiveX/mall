<template>
  <div class="detail-nav-div">
    <navigation>
      <template v-slot:left="">
        <div @click="goBack">
          <img src="~assets/icon/return.svg"/>
        </div>
      </template>
      <template v-slot:middle="">
        <paramsList ref="param" :list="listHeader"></paramsList>
      </template>
    </navigation>
  </div>
</template>

<script>
import Navigation from 'components/common/navigationbar/Navigation'
import ParamsList from 'components/common/paramlist/ParamsList'

export default {
  name: 'DetailNav',
  components: {
    Navigation,
    ParamsList
  },
  data () {
    return {
      listHeader: ['商品','参数','评论','推荐']
    }
  },
  methods: {
    goBack () {
      this.$router.back();
    },
    changeIndex (index) {
      this.$refs.param.changeIndex(index)
    }
  }
}
</script>

<style>
.detail-nav-div {
  box-shadow: 0 3px 1px #EEEEEE;
}
</style>
