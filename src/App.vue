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
</template>
 -->
<template>
  <div class="container">
    <div class="search">
      <a href="#">
        <form>
          <input type="search" disabled="disabled" placeholder="立即查找独家优惠券">
        </form>
      </a>
    </div>
    <div class="nav">
      <swiperNav></swiperNav>
      <span class="category"></span>
    </div>
    <div class="banner">
      <swiperBanner></swiperBanner>
    </div>
  </div>
</template>
<script>
  
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

<style>
  body{margin: 0;}
  .banner{width: 100%;height: 1.5rem;}
  .banner img{width: 100%;height: 100%;}
</style>
