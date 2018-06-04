// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueRouter from 'vue-router';
import * as config from './config';
import i18n from './i18n';
import VueLazyLoad from 'vue-lazyload';


Vue.config.productionTip = false;
Vue.use(config);
Vue.use(VueLazyLoad,{
    error:'./static/error.png',
    loading:'./static/loading.png'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
