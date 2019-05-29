<template>
<div class="list">
  <b-card-group columns>
    <b-card no-body v-for="post in posts" :key="post.id">
      <b-card-header>
          <router-link :to="{name: 'PostView', params: {id: post.id, post: post}}">{{ post.title }}</router-link>
      </b-card-header>
      <b-card-img v-if="post.image" :src="post.image" fluid></b-card-img>
      <b-card-body>
        <p class="card-text" v-html="post.contents">
          contents 
        </p>
      </b-card-body>
      <b-card-footer>Last Updated {{ post.update_date }}</b-card-footer>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
export default {
  name: 'List',
  props: ['posts']
}
</script>
