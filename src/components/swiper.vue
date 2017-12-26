<template>
  <swiper :options="swiperOption">
      <swiper-slide>全部</swiper-slide>
      <swiper-slide>女装</swiper-slide>
      <swiper-slide>百货</swiper-slide>
      <swiper-slide>美食</swiper-slide>
      <swiper-slide>美妆</swiper-slide>
      <swiper-slide>鞋包</swiper-slide>
      <swiper-slide>内衣</swiper-slide>
      <swiper-slide>男装</swiper-slide>
      <swiper-slide>母婴</swiper-slide>
      <swiper-slide>手机周边</swiper-slide>
      <swiper-slide>配饰</swiper-slide>
      <swiper-slide>其他</swiper-slide>
      <swiper-slide>成人用品</swiper-slide>
    </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 6,
          spaceBetween: 30,
          freeMode: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>


