<template>
  <div class="cell">
    <div class="post-card">
      <div class="thumbnail">
        <img :src="post.thumbnail && post.thumbnail.image_url"/>
      </div>
      <h3>{{ post.name }}</h3>
      <span>{{ post.votes_count }} upvotes</span>
      <p>{{ post.tagline }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostCard',
  props: {
    post: {}
  }
}
</script>

<style scoped lang="stylus">
.cell
    -webkit-box-flex 0
    -webkit-flex 0 0 33.333333%
    -ms-flex 0 0 33.333333%
    flex 0 0 33.333333%
    max-width 33.333333%
    box-sizing border-box
    padding 0 10px
    margin 0 0 20px

  .post-card
      -webkit-box-shadow 0px 0px 5px 0px rgba(0,0,0,0.40)
      -moz-box-shadow 0px 0px 5px 0px rgba(0,0,0,0.40)
      box-shadow 0px 0px 5px 0px rgba(0,0,0,0.40)
      padding-bottom 15px
      background #FFF
      overflow hidden

      h3
          color #da5424
          margin 15px 0 10px
          padding 0 15px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap

      span
          color #787878
          font-size 0.85rem

      p
          color #000
          height 37px
          overflow hidden
          margin 15px 0 0
          padding 0 15px
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical

      .thumbnail
        position relative
        overflow hidden
        height: 150px;

        img
          position absolute
          top 50%
          transform translate3d(0, -50%, 0)
          left 0
          width 100%
</style>
