<template>
  <div class="layout">
    <div
      class="post"
      v-for="(post, index) in posts"
      :key="index"
      @click="postClick(post.path)"
    >
      <div class="post-title">{{post.frontmatter.title}}</div>
      <div class="post-info">
        <div class="post-info-author">{{post.frontmatter.author}}</div>
        <div class="post-info-date">{{post.frontmatter.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$site.pages);
  },
  methods: {
    postClick(path) {
      this.$router.push(path);
    },
  },
  computed: {
    posts() {
      return this.$site.pages.filter((post) => {
        if (post.frontmatter.date) return post;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.layout
  padding: 40px
  cursor: pointer
  .post
    font-size: 2rem
    text-align: left
    margin-top: 30px
    border-bottom: 1px solid #fff
    &-info
      display: flex
      &-date
        margin-left: 10px
</style>