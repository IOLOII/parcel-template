import { createStore, createLogger } from 'vuex'
import createPersistedState from "vuex-persistedstate"
// import router from '@/router'
import cookie from 'js-cookie'
const state = {
  // 时效性属性需要在getters中定义对应属性
  count: 0,
  token: '',
  userFlag: '',// 登录用户权限
}

export default createStore({
  state,
  getters: {
    count(state) { return state.count },
    token(state) { return state.token },
    userFlag(state) { return state.userFlag },
  },
  mutations: {
    addCount(state, v) {
      state.count = v
    },
    updateToken(state, token) {
      state.token = token || ''
      cookie.remove('token')
    },
    updateUserFlag(state, flag) {
      // state.userFlag = flag || ''

    },
  },
  actions: {
    loginOut({ commit }) {
      commit('updateToken')
      // router.go('/')
    }
  },
  // modules: {
  // },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'store',
      paths: [...Object.keys(state)]
    }),
    createLogger()
  ],
})
