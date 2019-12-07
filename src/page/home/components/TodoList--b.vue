<template>
  <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe>
            <transition-group name="swipe" tag="ul" class="swipe-content">
              <li class="swipe-item-wrapper" v-for="(data,index) in topSwipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="topSwipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                    <div class="the-top"></div>
                  </div>
                </cube-swipe-item>
              </li>
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="swipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe>
        </cube-scroll>
      </div>
</template>
<script type="text/javascript">
export default {
  name: 'TodoList',
  data () {
    return {
      topSwipeData: [
        {
          item: {
            id: '04',
            name: '念葳蕊',
            desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
            imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
          },
          btns: [
            {
              action: 'edit',
              text: '编辑',
              color: '#919d8b'
            },
            {
              action: 'removeTop',
              text: '取消置顶',
              color: '#d87c7b'
            }
          ]
        }
      ],
      swipeData: [
        {
          item: {
            id: '01',
            name: '生日庆祝',
            desc: '我们在一起的第三个生日',
            imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
          },
          btns: [
            {
              action: 'edit',
              text: '编辑',
              color: '#919d8b'
            },
            {
              action: 'toTop',
              text: '置顶',
              color: '#d87c7b'
            }
          ]
        },
        {
          item: {
            id: '02',
            name: '秋水浮萍任飘渺',
            desc: '『武侠配乐』快意恩仇江湖情',
            imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
          },
          btns: [
            {
              action: 'edit',
              text: '编辑',
              color: '#919d8b'
            },
            {
              action: 'toTop',
              text: '置顶',
              color: '#d87c7b'
            }
          ]
        },
        {
          item: {
            id: '03',
            name: '念葳蕊',
            desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
            imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
          },
          btns: [
            {
              action: 'edit',
              text: '编辑',
              color: '#919d8b'
            },
            {
              action: 'toTop',
              text: '置顶',
              color: '#d87c7b'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.activeIndex = -1
  },
  methods: {
    onItemClick (item) {
      console.log('click item:', item)
    },
    onBtnClick (btn, index) {
      var listener = event.currentTarget
      var that
      if (btn.action === 'toTop') {
      // 置顶
        that = this
        var item = that.swipeData[index]
        that.swipeData.splice(index, 1)
        that.topSwipeData.push(item)
        setTimeout(function () {
          that.$refs.topSwipeItem[that.topSwipeData.length - 1].shrink()
          item.btns[1].text = '取消置顶'
          item.btns[1].action = 'removeTop'
          listener.style.width = '104px'
          listener.style.opacity = 1
          listener.style.transform = ''
          listener.style.transform = 'translate(104px, 0px) translateZ(0px)'
          that.$refs.topSwipeItem[that.topSwipeData.length - 1].refresh()
        }, 500)
      } else if (btn.action === 'removeTop') {
      // 取消置顶
        that = this
        item = that.topSwipeData[index]
        that.topSwipeData.splice(index, 1)
        that.swipeData.push(item)
        setTimeout(function () {
          that.$refs.swipeItem[that.swipeData.length - 1].shrink()
          item.btns[1].text = '置顶'
          item.btns[1].action = 'toTop'
          listener.style.width = '72px'
          listener.style.transform = ''
          listener.style.transform = 'translate(72px, 0px) translateZ(0px)'
          that.$refs.swipeItem[that.swipeData.length - 1].refresh()
        }, 500)
      } else if (btn.action === 'edit') {
        that = this
        setTimeout(function () {
          that.$refs.swipeItem[index].shrink()
        }, 500)
        console.log('edit')
      }
    },
    onItemActive (index) {
      if (index === this.activeIndex) {
        return
      }
      if (this.activeIndex !== -1) {
        const activeItem = this.$refs.swipeItem[this.activeIndex]
        activeItem.shrink()
      }
      this.activeIndex = index
    }
  }
}
</script>
<style lang="stylus" scoped>
.swipe-content >>> .swipe-item-wrapper
  transition all 1s
  background #fff

  .item-inner
    display flex
    .icon
      padding 10px
    .item-name
      font-size 1rem
      margin-top 5px
    .item-desc
      font-size .6rem
      padding-top 5px
      color #333
    .the-top
      position absolute
      right 0
      height 80px
      width 10px
      background-color #d87c7b
</style>
