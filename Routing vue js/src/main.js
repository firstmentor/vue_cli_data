import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)




const router = new VueRouter({
  Routes

});




Vue.config.productionTip = false

new Vue({
  router,	
  render: h => h(App)
  
}).$mount('#app')
