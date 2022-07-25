import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Moonlight',
      component: () => import('../views/Moonlight.vue')
    },
    {
      path: '/developpement',
      name: 'Developpement',
      component: () => import('../views/Developpement.vue')
    },
    {
      path: '/anime-webtoon',
      name: 'Anime-Webtoon',
      component: () => import('../views/Anime-Webtoon.vue')
    },
    {
      path: '/gamer',
      name: 'Gamer',
      component: () => import('../views/Gamer.vue')
    }
  ]
})

export default router
// route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.