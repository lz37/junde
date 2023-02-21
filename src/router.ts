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
        }
      ]
    }
  ]
})

export function routerPush(to: RouteLocationRaw) {
  router.push(to)
}

export function routerReplace(to: RouteLocationRaw) {
  router.replace(to)
}

export function routerBack() {
  router.back()
}

export function routerForward() {
  router.forward()
}

export function routerGo(delta: number) {
  router.go(delta)
}

export default router
