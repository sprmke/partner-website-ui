import Vue from "vue";
import App from "@/app/app.vue";;
import router from "@/app/routes/router";
import store from "@/app/stores/store";
import "@/registerServiceWorker";

// axios
import axios from 'axios'

// directives
import Directives from '@/app/directives/directives';

// filters
import Filters from '@/app/filters/filters';
import Vue2Filters from 'vue2-filters';

// styles
import './app/styles/main.scss';

// use
Vue.use(axios);
Vue.use(Filters);
Vue.use(Vue2Filters);
Vue.use(Directives);

Vue.config.productionTip = false;

// set page title based on route meta title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
