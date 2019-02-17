import Vue from 'vue'

import App from './App.vue'
import router from './router'

import TreeView from '@ll931217/vue-treeview'

Vue.use(TreeView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
