<template>
  <div class="home">
    <h1>ProductHunt</h1>
    <p>
      The best new products, every day
    </p>
    <select v-model="period" @change="getPostsFromStore(period)">
        <option :key="day" v-for="day in days" v-bind:value="day">{{ !day ? 'Today' : (day === 1 ? 'Yesterday' : `${day} days ago`) }}</option>
    </select>
    <ul>
      <li>
        <span>{{ posts && posts.length }}</span>posts
      </li>
      <li>
        <span>{{ votesCount }}</span>votes
      </li>
      <li>
        <span>{{ commentsCount }}</span>comments
      </li>
      <li>
        <span>{{ makersCount }}</span>makers
      </li>
    </ul>
    <div class="post-list">
        <PostCard :post="post" v-for="(post, index) in posts"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Vuex from 'vuex'

import PostCard from '../components/PostCard.vue'

export default {
  name: 'Home',
  components: {
    PostCard
  },
  data () {
    return {
      days: [...Array(31).keys()],
      period: 0
    }
  },
  computed: {
    ...mapState([
      'commentsCount',
      'makersCount',
      'posts',
      'postsCount',
      'votesCount'
    ])
  },
  methods: {
    ...Vuex.mapActions({getPostsFromStore: 'getPosts'}),
  },
  mounted (){
    this.getPostsFromStore(this.period)
  }
}
</script>

<style scoped lang="stylus">
h1
    color #da5424
    margin-bottom 0

p, li
    color #8a8d8c
    margin 0
    padding 0 10px

ul
    width 275px
    margin 0 auto
    padding 0
    display flex
    justify-content space-between
    margin-bottom 30px

    li
        flex-direction column
        display flex
        list-style none
        text-transform uppercase
        font-size: 0.7rem
        font-weight bold

        span
            color #da5424
            font-size: 1.2rem

select
    margin: 30px 0

.post-list
    display -webkit-box
    display -webkit-flex
    display -moz-box
    display -moz-flex
    display -ms-flexbox
    display flex
    flex-wrap wrap
</style>
