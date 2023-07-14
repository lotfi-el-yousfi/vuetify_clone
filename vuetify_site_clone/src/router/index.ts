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
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue'),
  },
  {
    path: '/AllComponenets',
    name:"AllComponenets",
    component: () => import('@/views/AllComponenets.vue'),
     
  },
  {
    path: '/test_compo',
    name:"test_compo",
    component: () => import('@/views/test_compo.vue'),
     
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
