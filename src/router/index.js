import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
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

let route = (path, name, component) => {
  return {
    path,
    name,
    components: {
      nav: Nav,
      default: component
    }
  }
}

export default new Router({
  mode: 'history',
  routes: [
    route ('/', 'Index', Posts),
    route ('/login', 'Login', Login),
    route ('/logout', 'Logout', Logout),
    route ('/users', 'Users', Users),
    route ('/tags/:name', 'Tagged', Tagged),
    route ('/tags/:name/posts/:id', 'TaggedView', View),
    route ('/posts', 'Posts', Posts),
    route ('posts/:id', 'PostView', View),
    route ('/write', 'PostCreate', Write),
    route ('/posts/:id/write', 'PostUpdate', Write),
    route ('/menus', 'EditMenu', EditMenu),
    route ('*', 'Error', NotFound)
  ]
})
