require('./bootstrap');
//import Vue from 'vue/dist/vue';

import { createApp, h } from "vue"
//import App from "./App.vue"

//import * as Vue from 'vue';
//window.Vue = require('vue');
 
import App from './App.vue';

import moment from 'moment';
import * as VueRouter from 'vue-router';
import * as VueAxios from 'vue-axios';

import axios from 'axios';
import {routes} from './routes';
//import {h} from 'vue';

const app = createApp(App);

app.provide("moment", moment);

// const app=new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app');
 
app.use(VueRouter);
app.use(VueAxios, axios);

app.mount("#app");
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
// const app = new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// });