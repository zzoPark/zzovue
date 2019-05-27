<template>
  <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
    <b-form-group label="Tags">
      <b-form-checkbox-group v-model="selected" buttons 
        button-variant="outline-info" size="lg" :options="options">
      </b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Menus (Selected)">
      <b-button-group>
        <b-button v-for="it in selected" :key="it" size="lg" variant="warning">{{ it }}</b-button>
      </b-button-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import api from '@/services/api.js'
import bus from '@/services/bus.js'

export default {
  name: 'EditMenu',
  data () {
    return {
      selected: [],
      options: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.getMenus()
      this.getTags()
    },
    getMenus () {
      api.get('menus')
        .then((response) => {
          response.data.results.forEach((it) => {
            this.selected.push(it.tag)
          })
        })
    },
    getTags () {
      api.get('tags')
        .then((response) => {
          response.data.results.forEach((it) => {
            this.options.push({ text: it.name, value: it.name })
          })
        })
    },
    onSubmit () {
      let menus = []
      let index = 0
      this.selected.forEach((it) => {
        menus.push({ tag: it, order: index })
        index += 1
      })
      api.post('menus/', menus)
        .then(() => {
          bus.$emit('menus', menus)
        })
    },
    onReset () {
      this.fetchData()
    }
  }
}
</script>
