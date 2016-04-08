import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 当应用实例化的时候，通过建立一个state常量来初始化一个count值。
const state = {
  // When the app starts, count is set to 0
  count: 0
}

const mutations = {
  // 一个mutation接收当前的state作为它的第一个参数
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    state.count = state.count - amount
  }
}

// 我们把state和mutations组合起来作为一个store
export default new Vuex.Store({
  state,
  mutations
})