import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/gloable.css';
import request from "@/utils/request";

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
Vue.use(ElementUI,{size:"mini"});
Vue.prototype.request=request
import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')