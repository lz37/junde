import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  Router
} from 'vue-router'
const mode = import.meta.env.MODE

const router: Router = createRouter({
  history: createWebHistory(mode === 'development' ? '/' : '/junde/'),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home')
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
