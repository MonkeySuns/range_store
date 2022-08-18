import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

declare module 'vue-router' {
  interface RouteMeta { // 扩展meta属性
    roles?: Array<string>
    hidden?: boolean
    title?: string
  }
}

export const common: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页'
    }
  }
]

const asyncRoute: Array<RouteRecordRaw> = [
  {
    path: '/mySelf',
    component: Layout,
    meta: {
      roles: [ 'admin' ],
      title: '管理员权限'
    }
  },
  {
    path: '/range',
    component: Layout,
    meta: { title: '范围' },
    children: [
      {
        path: 'first',
        component: Layout,
        meta: { title: '第一个范围' }
      }
    ]
  }
]


export const getRouter = (userRoles: Array<string>): Array<RouteRecordRaw> => {
  const maybeRouter: Array<RouteRecordRaw> = filterRouter(asyncRoute, false, userRoles)
  const alwaysRouter: Array<RouteRecordRaw> = filterRouter(common, true, userRoles)

  const tempRouter = [...alwaysRouter, ...maybeRouter]

  return tempRouter
  
}


/**
 * 
 * @param entry 需要过滤的路由
 * @returns 去除在mete配置hidden的路由
 */
const filterRouter = (entry: RouteRecordRaw[], isCommon = false, userRoles: Array<string>): RouteRecordRaw[] => {

  const res: RouteRecordRaw[] = []
  entry.forEach(route => {

    if (!route?.meta?.hidden) { // 当前路由不隐藏

      if (isCommon) { // 公共的
        res.push(route)
      } else {
        const hasRoles = route.meta?.roles
        if (hasRoles && hasRoles.length) { // 配置的角色          
          for (const role of hasRoles) {
            if (userRoles.includes(role)) {
              res.push(route)
              break
            }
          }
        } else { // 不限制权限
          res.push(route)
        }
      }
      
      if (route.children?.length) route.children = filterRouter(route.children, isCommon, userRoles)
    }
  })

  return res
}

export const routers = createRouter({
  routes: common,
  history: createWebHashHistory()
})