<template>
  <div class="container">
    <Category title='美食'>
      <img slot="center"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F22a294fa-27e6-4430-bdae-775f820a8d92%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683423782&t=2eb3031ef822ebf99bcd64ef64f483f7"
        alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title='游戏'>
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title='电影'>
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">经典</a>
        <a href="http://www.atguigu.com">热门</a>
        <a href="http://www.atguigu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观影</h4>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>