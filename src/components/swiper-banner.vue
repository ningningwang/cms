<template>
    <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/images/img1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/img2.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/img3.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> 
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>