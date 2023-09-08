import Vue from 'vue';
import Vuex from 'vuex';
import counterOp from './counter';
import userOp from './user';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counterOp,
        userOp,
    },
});
