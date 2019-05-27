<template>
  <div class="tagged">
    <p>Tagged: '{{$route.params.name}}'</p>
    <list v-bind:posts="posts"></list>
  </div>
</template>

<script>
import List from './List.vue'
import api from '@/services/api.js'

export default {
  name: 'Posts',
  components: {
    'list': List
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchData(this.$route.params.name)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to.params.name)
    next()
  },
  methods: {
    fetchData (tagname) {
      api.get('tagged/' + tagname)
        .then((response) => {
          this.posts = response.data.results
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
