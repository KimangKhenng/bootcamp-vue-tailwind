import { createRouter, createWebHistory } from "vue-router";

import Home from "@/page/Home.vue";
import Product from "./page/Product.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/products/:id', component: Product }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router