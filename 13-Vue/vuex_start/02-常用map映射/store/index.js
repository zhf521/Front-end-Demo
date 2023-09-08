import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 准备actions——用于响应组件中的动作（获取后端API数据或者进行业务逻辑处理）
const actions = {
    // add(context, value) {
    //     // console.log(context, value);
    //     // console.log('actions中的add被调用了');
    //     context.commit('ADD', value);
    // },
    // sub(context, value) {
    //     context.commit('SUB', value);
    // },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value);
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value);
        }, 500);
    },
};

// 准备mutations——用于操作数据（state)
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    SUB(state, value) {
        state.sum -= value;
    },
};

// 准备state——用于存储数据
const state = {
    sum: 0,
    name:'zhf'
};

const getters = {
    cSum(state) {
        return state.sum * 10;
    },
};

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
