<template>
  <div class="nav-wraper">
    <swiper :options="swiperOption">
      <swiper-slide><v-link href="/">全部</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">女装</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">百货</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">美食</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">美妆</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">鞋包</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">内衣</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">男装</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">母婴</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">手机周边</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">配饰</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">其他</v-link></swiper-slide>
      <swiper-slide><v-link href="/ladies">成人用品</v-link></swiper-slide>
    </swiper>
    <span class="icon-category"></span>
  </div>
</template>
<script>
  import VLink from './VLink.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          // spaceBetween: 30,
          freeMode: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      VLink
    }
  }
</script>
<style>
  .nav-wraper{width:100%;height:42px;line-height:40px;position:fixed;top:44px;z-index: 100;background: #fff;}
  .icon-category{width:38px;height:24px;border-left:1px #d8d8d8 solid;display: block;position: absolute;right: 0;top: 9px;z-index: 101;background: url('../assets/images/icon/category.png') no-repeat #fff center;background-size: 13px 14px;}
  .swiper-slide{text-align: center;}
</style>


