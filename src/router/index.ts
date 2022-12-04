import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'richText',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RichText.vue')
    },
    {
      path: '/markDownIt',
      name: 'markDownIt',
      component: () => import('../views/MarkDownIt.vue')
    },
  ]
})

export default router
