import Vue from 'vue';
import Vuex from 'vuex';
import Vn from '../language/vn.json';
import En from '../language/en.json';
Vue.use(Vuex);

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER';

// STATE
const state = {
    userId: parseInt(userId),
    userName: userName,
    accessToken: accessToken,
    lang: Vn,
}

// MUTATIONS
const mutations = {
    increment(state) {
        // mutate state
        let locale = localStorage.getItem('locale');
        if (locale != null) {
            switch (locale) {
                case 'viVN':
                    state.lang = Vn;
                    break;
                case 'enUS':
                    state.lang = En;
                    break;
                default:
                    state.lang = Vn;
            }
        };
    }
}

// ACTIONS
const actions = ({
    setCounter({ commit }, obj) {
        commit(MAIN_SET_COUNTER, obj);
    },
});

export default new Vuex.Store({
    state,
    mutations,
    actions
})