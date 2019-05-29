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
import api from '@/services/api.js'

export default {
  name: 'PostView',
  data () {
    return {
      post: {}
    }
  },
  created () {
    this.fetchData(this.$route.params.id)
  },
  methods: {
    fetchData (postId) {
      if (typeof this.$route.params.post === 'undefined') {
        api.get(`posts/${postId}`)
          .then((response) => {
            this.post = response.data
          })
      } else {
        this.post = this.$route.params.post
      }
    }
  }
}
</script>
