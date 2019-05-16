import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Users from '@/components/Users'
import Posts from '@/components/Posts'
import Tagged from '@/components/Tagged'
import View from '@/components/View'
import Write from '@/components/Write'
import EditMenu from '@/components/EditMenu'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Posts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/tags/:name',
      name: 'Tagged',
      component: Tagged
    },
    {
      path: '/tags/:name/posts/:id',
      name: 'TaggedView',
      component: View
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'PostView',
      component: View
    },
    {
      path: '/write',
      name: 'PostCreate',
      component: Write
    },
    {
      path: '/posts/:id/write',
      name: 'PostUpdate',
      component: Write
    },
    {
      path: '/menus',
      name: 'EditMenu',
      component: EditMenu
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
