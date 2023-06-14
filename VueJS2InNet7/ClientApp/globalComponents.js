import Vue from 'vue';

import NnModal from './views/shared/components/nn-modal';
Vue.component('nn-modal', NnModal);

import NnModalDialog from './views/shared/components/nn-modal-dialog';
Vue.component('nn-modal-dialog', NnModalDialog);
import NnNotFound from './views/shared/components/nn-not-found';
Vue.component('nn-not-found', NnNotFound);

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading);

import DateRange from './views/shared/components/nn-date-range';
Vue.component('nn-date-range', DateRange);
import DateSingle from './views/shared/components/nn-date-single';
Vue.component('nn-date-single', DateSingle);

import Pager from './views/shared/components/nn-pager.vue';
Vue.component('nn-pager', Pager);