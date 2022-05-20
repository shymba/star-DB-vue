import Main from "@/pages/Main";
import {createRouter, createWebHistory} from 'vue-router';
import RandomPlanet from "@/pages/RandomPlanet";
import ItemList from "@/components/ItemList";

const routes = [
    { path: '/', component: Main },
    { path: '/random', component: RandomPlanet },
    { path: '/people', component: ItemList },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;