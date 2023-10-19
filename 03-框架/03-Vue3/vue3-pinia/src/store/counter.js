import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    // 数据（state）
    const sum = ref(0);
    // getters
    const cSum = computed(() => {
        return sum.value * 10;
    });
    // 修改数据的方法（action+mutations）
    const add = (n) => {
        sum.value += n;
    };
    const sub = (n) => {
        sum.value -= n;
    };
    const addOdd = (n) => {
        if (sum.value % 2) {
            add(n);
        }
    };
    const addWait = (n) => {
        setTimeout(() => {
            add(n);
        }, 2000);
    };
    return {
        sum,
        cSum,
        add,
        sub,
        addOdd,
        addWait,
    };
});
