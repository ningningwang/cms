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
    <Swiper></Swiper>
  </div>
</template>
<script>
  
  import VLink from './components/VLink.vue'
  import Swiper from './components/swiper.vue'
  export default {
    components: {
      VLink,
      Swiper
    }
  }
</script>

<style>
  
</style>
