<template>
  <div class="theme-container">
    <header class="header">
      <nav>
        <router-link to="/">主页</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/tags">标签</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
      <SearchBox />
    </header>
    <main class="main">
      <component
        v-if="home"
        :is="layout"
      />
      <Content v-else />
    </main>

    <footer class="footer">footer</footer>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
  components: { SearchBox },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
    home() {
      if (this.$page.path) {
        return this.$frontmatter.home;
      }
      return false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.theme-container
  color: #fff
  text-align: center
  display: flex
  flex-flow: column
  min-height: 100vh
  font-size: 2rem
  .main
    height: 100%
    background: #9B9B9B
    flex: 1
  .header
    height: 80px
    text-align: left
    display: flex
    justify-content: space-between
    a
      text-decoration: none
      color: #000
  .footer
    height: 80px
    background: #4B5473
</style>