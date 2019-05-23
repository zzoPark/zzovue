<template>
  <div id="app">
    <zzo-header></zzo-header>
    <router-view name="nav"></router-view>
    <router-view></router-view>
    <zzo-footer></zzo-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import '../node_modules/jquery/'

export default {
  name: 'app',
  components: {
    'zzo-header': Header,
    'zzo-footer': Footer
  }
}
</script>

<style lang="scss">
@import 'styles/blog';
</style>
