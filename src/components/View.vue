<template>
  <div class="view">
    <b-card no-body>
      <b-card-header>{{ post.title }}</b-card-header>
      <b-card-body>
        <p class="card-text" v-html="post.contents">
          contents
        </p>
        <p class="card-tags">
          <b-button v-for="name in post.tags" :key="name"
                    size="sm" :to="`/tags/${name}`">
            {{ name }}
          </b-button>
        </p>
      </b-card-body>
      <b-card-footer>Last Updated {{ post.update_date }}</b-card-footer>
    </b-card>
  </div>
</template>

<script>
import api from './Api.js'

export default {
  name: 'PostView',
  data () {
    return {
      post: {
        title: 'title',
        contents: 'contents',
        tags: [],
        update_date: '2019-01-01'
      }
    }
  },
  created () {
    this.fetchData(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to.params.id)
    next()
  },
  methods: {
    fetchData (postId) {
      var vm = this
      api().get(`posts/${postId}`)
      .then(function (response) {
        vm.post = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
