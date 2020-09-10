<template>
  <div v-if="Object.keys(info).length !== 0">
    <table>
      <tr v-for="(value,key) in info" :key="value.id">
        <td>{{keyList[key]}}</td>
        <td class="pink">{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParamInfo',
  props: {
    info: {
      type: Object,
      default () {
        return {}
      }
    }
  },
	data () {
		return {
			keyList: {
				"material": "材质",
				"length": "衣长",
				"season": "季节",
				"size": "尺码",
				"style": "风格",
				"fashion": "潮流",
				"address": "厂址",
				"type": "款式"
			}
		}
	}
}
</script>

<style scoped="scoped">
table{
  position: relative;
  margin: 10px auto;
  border-spacing: 0px;
}

td{
  border-bottom:1px solid gainsboro;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 90px;
}

.pink{
  color: var(--main-color,'red');
}
</style>
