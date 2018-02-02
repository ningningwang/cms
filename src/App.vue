<template>
  <div class="container">
    <!-- 搜索栏 -->
    <div class="search">
      <a href="#">
        <form>
          <div class="placeholder">
            <button type="button"></button>
            <span>立即查找独家优惠券</span>
          </div>
          <input type="search" disabled="disabled">
        </form>
      </a>
    </div>
    <!-- 菜单栏 -->
    <swiperNav></swiperNav>
    <!-- 轮播图 -->
    <swiperBanner></swiperBanner>
    <div class="topic-wraper">
      <div class="left"><a href="#"><img src="./assets/images/1.png"></a></div>
      <div class="right">
        <div class="top"><a href="#"><img src="./assets/images/2.png"></a></div>
        <div class="bottom">
          <div class="bottom-1"><a href="#"><img src="./assets/images/3.png"></a></div>
          <div class="bottom-2"><a href="#"><img src="./assets/images/4.png"></a></div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <!-- 产品列表 -->
    <myTabs></myTabs>
    
  </div>
</template>
<script>
  require('./assets/scss/app.scss') 
  import VLink from './components/VLink.vue'
  import swiperNav from './components/swiper-nav.vue'
  import myTabs from './components/sort.vue'
  import swiperBanner from './components/swiper-banner.vue'
  export default {
    components: {
      VLink,
      swiperNav,
      swiperBanner,
      myTabs
    }
  }
</script>