export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
        SUB(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
    },
    getters: {
        cSum(state) {
            return state.sum * 10;
        },
    },
};
