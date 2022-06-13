import Main from "@/pages/Main";
import {createRouter, createWebHistory} from 'vue-router';
import ItemForms from "@/components/ItemForms";

const routes = [
    { path: '/', component: Main },
    { path: '/addItems', component: ItemForms },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;