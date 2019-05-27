<template>
  <b-card-group deck>
    <b-card no-body style="max-width: 20rem;" v-for="user in users" :key="user.id">
      <h4 slot="header">{{ user.username }}</h4>
      <b-card-body>
        <p class="card-text">{{ user.email }}</p>
      </b-card-body>
    </b-card>
  </b-card-group>
</template>

<script>
import api from '@/services/api.js'

export default {
  name: 'Posts',
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchData()
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData()
    next()
  },
  methods: {
    fetchData () {
      var vm = this
      var token = this.$cookies.get('token')
      api().get('users', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(function (response) {
        console.log(response.data)
        vm.users = response.data.results
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
