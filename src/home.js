import Vue from 'vue';
import Wedding from './Wedding';
import vuetify from './plugins/vuetify';
// import router from './router';

Vue.config.productionTip = false

new Vue({
  vuetify,
//   router,
  render: h => h(Wedding)
}).$mount('#app');
