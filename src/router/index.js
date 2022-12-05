import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/richtext',
    },
    {
      path: '/richtext',
      name: 'richtext',
      component: () => import('../views/RichText.vue')
    },
    {
      path: '/markdownit',
      name: 'markdownit',
      component: () => import('../views/MarkdownIt.vue')
    }
  ]
})
export default router
