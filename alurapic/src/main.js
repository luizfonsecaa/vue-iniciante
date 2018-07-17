// Import
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

// Register
Vue.use(VueResource);
Vue.use(VueRouter);

//criar um roteador com base nas minhas rotas com base no vie router
const router = new VueRouter({ routes });
// const router = new VueRouter({
//   router: router
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
