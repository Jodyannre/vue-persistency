import { defineStore } from "pinia";



export const useExample = defineStore('example', {
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        init() {
            const initCount = localStorage.getItem('count')
            if (initCount) {
                this.count = parseInt(initCount)
            }
        },
        increment(num: number) {
            this.count += num
            localStorage.setItem('count', this.count.toString())
        }
    },
    /*persist: {
        storage: localStorage,
        pick: ['count']
    },*/
});