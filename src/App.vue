<template>
  <div id="app">
    <div class="index-view"></div>
    <div class="home-content" v-show="showHome">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showHome: false
    }
  },
  methods: {
    showHomePage () {
      this.showHome = true
    }
  },
  mounted () {
    setTimeout(this.showHomePage(), 2000)
  }
}
</script>
<style lang="stylus" scoped>
.index-view
  width 100vw
  height 100vh
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index 9999
  background url('@/assets/static/image/index-sub.png')
.home-content
  width 100%
  position relative
  top 0
  bottom 2.1rem
  left 0
  right 0
