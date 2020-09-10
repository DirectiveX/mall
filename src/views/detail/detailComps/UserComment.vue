<template>
  <div class="comment" v-if="Object.keys(commentInfo).length != 0">
    <div>
      <div class="comment-title">用户评价</div>
      <div class="user-info">
        <img :src="commentInfo.headSculpture" />
        <span>{{commentInfo.username}}</span>
      </div>
      <div>{{commentInfo.detailInfo}}</div>
      <div class="clothes-param">{{commentInfo.date}}&nbsp;{{commentInfo.color | colorFilter}}</div>
      <div class="comment-pics">
        <img v-for="item of commentInfo.commentPics" :key="item.id" :src="item.image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComment",
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    colorFilter (color){
      return "颜色：" + color
    }
  }
}
</script>

<style scoped="scoped">
.comment{
  border-top:3px solid gainsboro;
  border-bottom:3px solid gainsboro;
  padding-bottom: 20px;
}

.comment>div{
  width: 95%;
  margin: 0 auto;
  font-size: 14px;
}

.comment-title{
  border-bottom:1px solid gainsboro;
  font-size: 1.125rem;
  height: 44px;
  line-height: 44px;
}

.user-info{
  padding-top: 10px;
  padding-bottom: 10px;
}

.user-info img{
  height: 44px;
  width: 44px;
  border-radius: 100%;
  vertical-align: middle;
}

.user-info span{
  padding-left: 10px;
  font-weight: bold;
  vertical-align: middle;
}

.clothes-param{
  margin-top: 7px;
  color: gainsboro;
}

.comment-pics{
  margin: 10px 0px;
  display: flex;
  justify-content:flex-start;
}

.comment-pics > img{
  height: 80px;
  width: 80px;
  padding-right: 10px;
}
</style>
