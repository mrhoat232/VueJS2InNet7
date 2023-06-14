import Vue from 'vue';
import store from './store';

const EventBus = new Vue();
Object.defineProperties(Vue.prototype,
    {
        $bus: {
            get: function () {
                return EventBus;
            }
        }
    });

require('./css/site.css');

//#region Axios
import axios from 'axios';
var options = {
    headers: {
        "Authorization": "Bearer " + store.state.accessToken,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Expires": "-1"
    }
};
const axiosInstant = axios.create(options);
Vue.prototype.$http = axiosInstant;
//#endregion

//#region Vuelidate
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
//#endregion

//#region Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
var toastOption = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

Vue.use(Toast, toastOption);
//#endregion

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);