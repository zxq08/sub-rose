<template>
    <div slot="content" class="scroll-wrapper">
      <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="swipeData"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <ul class="foods-wrapper">
                <li v-for="item in swipeData" :key="item.id" class="food-item border-1px">
                  <div class="icon">
                    <img width="57" height="57" :src="item.imgurl">
                  </div>
                  <div class="food-content">
                    <h2 class="name">{{item.name}}</h2>
                    <div class="extra">
                      <span class="count">{{item.desc}}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <template v-if="customPullDown" slot="pulldown" slot-scope="props">
                <div
                    v-if="props.pullDownRefresh"
                    class="cube-pulldown-wrapper"
                    :style="props.pullDownStyle">
                  <div
                      v-show="props.beforePullDown"
                      class="before-trigger"
                      :style="{paddingTop: props.bubbleY + 'px'}">
                    <span :class="{rotate: props.bubbleY > pullDownRefreshThreshold - 40}">↓</span>
                  </div>
                  <div class="after-trigger" v-show="!props.beforePullDown">
                    <div v-show="props.isPullingDown" class="loading">
                      <cube-loading></cube-loading>
                    </div>
                    <div v-show="!props.isPullingDown" class="text"><span class="refresh-text">刷新成功</span></div>
                  </div>
                </div>
              </template>
          </cube-scroll>
        </div>
      </div>
</template>
<script type="text/javascript">

export default {
  name: 'TodoList',
  data () {
    return {
      swipeData: [
        {
          id: '01',
          name: '生日庆祝',
          desc: '我们在一起的第三个生日',
          imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
        },
        {
          id: '02',
          name: '秋水浮萍任飘渺',
          desc: '『武侠配乐』快意恩仇江湖情',
          imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
        },
        {
          id: '03',
          name: '念葳蕊',
          desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
          imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
        },
        {
          id: '04',
          name: '生日庆祝',
          desc: '我们在一起的第三个生日',
          imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
        },
        {
          id: '05',
          name: '秋水浮萍任飘渺',
          desc: '『武侠配乐』快意恩仇江湖情',
          imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
        },
        {
          id: '06',
          name: '念葳蕊',
          desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
          imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
        },
        {
          id: '07',
          name: '生日庆祝',
          desc: '我们在一起的第三个生日',
          imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
        },
        {
          id: '08',
          name: '秋水浮萍任飘渺',
          desc: '『武侠配乐』快意恩仇江湖情',
          imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
        },
        {
          id: '09',
          name: '念葳蕊',
          desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
          imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
        },
        {
          id: '10',
          name: '生日庆祝',
          desc: '我们在一起的第三个生日',
          imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
        },
        {
          id: '11',
          name: '秋水浮萍任飘渺',
          desc: '『武侠配乐』快意恩仇江湖情',
          imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
        },
        {
          id: '12',
          name: '念葳蕊',
          desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
          imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
        }
      ],
      loadingData: [
        {
          id: '13',
          name: '皮蛋瘦肉粥',
          desc: '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
          imgurl: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'
        },
        {
          id: '14',
          name: '扁豆焖面',
          desc: '好吃的面！',
          imgurl: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114'
        },
        {
          id: '15',
          name: '葱花饼',
          desc: '浓香好吃停不下来！',
          imgurl: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114'
        }
      ],
      pullDownRefresh: true,
      pullDownRefreshThreshold: 60,
      pullDownRefreshStop: 40,
      pullDownRefreshTxt: '刷新成功',
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多啦',
      customPullDown: true
    }
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    },
    pullDownRefreshObj: function () {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        // Do not need to set stop value, but you can if you want
        // stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function () {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {
          more: this.pullUpLoadMoreTxt,
          noMore: this.pullUpLoadNoMoreTxt
        }
      } : false
    }
  },
  methods: {
    onPullingDown () {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          var newDataHead = this.loadingData[this.loadingData.length - 1]
          console.log(newDataHead)
          console.log(this.swipeData.length + this.loadingData.length + 1)
          newDataHead.id = this.swipeData.length + this.loadingData.length + 2
          this.swipeData.unshift(newDataHead)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp () {
      // 更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = this.loadingData
          this.swipeData = this.swipeData.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  }
}
</script>
<style lang="stylus" scoped>
.scroll-list-wrap
  height: 600px
  // border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden

.foods-wrapper
  .food-item
    display: flex
    padding: 18px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    &:last-child
      border-none()
      margin-bottom: 0
    .icon
      flex: 0 0 57px
      margin-right: 10px
    .food-content
      flex: 1
      .name
        margin: 2px 0 8px 0
        height: 14px
        line-height: 14px
        font-size: 14px
        color: rgb(7, 17, 27)
      .description, .extra
        line-height: 10px
        font-size: 10px
        color: rgb(147, 153, 159)
      .description
        line-height: 12px
        margin-bottom: 8px
      .extra
        .count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 0
        bottom: 12px
</style>
