import Vue from 'vue'
import App from './App.vue'
import store from './store';//added

Vue.config.productionTip = false

new Vue({
  store,//added
  render: h => h(App),
}).$mount('#app')
