import { createApp } from "vue";

import "./index.scss";

import Header from "./components/Header.vue";

export default function placeHeader(el) {
    createApp(Header).mount(el);
}
