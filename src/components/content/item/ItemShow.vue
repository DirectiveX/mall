<template>
  <div class="show-item" @click="showGoodInfo (item.id)">
    <!-- <img v-lazy="item.image" @load="emitLoadInfo"/> -->
    <img v-lazy="item.image" @load="emitLoadInfo"/>
    <div>
      <p>{{item.name}}</p>
      <span class="item-price">{{item.price}}</span>
      <span class="item-collect">{{item.number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemShow',
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    emitLoadInfo () {
      this.$bus.$emit("imgloaded")
    },
		showGoodInfo (id) {
      this.$router.push({name:'detail',params: {id}})
		}
  }
}
</script>

<style>
.show-item{
  text-align: center;
  width: 48%;
}

.show-item img{
  width: 100%;
  height: 120px;
  border-radius: 5px;
}

.item-price{
  padding: 0px 8px;
  color: var(--main-color,black);
}

.item-collect{
}

.item-collect::before{
  content: "";
  width: 14px;
  height: 14px;
  margin-right: 2px;
  display: inline-block;
  background: url("~assets/icon/collect.png");
  background-size:cover;
}

p{
  margin: 5px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
