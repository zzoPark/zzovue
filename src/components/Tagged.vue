<template>
  <div class="tagged">
    <p>Tagged: '{{$route.params.name}}'</p>
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
      var vm = this
      api().get('tagged/' + tagname)
      .then(function (response) {
        console.log(response.data)
        vm.posts = response.data.results
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
