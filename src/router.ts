import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  Router
} from 'vue-router'
const baseUrl = import.meta.env.BASE_URL

const router: Router = createRouter({
  history: createWebHistory(baseUrl),

  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home')
        },
        {
          path: 'services',
          name: 'Services',
          children: [
            {
              path: 'center',
              name: 'Center',
              component: () => import('@/views/Services/Center')
            }
          ]
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/About')
        }
      ]
    }
  ]
})

export const routerPush = (to: RouteLocationRaw) => router.push(to)

export const routerReplace = (to: RouteLocationRaw) => router.replace(to)

export const routerBack = () => router.back()

export const routerForward = () => router.forward()

export const routerGo = (delta: number) => router.go(delta)

export default router
