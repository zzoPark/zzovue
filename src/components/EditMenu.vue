<template>
  <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
    <b-form-group label="Tags">
      <b-form-checkbox-group v-model="selected" buttons 
        button-variant="outline-info" size="lg" :options="options">
      </b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Menus (Selected)">
      <b-button-group>
        <b-button v-for="it in selected" size="lg" variant="warning">{{ it }}</b-button>
      </b-button-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import api from './Api.js'

export default {
  name: 'EditMenu',
  data () {
    return {
      selected: ['Linux'],
      options: [
        { text: 'Linux', value: 'Linux' },
        { text: 'Docker', value: 'Docker' }
      ]
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
      this.selected = []
      this.options = []
      this.getMenus()
      this.getTags()
    },
    getMenus () {
      var vm = this
      api().get('menus')
      .then(function (response) {
        response.data.results.forEach(function (it) {
          vm.selected.push(it.tag)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    getTags () {
      var vm = this
      api().get('tags')
      .then(function (response) {
        response.data.results.forEach(function (it) {
          vm.options.push({ text: it.name, value: it.name })
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    onSubmit () {
      var vm = this
      var token = this.$cookies.get('token')
      var menus = []
      var index = 0
      vm.selected.forEach(function (it) {
        menus.push({ tag: it, order: index })
        index += 1
      })
      api().post('menus/', menus, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(function (response) {
        console.log(response.data)
        vm.$router.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    onReset () {
      this.fetchData()
    }
  }
}
</script>
