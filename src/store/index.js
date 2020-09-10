import Vuex from 'vuex'
import Vue from 'vue'
import {ADD_TO_CART,UN_CHOOSE_ITEM,CHOOSE_ITEM,UN_CHOOSE_ALL,CHOOSE_ALL} from 'common/const.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodList: []
  },
  mutations: {
    addCount (state, item) {
      item.count ++
    },
    initCount (state, item) {
      item.count = 1
      state.goodList.push(item)
    },
    [CHOOSE_ITEM] (state , payload) {
      payload.checked = true
    },
    [UN_CHOOSE_ITEM] (state , payload) {
      payload.checked = false
    },
    [CHOOSE_ALL] (state) {
      state.goodList.forEach(item => item.checked = true)
    },
    [UN_CHOOSE_ALL] (state) {
      state.goodList.forEach(item => item.checked = false)
    }
  },
  actions: {
    [ADD_TO_CART](context , payload){
      return new Promise((resolve) => {
        let it = context.state.goodList.find(item => item.id === payload.id)
        if(undefined == it){
          context.commit('initCount',payload)
          resolve('添加到购物车')
        }
        else{
          context.commit('addCount',it)
          resolve('购物车数量+1')
        }
      })
    }
  }
})

export {
  store
}
