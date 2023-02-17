import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/gloable.css';
import request from "@/utils/request";
// import axios from "axios";
// import VueAxios from 'vue-axios';
import * as echarts from 'echarts';

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
Vue.use(ElementUI,{size:"mini"});
Vue.prototype.request=request
Vue.prototype.$echarts = echarts;
// Vue.use(VueAxios,axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

