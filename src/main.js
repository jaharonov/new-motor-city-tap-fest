// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Client from 'shopify-buy'

// import VueImg from 'v-img'

Vue.use(BootstrapVue)
// Vue.use(VueImg)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// const client = Client.buildClient({
//   domain: 'overtaps.myshopify.com',
//   storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0'
// })
