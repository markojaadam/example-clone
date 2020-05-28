import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/dashboard',
			component: Dashboard
		}
  ]
})

export default router
