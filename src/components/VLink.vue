<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import router from '../router/index'

  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          router[this.href],
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  a{display: inline-block;padding: 0 .2rem;color: #333;}
  .active {color: #FE312A;border-bottom: 1px #FE312A solid;} 
</style>
