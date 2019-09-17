<template>
  <div class="photo-wall">
    <ul>
      <li v-for="item in photos" :key="item.id">
        <div class="wall-picture" :style="{'left': item.left,'right': item.right,'top': item.top,'bottom': item.bottom,'width': item.width,'height': item.height}">
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
  .wall-picture
    position absolute
    background #eee
    padding .25rem
    .picture
      width 100%
      height 100%
</style>
