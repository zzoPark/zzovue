<template>
  <div class="login">
    <form v-on:submit.prevent="onSubmit">
      <b-form-group :label-cols="4" breakpoint="md" label="Username" label-for="username">
        <b-form-input v-model="username" id="username" placeholder="Enter username"></b-form-input>
      </b-form-group>
      <b-form-group :label-cols="4" breakpoint="md" label="Password" label-for="password">
        <b-form-input v-model="password" type="password" id="password" placeholder="Enter password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api.js'
import bus from '@/services/bus.js'

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
      api.post('login', {
        username: this.username,
        password: this.password
      })
      .then((response) => {
        this.$cookies.set('token', response.data.token)
        bus.$emit('login', true)
        this.$router.push('/')
      })
    }
  }
}
</script>
