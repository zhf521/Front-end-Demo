import { nanoid } from 'nanoid';
import '../mock/index';
import axios from 'axios';

export default {
    namespaced: true,
    actions: {
        async addUserByServer(context) {
            const res = await axios.get('/user');
            // console.log(res.data);
            context.commit('ADD_USER', res.data);
        },
    },
    mutations: {
        ADD_USER(state, value) {
            value.id = nanoid();
            state.userList.push(value);
        },
    },
    state: {
        userList: [
            { id: 1, name: 'jack', age: 20 },
            { id: 2, name: 'tom', age: 22 },
        ],
    },
    getters: {
        cSum(state) {
            return state.sum * 10;
        },
    },
};
