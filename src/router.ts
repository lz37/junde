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
      name: 'Home',
      component: () => import('@/views/Home')
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
