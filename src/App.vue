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
    <div class="product-list">
      <div class="sort" id="sort">
        
      </div> 
      

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