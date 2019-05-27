<template>
  <b-navbar v-scroll="toggleFixed" toggleable="md"
            type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">zzovlog</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-for="menu in menus" :key="menu.id"
                    :to="'/tags/'+parseUrl(menu.tag)+'/'">
          {{ menu.tag }}
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <template v-if="isLogin">
          <b-nav-item to="/menus">Edit Menu</b-nav-item>
          <b-nav-item to="/write">Write</b-nav-item>
          <b-nav-item to="/logout">Logout</b-nav-item>
        </template>
        <b-nav-item v-else to="/login">Login</b-nav-item>
        <b-nav-form action="/">
          <b-form-input size="sm" class="mr-sm-2" type="text"
                        name="search" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
  
    </b-collapse>
  </b-navbar>
</template>

<script>
import bus from '@/services/bus.js'
import api from '@/services/api.js'

export default {
  name: 'Nav',
  data () {
    return {
      isLogin: false,
      menus: [],
      headerHeight: 0
    }
  },
  created () {
    this.fetchData()
    bus.$on('login', (isLogin) => { this.isLogin = isLogin })
    bus.$on('menus', (menus) => { this.menus = menus })
  },
  methods: {
    fetchData () {
      this.isLogin = this.$cookies.isKey('token')
      api.get('menus')
        .then((response) => {
          this.menus = response.data.results
        })
    },
    parseUrl (name) {
      return name.toString().replace('/', '')
    },
    toggleFixed (event, el) {
      if (this.headerHeight === 0) {
        if (el.offsetTop === 0) {
          el.classList.add('fixed-top')
          return
        }
        this.headerHeight = el.offsetTop
      }
      if (pageYOffset >= this.headerHeight) {
        el.classList.add('fixed-top')
      } else {
        el.classList.remove('fixed-top')
      }
    }
  }
}
</script>
