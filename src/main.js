import Vue from 'vue';
// import App from './App.vue'
import Social from './Social';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Social)
}).$mount('#app')
