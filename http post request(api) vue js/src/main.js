import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

//filters code
// Vue.filter("makeUppercase",function(value){
//   return value.toUpperCase();

// });
// Vue.filter("contentSnippet",function(value){
//   return value.slice(2, 70);

// });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
