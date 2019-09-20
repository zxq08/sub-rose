<template>
  <div class="photo-wall">
    <ul>
      <li v-for="item in photos" :key="item.id">
        <div ref="wallPicture" class="wall-picture" :style="{'left': item.left,'right': item.right,'top': item.top,'bottom': item.bottom,'width': item.width,'height': item.height}">
          <img class="picture" :src="item.src">
        </div>
      </li>
    </ul>
    <div class="howLongMsg" :style="{opacity: showMsg}">
      {{msg}}
    </div>
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
      showMsg: 0,
      howLong: 0,
      msg: ''
    }
  },
  methods: {
    initAnimation () {
      var wall = this.$refs.wallPicture
      var beginDt = new Date('2017-09-04')
      var left, top, right
      // 照片散开
      for (let i = 0; i < wall.length; i++) {
        if (wall[i].offsetLeft <= '80' && wall[i].offsetTop > '100') {
        // 左方移出
          left = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginLeft = '-' + left + 'px'
        } else if (wall[i].offsetTop <= '100' && wall[i].offsetLeft <= '80') {
        // 左上方移出
          top = wall[i].offsetTop + wall[i].offsetHeight
          left = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginTop = '-' + top + 'px'
          wall[i].style.marginLeft = '-' + left + 'px'
        } else if (wall[i].offsetTop <= '100' && wall[i].offsetLeft > '80') {
        // 上方移出
          top = wall[i].offsetTop + wall[i].offsetHeight
          wall[i].style.marginTop = '-' + top + 'px'
        } else if (wall[i].offsetTop <= '100' && wall[i].offsetLeft > '120') {
        // 右上方移出
          top = wall[i].offsetTop + wall[i].offsetHeight
          left = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginTop = '-' + top + 'px'
          wall[i].style.marginLeft = left + 'px'
        } else if (wall[i].offsetLeft >= '120' && wall[i].offsetTop > '100') {
        // 右方移出
          right = wall[i].offsetLeft + wall[i].offsetWidth
          wall[i].style.marginLeft = right + 'px'
        }
      }
      // 显示日期
      var now = new Date()
      var timePreDat = 1000 * 60 * 60 * 24
      this.howLong = Math.ceil((now.getTime() - beginDt.getTime()) / timePreDat)
      this.msg = '我们在一起已经 ' + this.howLong + ' 天啦~'
      setTimeout(() => {
        this.showMsg = 1
      }, 500)
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
  .howLongMsg
    text-align center
    font-size 1rem
    color #fff
    width 100%
    position absolute
    left 0px
    right 0px
    top 40%
    transition opacity .5s ease-out
</style>
