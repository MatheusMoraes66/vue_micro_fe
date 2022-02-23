import { createApp } from "vue";
import { createStore } from "vuex"
import router from "./router/index"

import "./index.scss";

import App from "./App.vue";

const store = createStore({
    state() {
        return {
            count: 1,
        };
    },
    mutations: {
        addOne(state) {
            console.log("addOne");
            state.count++;
        }
    }
})

createApp(App).use(router).use(store).mount("#app");
