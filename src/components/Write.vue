<template>
  <form class="write" v-on:submit.prevent="onSubmit" @reset="onReset">
    <b-form-group>
      <b-form-input id="title" v-model="post.title"
                    placeholder="Write a title"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-textarea id="contents" v-model="post.contents"
                       placeholder="Write down contents"></b-form-textarea>
    </b-form-group>
    <b-form-group horizontal :label-cols="1" breakpoint="md"
                  label="Tags:" label-for="tags">
      <b-form-input id="tags" v-model="post.tags"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-button v-for="tag in tags" :key="tag.id" size="sm" 
                :class="visible[tag.name]" v-on:click="select(tag.name)">
        {{ tag.name }}
      </b-button>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </form>
</template>

<script>
import api from '@/services/api.js'

export default {
  name: 'hello',
  data () {
    return {
      post: {
        title: '',
        contents: '',
        writer_id: 1,
        tags: ''
      },
      tags: [],
      visible: {}
    }
  },
  created () {
    this.getAllTags()
    this.fetchData()
  },
  methods: {
    getAllTags () {
      var vm = this
      api().get('tags')
      .then(function (response) {
        vm.tags = response.data.results
        vm.tags.forEach(function (tag) {
          vm.visible[tag.name] = 'show'
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    fetchData () {
    },
    onSubmit () {
      var vm = this
      var token = this.$cookies.get('token')
      api().post('posts/', vm.post, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(function (response) {
        console.log(response.data)
        var postId = response.data.id
        vm.$router.push(`/posts/${postId}`)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    onReset () {
      this.post.title = ''
      this.post.contents = ''
      this.post.tags = ''
      var vm = this
      this.tags.forEach(function (tag) {
        vm.visible[tag.name] = 'show'
      })
    },
    select (tagname) {
      this.post.tags += tagname + ','
      this.visible[tagname] = 'hide'
    }
  }
}
</script>

<style lang="scss" scoped>
.write {
  padding: 3rem;
  #title {
    font-size: 2rem;
    font-weight: bold;
    height: 3rem;
  }
  textarea {
    height: 30rem;
  }
}

</style>
