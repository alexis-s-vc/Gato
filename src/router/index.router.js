import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
		 path: "/:catchAll(.*)",
		redirect: { name: "Home" },
        },
        {
            path: '/tic-tac-toe',
            name: 'TicTacToe',
            component: () => import('../components/TicTacToe.vue'),
        },
        {
            path: '/',
            name: 'Home',
            component: () => {},
        },
    ]
})

export default router
