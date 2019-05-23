<template>
  <div class="login">
    <form v-on:submit.prevent="onSubmit">
      <b-form-group horizontal :label-cols="4" breakpoint="md"
                    label="Username" label-for="username">
        <b-form-input v-model="username" id="username" placeholder="Enter username"></b-form-input>
      </b-form-group>
      <b-form-group horizontal :label-cols="4" breakpoint="md"
                    label="Password" label-for="password">
        <b-form-input v-model="password" type="password" id="password" placeholder="Enter password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </form>
  </div>
</template>

<script>
import api from './Api.js'

export default {
  name: 'Login',
  data () { 
    return { 
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      var vm = this

      api().post('login', {
        username: vm.username,
        password: vm.password
      })
      .then(function (response) {
        vm.$cookies.set('token', response.data.token)
        vm.$router.push('/')
      })
      .catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>
