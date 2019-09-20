<template>
  <div class="photo-wall">
    <ul>
      <li v-for="item in photos" :key="item.id">
        <div ref="wallPicture" class="wall-picture" :style="{'left': item.left,'right': item.right,'top': item.top,'bottom': item.bottom,'width': item.width,'height': item.height}">
          <img class="picture" :src="item.src">
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'photoWall',
  props: {
    photos: Array
  },
  data () {
    return {
    }
  },
  methods: {
    initAnimation () {
      var wall = this.$refs.wallPicture
      for (let i = 0; i < wall.length; i++) {
        if (wall[i].offsetLeft <= '100' && wall[i].offsetTop > '100') {
          var left = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginLeft = '-' + left + 'px'
        } else if (wall[i].offsetTop <= '100') {
          var top = wall[i].offsetTop + wall[i].offsetHeight
          wall[i].style.marginTop = '-' + top + 'px'
        } else if (wall[i].offsetLeft > '100') {
          var right = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginLeft = right + 'px'
        }
      }
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.initAnimation()
    }, 2000)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/animates-out.css'

.photo-wall
  width 100vw
  height 100vh
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index 1000
  overflow hidden
  .wall-picture
    position absolute
    background #eee
    padding .25rem
    transition all 1s ease-out
    .picture
      width 100%
      height 100%
</style>
