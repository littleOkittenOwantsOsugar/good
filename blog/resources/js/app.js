require('./bootstrap');

import { createApp, h } from "vue"
 
import App from './App.vue';

import moment from 'moment';
import * as VueRouter from 'vue-router';
import * as VueAxios from 'vue-axios';

import axios from 'axios';
import {routes} from './routes';

const app = createApp(App);

app.provide("moment", moment);
 
const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
});

app.use(router)
app.use(VueAxios, axios);

app.mount('#app')