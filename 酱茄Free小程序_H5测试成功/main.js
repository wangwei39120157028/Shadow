import Vue from 'vue';
import App from './App';
import axios from 'axios/dist/axios.js';
//import wwyCode from 'components/JS/wwy.js' //注意路径

Vue.config.productionTip = false;
//Vue.prototype.$wwyCode = wwyCode;
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/1' //最主要的一句

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();

