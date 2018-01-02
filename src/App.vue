<!-- <template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template> -->

<template>
  <div class="container">
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
    <swiperNav></swiperNav>
    <div class="banner-wraper">
      <swiperBanner></swiperBanner>
    </div>
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

    <div class="list-wraper">
      <ul>
        <li>
          <v-link href="/">精选</v-link>
          <v-link href="/about">销量</v-link>
          <v-link href="/about">最新</v-link>
          <v-link href="/about">价格</v-link>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  require('./assets/scss/app.scss') 
  import VLink from './components/VLink.vue'
  import swiperNav from './components/swiper-nav.vue'
  import swiperBanner from './components/swiper-banner.vue'
  export default {
    components: {
      VLink,
      swiperNav,
      swiperBanner
    }
  }
</script>