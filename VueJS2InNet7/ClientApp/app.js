import Vue from 'vue';
import 'babel-polyfill';
import router from './router/index';
import store from './store';
import { sync } from 'vuex-router-sync';
import App from 'views/app-root';
//require('./css/site.css');
//require('./css/animate.css');

import './globalUse';
import './globalComponents';

sync(store, router);

const app = new Vue({
    store,
    router,
    ...App
});

export {
    app,
    router,
    store
};