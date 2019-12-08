<template>
  <div>
    <div :class="hideHome ? 'index-view show' : 'index-view hide'" ref="photoWrap">
      <photo-wall :photos="photos"></photo-wall>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import photoWall from '../../components/common/photoWall'
import { createAPI } from 'cube-ui'
import home from '../home/Home'

createAPI(Vue, home)

export default {
  name: 'firstPage',
  data () {
    return {
      homeAPI: {},
      hideHome: true,
      photos: [
        {
          'id': 1,
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2487612740,2250555961&fm=26&gp=0.jpg',
          'top': '3rem',
          'right': '0',
          'bottom': '0',
          'left': '1rem',
          'width': '4rem',
          'height': '5rem'
        }, {
          'id': 2,
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1043272071,3287178444&fm=15&gp=0.jpg',
          'top': '1rem',
          'right': '0',
          'bottom': '0',
          'left': '5rem',
          'width': '6rem',
          'height': '4rem'
        }, {
          'id': 3,
          'src': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=455153787,310446010&fm=26&gp=0.jpg',
          'top': '2rem',
          'right': '0',
          'bottom': '0',
          'left': '12rem',
          'width': '6rem',
          'height': '5rem'
        }, {
          'id': 4,
          'src': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=455153787,310446010&fm=26&gp=0.jpg',
          'top': '7rem',
          'right': '0',
          'bottom': '0',
          'left': '2rem',
          'width': '6rem',
          'height': '8rem'
        }, {
          'id': 5,
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2487612740,2250555961&fm=26&gp=0.jpg',
          'top': '5rem',
          'right': '0',
          'bottom': '0',
          'left': '7rem',
          'width': '5rem',
          'height': '6rem'
        }, {
          'id': 6,
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1043272071,3287178444&fm=15&gp=0.jpg',
          'top': '8.5rem',
          'right': '0',
          'bottom': '0',
          'left': '14rem',
          'width': '4rem',
          'height': '5rem'
        }, {
          'id': 7,
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1043272071,3287178444&fm=15&gp=0.jpg',
          'top': '13rem',
          'right': '0',
          'bottom': '0',
          'left': '6rem',
          'width': '10rem',
          'height': '6rem'
        }
      ]
    }
  },
  components: {
    photoWall
  },
  methods: {
    showHome () {
      this.hideHome = false
    }
  },
  mounted: function () {
    var vThis = this
    setTimeout(() => {
      setTimeout(() => {
        vThis.showHome()
        setTimeout(() => {
          console.log(vThis.$refs.photoWrap)
          vThis.$refs.photoWrap.style.display = 'none'
          vThis.homeAPI = home.$create()
        }, 1000)
      }, 5000)
    }, 1000)
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.homeAPI)
    this.homeAPI.remove()
    next()
  }
}
</script>
<style lang="stylus" scoped>
@import './assets/style/varibles.styl'

.index-view
  width 100vw
  height 100vh
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background $bgColor
  transition all 2s
.index-view.show
  opacity .8
  z-index 999
.index-view.hide
  opacity 0.0
  z-index 1
.home-content
  width 100%
  position relative
  top 0
  bottom 2.1rem
  left 0
  right 0
  z-index 9
</style>
