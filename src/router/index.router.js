import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
		 path: "/:catchAll(.*)",
		redirect: { name: "TicTacToe" },
        },
        {
            path: '/',
            name: 'TicTacToe',
            component: () => import('../components/TicTacToe.vue'),
        },
    ]
})

export default router
