<template>
  <div class="search">
    <p v-if="$route.query.search">Search '{{ $route.query.search }}'</p>
    <list v-bind:posts="posts"></list>
  </div>
</template>

<script>
import List from './List.vue'
import api from './Api.js'

export default {
  name: 'Posts',
  components: {
    'list': List
  },
  data: function () {
    return {
      url: 'posts',
      posts: []
    }
  },
  created: function () {
    this.getSearch(this.$route)
    this.fetchData()
  },
  beforeRouteUpdate (to, from, next) {
    this.url = 'posts'
    this.getSearch(to)
    this.fetchData()
    next()
  },
  methods: {
    getSearch (to) {
      var search = to.query.search
      console.log(search)
      if (search !== undefined && search !== null) {
        this.url += `?search=${search}`
      }
    },
    fetchData () {
      var vm = this
      api().get(vm.url)
      .then(function (response) {
        vm.posts = response.data.results
      })
      .catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>
