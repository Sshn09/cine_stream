import Vue from 'vue';
import App from './App.vue';
import AppRouter from "./router";

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  render: h => h(App),
}).
$mount('#app');
