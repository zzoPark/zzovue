<template>
  <div class="search">
    <p v-if="$route.query.search">Search '{{ $route.query.search }}'</p>
    <list v-bind:posts="posts"></list>
  </div>
</template>

<script>
import List from './List.vue'
import api from '@/services/api.js'
import bus from '@/services/bus.js'

export default {
  name: 'Posts',
  components: {
    'list': List
  },
  data () {
    return {
      url: 'posts',
      posts: []
    }
  },
  created () {
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
      if (search !== undefined && search !== null) {
        this.url += `?search=${search}`
      }
    },
    fetchData () {
      api.get(this.url)
        .then((response) => {
          this.posts = response.data.results
          bus.$emit('posts', this.posts)
        })
    }
  }
}
</script>
