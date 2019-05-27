<template>
  <div class="logout">
    Logout!
  </div>
</template>

<script>
import bus from '@/services/bus.js'

export default {
  name: 'Logout',
  created () {
    this.$cookies.remove('token')
    bus.$emit('login', false)
    this.$router.replace('/')
  }
}
</script>
