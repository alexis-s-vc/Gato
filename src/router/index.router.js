import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
		 path: "/:catchAll(.*)",
		redirect: { name: "introduccion" },
        },
        {
            path: '/introduccion',
            name: 'introduccion',
            component: () => import('../components/introduccion.vue'),
        },
        {
            path: '/pvp',
            name: 'TicTacToe',
            component: () => import('../components/TicTacToe.vue'),
        },
        {
            path: '/vpc',
            name: 'pc',
            component: () => import('../components/pc.vue'),
        },
    ]
})

export default router
