import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(VueRouter);


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
