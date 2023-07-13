// Composables
import { createRouter, createWebHistory } from 'vue-router'
 const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
       
        component: () => import('@/App.vue'),
      },
    ],
  },
  {
    path: '/allComponents',
    name: "AllComponenets" ,
    component: () => import('@/views/AllComponenets.vue'),
    children: [
      {
        path: '',
        name: 'Home',
       
        component: () => import('@/views/AllComponenets.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router