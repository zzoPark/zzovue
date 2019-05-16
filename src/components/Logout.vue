<template>
  <div class="logout">
    Logout!
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    console.log('Logout!!')
    this.$cookies.remove('token')
    this.$router.replace('/')
  }
}
</script>
