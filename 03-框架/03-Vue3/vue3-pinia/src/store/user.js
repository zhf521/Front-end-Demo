import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';
import '../mock/index';
import { ref } from 'vue';
import axios from 'axios';
export const useUserStore = defineStore('user', () => {
    const userList = ref([{ id: 1, name: 'jack', age: 20 }]);
    const add_user = (user) => {
        user.id = nanoid();
        userList.value.push(user);
    };
    const add_user_by_server = async () => {
        const res = await axios.get('/user');
        add_user(res.data);
    };
    return {
        userList,
        add_user,
        add_user_by_server,
    };
});
